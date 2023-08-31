import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const history = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const course = searchParams.get('course');
  const [refer, setRefer] = useState();

  useEffect(() => {
    const storedRefer = localStorage.getItem('refer');
    if (storedRefer) {
      setRefer(storedRefer);
    }
  }, []);
useEffect(()=>{
  if(refer==="null"){
    setRefer(null)
  }
})
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    tele: "",
    city: "",
    state: "",
    pincode: "",
    referralCode: refer || "", // Set the referral code if available in the URL
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, phone, city, state, tele, pincode, referralCode } = user;

    if (email.endsWith('gmail.com')) {
      if (name && email && password && phone && city && state && pincode) {
        axios
          .post('https://testlt.onrender.com/reg', user)
          .then(res => {
            if (res.data === 'User already exists') {
              toast('User already exists');
            } else {
              toast(res.data)
              const info = {
                purpose: course,
                amount: '5000',
                buyer_name: user.name,
                email: user.email,
                phone: user.phone,
                redirect_url: `https://testlt.onrender.com/payment/callback?user_id=${res.data._id}`,
                webhooks_url: '/webhook/'
              };
              axios.post('https://testlt.onrender.com/payment', info)
                .then(res => {
                  console.log('payment_request', res.data);
                  // console.log(res)
                  window.location.href = res.data;


                })
                .catch((error) => console.log(error));
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    } else {
      toast('Only Gmail addresses are allowed');
    }
  };
  return (

    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-8">Registration Form</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={user.city}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={user.state}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="tele"
        placeholder="telegram"
        value={user.telegram}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={user.pincode}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {refer ? (
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          value={refer}
          readOnly // Prevent editing if referral code is preset
          className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      ) : (
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code"
          value={user.referralCode}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      )}

      <button
        onClick={register}
        className="w-full px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
      >
        Register

      </button>
    </div>
  );
}

export default App;

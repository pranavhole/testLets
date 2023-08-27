import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
function App() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    telegram:"",
    city: "",
    state: "",
    pincode: "",
    referralCode: "",
  });
  const [searchParams] = useSearchParams();
  const refer=searchParams.get('refer')
  
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
    }

  const register = () => {
    const { name, email, password, phone, city, state,telegram, pincode, referralCode } = user;
    console.log(user)
    if (email.slice(-9) === 'gmail.com') {
      if (name && email && password && phone && city && state && pincode) {
        axios.post('http://localhost:4000/reg', user)
          .then(res => {
            console.log(res);
            if (res.data === 'User already exists') {
              toast('user already exist');
            }
            else {
              toast(res.data);
              history('/login')
            }
          })
      }
    }
    else {
      toast('Only Gmail are allowed')
    }
  }

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
        name="telegram"
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

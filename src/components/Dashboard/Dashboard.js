import React, { useState} from 'react';
import { ReactComponent as CopyIcon } from './copy-icon.svg'; // Replace with your copy icon SVG
import logoutImg from './logout.svg'
import EditForm from './EditUser';
import { ToastContainer } from 'react-toastify';

const Dashboard = ({ handleLogout, data }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const user = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city,
    state: data.state,
    telegram:data.telegram,
    pincode: data.pincode,
    referralCode: data.Myrefer,
  };

  const handleEditClick = () => {
    setIsEditing(true);
    console.log(data)
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

 

  const handleCopyReferralCode = () => {
    if(user.referralCode){
    let text = 'https://letstradeindia.co/#/?refer=' + user.referralCode
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);}
    else{
      alert("Please purchess the course")
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <ToastContainer className="sticky" />
        {!(user.state && user.city && user.pincode) && (
                    <div className=' text-red-500 mb-5 font-bold'>Please fill in the complete data by clicking on the Edit button.</div>
                  )}
        <div className="relative w-full mx-auto px-4 py-10 bg-white shadow rounded-3xl sm:p-10 dashboard-main max-sm:rounded-none">
          <div className="flex justify-end">
            <button className="relative edit-btn" onClick={handleEditClick}>
              EDIT
            </button>
            <button className="relative pt-3" onClick={handleLogout}>
              <img src={logoutImg} className="h-6 logout-img" alt="Logout" />
            </button>
          </div>
          <div className="max-w-md mx-auto">
            {isEditing ? (
              <EditForm user={user} onSave={data._id} onCancel={handleCancelEdit} />
            ) : (
              <div>
                {/* Display user details here */}
                <h2 className="text-3xl font-bold mb-4">Profile Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="mb-1 text-gray-800 font-bold">Name:</label>
                    <input className='field' value={user.name}/>
                  </div>
                  <div className="col-span-1">
                    <label className="mb-1 text-gray-800 font-bold">Email:</label>
                    <input className='field' value={user.email}/>
                  </div>
                  {user.phone && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">Phone:</label>
                      <input className='field' value={user.phone}/>
                    </div>
                  )}
                  {user.city && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">City:</label>
                      <input className='field' value={user.city}/>
                    </div>
                  )}
                  {user.telegram && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">Telegram:</label>
                      <input className='field' value={user.telegram}/>
                    </div>
                  )}
                  {user.state && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">State:</label>
                      <input className='field' value={user.state}/>
                    </div>
                  )}
                  {user.pincode && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">Pincode:</label>
                      <input className='field' value={user.pincode}/>
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    Referral link
                    <button
                      className="ml-2 focus:outline-none"
                      onClick={handleCopyReferralCode }
                    >
                      {isCopied ? (
                        <span className="text-green-500">Copied!</span>
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  </h2>
                  {user.referralCode ? (
                    <p
                      className="text-gray-800 cursor-pointer"
                    >
                      https://letstradeindia.co/#/?refer={user.referralCode}
                    </p>
                  ) : (
                    <p className='field'> Buy The Course First</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
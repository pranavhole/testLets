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
    pincode: data.pincode,
    referralCode: data.Myrefer,
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

 

  const handleCopyReferralCode = () => {
    let text = 'https://tt-i9w7.onrender.com/?refer=' + user.referralCode
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <ToastContainer className="sticky" />
        <div className="relative w-full mx-auto px-4 py-10 bg-white shadow rounded-3xl sm:p-10">
          <div className="flex justify-end">
            <button className="relative pt-3" onClick={handleEditClick}>
              EDIT
            </button>
            <button className="relative pt-3" onClick={handleLogout}>
              <img src={logoutImg} className="h-6 bg-red-600" alt="Logout" />
            </button>
          </div>
          <div className="max-w-md mx-auto">
            {isEditing ? (
              <EditForm user={user} onSave={data._id} onCancel={handleCancelEdit} />
            ) : (
              <div>
                {/* Display user details here */}
                <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="mb-1 text-gray-800 font-bold">Name:</label>
                    <p>{user.name}</p>
                  </div>
                  <div className="col-span-1">
                    <label className="mb-1 text-gray-800 font-bold">Email:</label>
                    <p>{user.email}</p>
                  </div>
                  {user.phone && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">Phone:</label>
                      <p>{user.phone}</p>
                    </div>
                  )}
                  {user.city && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">City:</label>
                      <p>{user.city}</p>
                    </div>
                  )}
                  {user.state && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">State:</label>
                      <p>{user.state}</p>
                    </div>
                  )}
                  {user.pincode && (
                    <div className="col-span-1">
                      <label className="mb-1 text-gray-800 font-bold">Pincode:</label>
                      <p>{user.pincode}</p>
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    Referral link
                    <button
                      className="ml-2 focus:outline-none"
                      onClick={handleCopyReferralCode}
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
                      https://letstreadindia.onrender.com/?refer={user.referralCode}
                    </p>
                  ) : (
                    <p> Buy The Course First</p>
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
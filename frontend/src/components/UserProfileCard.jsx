import React from 'react';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const UserProfileCard = ({
  avatarImg,
  user,
  commonAddress,
  commonPhone,
  totalSpent,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* -- Left (Profile Picture & Basic Info) -- */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          {/* Bigger Profile Picture */}
          <img
            src={avatarImg}
            alt="Avatar"
            className="w-32 h-32 rounded-full ring-4 ring-blue-500 object-cover mb-4 md:mb-6"
          />
          {/* User Info */}
          <div>
            <h2 className="text-2xl font-bold mb-1">User Profile</h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Logged in as:</span> {user.email}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">User ID:</span> {user.uid}
            </p>
          </div>
        </div>

        {/* -- Right (Detailed Info) -- */}
        <div className="md:w-2/3 flex flex-col justify-center space-y-6">
          {/* Address Section (conditionally rendered) */}
          {commonAddress && (
            <div>
              <div className="flex items-center text-blue-600 mb-1">
                <HiOutlineLocationMarker className="mr-2 text-xl" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-700 ml-7">{commonAddress}</p>
            </div>
          )}

          {/* Phone Section (conditionally rendered) */}
          {commonPhone && (
            <div>
              <div className="flex items-center text-blue-600 mb-1">
                <HiOutlinePhone className="mr-2 text-xl" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-gray-700 ml-7">{commonPhone}</p>
            </div>
          )}

          {/* Total Spent */}
          <div>
            <div className="flex items-center text-blue-600 mb-1">
              <AiOutlineDollarCircle className="mr-2 text-xl" />
              <h3 className="font-semibold">Total Amount Spent</h3>
            </div>
            <p className="text-lg font-semibold text-green-600 ml-7">
              ${totalSpent?.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;


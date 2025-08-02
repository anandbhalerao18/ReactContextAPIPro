import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="w-full max-w-xs mx-auto">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-indigo-500/10">
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/20">
                <svg
                  className="h-8 w-8 text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Welcome Guest</h2>
            <p className="text-indigo-200/80 text-sm mb-4">Please login to access your profile</p>
            <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md shadow-indigo-500/20">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-indigo-500/10">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 p-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                className="h-14 w-14 rounded-full border-2 border-white/80 object-cover"
                src={user.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                alt="User profile"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-400 rounded-full border-2 border-indigo-700"></span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Welcome, {user.username}</h1>
              <p className="text-indigo-100/90 text-sm">{user.email || "Premium member"}</p>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30 text-center">
              <p className="text-xs text-indigo-200/80 font-medium">Status</p>
              <p className="text-sm font-semibold text-green-400 mt-1">Active</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30 text-center">
              <p className="text-xs text-indigo-200/80 font-medium">Last Login</p>
              <p className="text-sm font-semibold text-indigo-300 mt-1">Today</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30 text-center">
              <p className="text-xs text-indigo-200/80 font-medium">Role</p>
              <p className="text-sm font-semibold text-purple-300 mt-1">
                {user.role || "Standard"}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-sm font-medium text-indigo-200 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center p-3 bg-gray-700/40 rounded-lg border border-gray-600/30 hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-200">
                <svg
                  className="h-5 w-5 text-indigo-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-indigo-100 font-medium">Settings</span>
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-700/40 rounded-lg border border-gray-600/30 hover:bg-indigo-600/20 hover:border-indigo-500/30 transition-all duration-200">
                <svg
                  className="h-5 w-5 text-indigo-300 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm text-indigo-100 font-medium">Security</span>
              </button>
            </div>
          </div>

          {/* Additional Profile Info */}
          <div className="mt-6 pt-6 border-t border-gray-700/30">
            <h3 className="text-sm font-medium text-indigo-200 mb-3">Profile Completion</h3>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs text-indigo-200/70 mt-2">75% complete - Add more info</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white text-sm font-medium hover:from-indigo-700/80 hover:to-purple-700/80 transition-all duration-200 shadow-md shadow-indigo-500/20">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
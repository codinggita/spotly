import React from 'react';
import Navbar from '../../components/layout/Navbar';
import AuthLeftPanel from '../../components/auth/AuthLeftPanel';
import SignupForm from '../../components/auth/SignupForm';
const DriverSignupPage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-white">
      <Navbar authMode={true} />
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left Side - Visual Panel */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5">
          <AuthLeftPanel />
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-4 overflow-y-auto">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Create your Driver Account</h1>
            <p className="text-gray-500 mb-6 text-sm">Join Spotly and find the perfect parking spot in seconds.</p>
            
            <SignupForm type="driver" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSignupPage;

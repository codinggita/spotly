import React from 'react';
import AuthLeftPanel from '../components/auth/AuthLeftPanel';
import SignupForm from '../components/auth/SignupForm';
const DriverSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left Side - Visual Panel */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5">
          <AuthLeftPanel />
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your Driver Account</h1>
            <p className="text-gray-500 mb-8">Join Spotly and find the perfect parking spot in seconds.</p>
            
            <SignupForm type="driver" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSignupPage;

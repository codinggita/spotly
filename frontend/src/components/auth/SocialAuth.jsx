import React from 'react';

const SocialAuth = ({ mode = "SIGN UP" }) => {
  return (
    <div className="w-full space-y-4">
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
        <img 
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
          alt="Google" 
          className="w-5 h-5"
        />
        Continue with Google
      </button>

      <div className="flex items-center gap-4 py-2">
        <div className="flex-grow border-t border-gray-100"></div>
        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
          OR {mode} WITH EMAIL
        </span>
        <div className="flex-grow border-t border-gray-100"></div>
      </div>
    </div>
  );
};

export default SocialAuth;

import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white-500 mt-12">
        <div className="bg-gray-300 shadow rounded">
          <span className="px-4 py-2 flex flex-col justify-center item-center">
            <div>
              <h1 className="text-red-600 font-bold text-center mb-3">
                Sign in
              </h1>
            </div>

            <div className="my-2">
              <input
                type="email"
                className="border border-black rounded px-5 py-2 bg-white-300 "
                placeholder="Enter your email"
              />
            </div>
            <div className="my-2">
              <input
                type="password"
                className="border border-black rounded px-5 py-2 bg-white-300 "
                placeholder="Enter your password"
              />
            </div>
            <div className="py-2 flex flex-col items-center justify-center">
              <button className="bg-blue-600 py-2 px-5 rounded text-white">
                log in
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;

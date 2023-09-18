import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white-500 my-5">
      <div className="bg-gray-300 shadow rounded">
        <span className="px-4 py-2 flex flex-col justify-center item-center">
          <div>
            <h1 className="text-red-600 font-bold text-center mb-3">Sign up</h1>
          </div>
          <div className="my-2">
            <input
              type="text"
              className="border border-black rounded px-5 py-2 bg-white-300 "
              placeholder="Enter your first name"
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              className="border border-black rounded px-5 py-2 bg-white-300 "
              placeholder="Enter your last name"
            />
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
              Submit
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default SignUp;

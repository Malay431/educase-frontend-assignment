import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[90vh] border w-[300px] my-10 border-gray-200 shadow-md flex flex-col justify-between">
        <div>
          <div className="px-4 py-4 mr-10">
            <h1 className="text-xl font-semibold">
              Create your <br /> PopX account
            </h1>
          </div>
          <div className="flex flex-col mt-5 mx-4 gap-5">
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium">
                Full name
              </label>
              <input
                placeholder="Marry Doe"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium">
                Phone number
              </label>
              <input
                placeholder="Marry Doe"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium">
                Email address
              </label>
              <input
                placeholder="Marry Doe"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium">
                Password
              </label>
              <input
                placeholder="Marry Doe"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium">
                Company name
              </label>
              <input
                placeholder="Marry Doe"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded"
              />
            </div>
            <div>
              <p className="text-sm">
                Are you an Agency? <span className="text-red-600">*</span>
              </p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-1 cursor-pointer">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="agency"
                    value="yes"
                  />
                  <span className="text-sm">Yes</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="agency"
                    value="no"
                  />
                  <span className="text-sm">No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 mb-4">
          <Link
            to="/profile"
            className="block w-full border text-center py-2 text-sm text-white rounded bg-[#6C25FF]"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

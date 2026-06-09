import React from 'react'
import { Link } from 'react-router-dom'

const MainScreen = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[90vh] border w-[300px] my-10 border-gray-200 shadow-md flex flex-col justify-end">
        <div className="pb-8">
          <div className="px-4">
            <h1 className="text-xl font-bold">Welcome to PopX</h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col mt-5 mx-4 gap-2">
            <Link
              to="/signup"
              className="bg-[#6C25FF] text-white py-2 rounded text-center cursor-pointer"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="bg-purple-300 text-black py-2 text-sm font-medium rounded text-center cursor-pointer"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen

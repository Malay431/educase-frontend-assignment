import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[90vh] border w-[300px] my-10 border-gray-200 shadow-md flex flex-col">
        <div className="pb-8">
          <div className="px-4 py-4 mr-10">
            <h1 className="text-xl font-semibold">Signin to your <br/> PopX account</h1>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col mt-5 mx-4 gap-4">
            <div className='relative'>
                <label className='absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium'>Email Address</label>
                <input placeholder='Enter email address' className='w-full px-3 py-2 border text-sm border-gray-300 rounded'/>
            </div>
            <div className='relative'>
                <label className='absolute -top-3 left-2 bg-white px-1 text-sm text-purple-600 font-medium'>Password</label>
                <input placeholder='Enter password' className='w-full px-3 py-2 border text-sm border-gray-300 rounded'/>
            </div>
            <Link to='/profile' className='border text-center bg-gray-300 py-1 text-white rounded hover:bg-[#6C25FF]'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen

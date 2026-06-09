import React from "react";

const ProfileScreen = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[90vh] border w-[300px] my-10 border-gray-200 shadow-md flex flex-col">
        <div className="p-4 border-b border-gray-200 shadow-sm text-[18px]">
            Account Settings
        </div>
        <div className="flex my-5 mx-3 gap-4 text-sm">
            <div className="relative">
                <img className="w-15 h-15 rounded-full" src='profile.png' alt='Profile'/>
                <img src='camera.svg' className="absolute -right-1 bottom-1 w-5 h-5" alt=''/>
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-[15px]">Marry Doe</label>
                <label className="text-[14px] text-gray-700">Marry@Gmail.Com</label>
            </div>
        </div>
        <div className="text-[14px] capitalize mx-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet odit libero qui sed tenetur blanditiis autem?
        </div>
        <div className="border-b border-dashed mt-4 border-[#CBCBCB]"></div>
      </div>
    </div>
  );
};

export default ProfileScreen;

import React from "react";

const ProfilesHeader = () => {
  return (
    <div className="container m-4 hidden sm:block  ">
      <div className="flex flex-1 justify-around md:justify-center  md:gap-0 w-1/2 md:w-8/12 mx-auto  ">
        <p className="md:w-1/6  md:text-left flex gap-1">
          <span className="hidden xl:block">Total</span>Followers
        </p>
        <p className="md:w-1/6  md:text-left hidden md:block">Country</p>
        <p className="md:w-1/6  md:text-left hidden md:block">Age</p>
        <p className="md:w-1/6  md:text-left  gap-1 hidden md:flex">
          Engagement <span className="hidden xl:block">Rate</span>
        </p>
        <p className="md:w-1/6 sm:block  md:text-center md:mr-12 xl:mr-0">
          Fee
        </p>
      </div>
    </div>
  );
};

export default ProfilesHeader;

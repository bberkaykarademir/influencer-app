"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";
import SingleProfileMore from "./SingleProfileMore";
import { SingleProfileProps } from "@/types";

const SingleProfile = ({
  user,
  deleteUser,
  approved,
  setApproved,
}: SingleProfileProps) => {
  const [more, setMore] = useState(false);
  useEffect(() => {
    console.log("selamlar");
    console.log(approved);
  }, [approved]);
  const containerStyle = {
    backgroundColor: approved ? "green" : "white",
  };
  return (
    <>
      <div className="mb-4">
        <div
          style={containerStyle}
          className="flex bg-white py-4 px-2 lg:px-8 justify-between items-center"
        >
          <div className="w-12 h-12 rounded-full relative">
            <Image
              alt="pp"
              src={user.insta.profile_pic}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="md:w-1/12 sm:w-1/4 ">
            <h1 className="text-[#1D1C1D] font-bold text-base">
              {user.insta.full_name}
            </h1>
            <p className="text-[#A1A1AA] text-xs">@{user.insta.username}</p>
          </div>
          <p className="md:w-1/12 w-1/6 hidden sm:block">
            {user.insta.followers + user.tiktok.followers}
          </p>
          <p className="md:w-1/12 hidden md:block">{user.country}</p>
          <p className="md:w-1/12 hidden md:block">{user.age}</p>
          <p className="md:w-1/12 hidden md:block">
            %{user.tiktok.tiktok_engagement_rate * 100}
          </p>
          <p className="md:w-1/12 sm:w-1/6 hidden sm:block">
            {user.money.fee}
            <small>{user.money.currency}</small>
          </p>
          <button
            onClick={() => setMore(!more)}
            className="text-xl p-1 border rounded-full outline-none "
          >
            {more ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </button>
          <div className="flex sm:gap-4 items-center justify-between">
            <button
              onClick={() => deleteUser(user.firebase_id)}
              className=" text-sm py-1 px-2 sm:py-2 sm:px-4 md:text-2xl bg-red-600 rounded-md text-white outline-none"
            >
              <AiOutlineClose />
            </button>
            <button
              onClick={() => setApproved(user.firebase_id)}
              className=" text-sm py-1 px-2 sm:py-2 sm:px-4 md:text-2xl bg-green-600 rounded-md text-white outline-none"
            >
              <AiOutlineCheck />
            </button>
          </div>
        </div>
        <SingleProfileMore user={user} more={more} />
      </div>
    </>
  );
};

export default SingleProfile;

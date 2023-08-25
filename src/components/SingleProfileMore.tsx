import { InstaSharedPost, SingleProfileMoreProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

const SingleProfileMore = ({ user, more }: SingleProfileMoreProps) => {
  return (
    <div
      className={`${
        more ? "" : "hidden"
      } flex flex-col lg:flex-row container  mx-auto bg-white p-2 sm:p-8`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center sm:hidden">
          <p className="w-32">Total Followers:</p>
          <p className="sm:w-64 text-gray-500">
            {user.insta.followers + user.tiktok.followers}
          </p>
        </div>
        <div className="flex items-center sm:hidden">
          <p className="w-32">Fee:</p>
          <p className="sm:w-64 text-gray-500">
            {user.money.fee}
            {user.money.currency}
          </p>
        </div>
        <div className="flex items-center md:hidden">
          <p className="w-32">Country:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.country}</p>
        </div>
        <div className="flex items-center md:hidden">
          <p className="w-32">Age:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.age}</p>
        </div>
        <div className="flex items-center md:hidden">
          <p className="w-32">Engagement:</p>
          <p className="sm:w-64 w-60 text-gray-500">
            %{user.tiktok.tiktok_engagement_rate * 100}
          </p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">Gender:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.gender}</p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">Bio:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.insta.biography}</p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">City:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.city}</p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">Hobbies:</p>
          <p className="sm:w-64 w-60 text-gray-500">
            {user.hobbies.join(", ")}
          </p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">Job:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.job}</p>
        </div>
        <div className="flex items-center ">
          <p className="w-32">Education:</p>
          <p className="sm:w-64 w-60 text-gray-500">{user.school_name}</p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row justify-center  bg-[#FAF9FA] gap-8 sm:ml-auto">
        {user.insta.shared_posts.map((post: InstaSharedPost, index: number) => (
          <div
            key={index}
            className=" relative rounded w-48 h-64 bg-white px-1 "
          >
            <Image
              alt="post"
              src={post.img}
              width="0"
              height="0"
              sizes="100vw"
              className="rounded object-cover w-full h-full "
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AiFillHeart fill="red" />
                <small>{post.likes}</small>
              </div>
              <div className="flex items-center">
                <AiOutlineComment />
                <small>{post.comments}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProfileMore;

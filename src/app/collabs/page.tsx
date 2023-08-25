import { collabs } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collabs = () => {
  return (
    <>
      <div className="flex flex-col  w-full h-screen justify-center items-center gap-4 ">
        <div className="flex flex-wrap gap-4">
          {collabs.map((collab, index) => (
            <div key={index} className="border p-4 h-fit">
              <div className=" relative rounded w-48 h-64 bg-white px-1 ">
                <Image
                  alt="post"
                  src={collab.img}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="rounded object-cover w-full h-full "
                />
              </div>
              <h3>Username: {collab.username}</h3>
              <p>Deal Date: {collab.dealDate.toLocaleDateString()}</p>
              <p>Deal Type: {collab.dealType}</p>
              <p>Deal With: {collab.dealWith}</p>
              <p>Views: {collab.views}</p>
            </div>
          ))}
        </div>
        <Link className="mx-auto" href="/">
          <button className="py-2 px-4 mx-auto bg-green-500 ">
            Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Collabs;

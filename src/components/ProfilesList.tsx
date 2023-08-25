"use client";
import React from "react";
import SingleProfile from "./SingleProfile";
import { useState } from "react";
import { ProfilesListProps, UserInfo } from "@/types";
import Link from "next/link";

const ProfilesList = ({ filteredUsers, deleteUser }: ProfilesListProps) => {
  const [updatedUsersWithApproved, setUpdatedUsersWithApproved] = useState<
    UserInfo[]
  >(
    filteredUsers.map((user: UserInfo) => ({
      ...user,
      approved: false,
    }))
  );

  const setApproved = (id: string) => {
    const updatedUsers = updatedUsersWithApproved.map((user: UserInfo) =>
      user.firebase_id == id ? { ...user, approved: !user.approved } : user
    );
    setUpdatedUsersWithApproved(updatedUsers);
    console.log(updatedUsersWithApproved);
  };

  return (
    <div className="container flex flex-col pb-4">
      {filteredUsers.map((user: UserInfo) => (
        <SingleProfile
          deleteUser={deleteUser}
          key={user.firebase_id}
          user={user}
          approved={
            updatedUsersWithApproved.find(
              (u: UserInfo) => u.firebase_id === user.firebase_id
            )?.approved
          }
          setApproved={setApproved}
        />
      ))}
      <Link className="mx-auto" href="/collabs">
        <button className="py-2 px-4 mx-auto bg-green-500 ">Old Collabs</button>
      </Link>
    </div>
  );
};

export default ProfilesList;

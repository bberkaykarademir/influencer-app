"use client";

import FilterSection from "@/components/FilterSection";
import ProfilesHeader from "@/components/ProfilesHeader";
import ProfilesList from "@/components/ProfilesList";
import React, { useState } from "react";
import { userInfo } from "@/data";
import { UserInfo } from "@/types";

const page = () => {
  const [users, setUsers] = useState(userInfo);
  const [filteredUsers, setFilteredUsers] = useState(users);
  function handleUserChange(newUsers: UserInfo[]) {
    setFilteredUsers(newUsers);
  }
  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.firebase_id !== id));
    setFilteredUsers((prev) => prev.filter((user) => user.firebase_id !== id));
  };
  return (
    <div className="w-full min-h-screen bg-[#FAF9FA] flex flex-col justify-center items-center">
      <FilterSection users={users} onFilterChange={handleUserChange} />
      <ProfilesHeader />
      <ProfilesList deleteUser={deleteUser} filteredUsers={filteredUsers} />
    </div>
  );
};

export default page;

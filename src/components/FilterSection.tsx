"use client";
import React, { useEffect, useState } from "react";
import { exchangeRates } from "@/data";
import { FilterSectionProps, UserInfo, exchangeRatesInterface } from "@/types";

const FilterSection = ({ users, onFilterChange }: FilterSectionProps) => {
  const [followers, setFollowers] = useState<string | undefined>();
  const [age, setAge] = useState<string | undefined>();
  const [engagement, setEngagement] = useState<string | undefined>();
  const [budget, setBudget] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();

  const usersWithUSD = users.map((user: UserInfo) => {
    const exchangeRate =
      exchangeRates[user.money.currency as keyof exchangeRatesInterface];
    const feeUSD = user.money.fee * exchangeRate;

    return {
      ...user,
      money: { ...user.money, feeUSD },
    };
  });

  function handleFilter() {
    let filteredUsers = usersWithUSD;

    if (followers && followers !== "all") {
      const followersRange = followers.split("-");
      const minFollowers = !followersRange[1]
        ? parseInt(followersRange[0]) + 1
        : parseInt(followersRange[0]);
      const maxFollowers = !followersRange[1]
        ? Infinity
        : parseInt(followersRange[1]);

      filteredUsers = filteredUsers.filter(
        (user: UserInfo) =>
          user.insta.followers + user.tiktok.followers >= minFollowers &&
          user.insta.followers + user.tiktok.followers <= maxFollowers
      );
    }

    if (age && age !== "all") {
      const ageRange = age.split("-");
      const minAge = !ageRange[1]
        ? parseInt(ageRange[0]) + 1
        : parseInt(ageRange[0]);
      const maxAge = !ageRange[1] ? Infinity : parseInt(ageRange[1]);

      filteredUsers = filteredUsers.filter(
        (user: UserInfo) => user.age >= minAge && user.age <= maxAge
      );
    }

    if (engagement && engagement !== "all") {
      const engagementRange = engagement.split("-");
      const minEngagement = !engagementRange[1]
        ? parseInt(engagementRange[0]) + 0.000000001
        : parseInt(engagementRange[0]);
      const maxEngagement = !engagementRange[1]
        ? Infinity
        : parseInt(engagementRange[1]);

      filteredUsers = filteredUsers.filter(
        (user: UserInfo) =>
          user.tiktok.tiktok_engagement_rate * 100 >= minEngagement &&
          user.tiktok.tiktok_engagement_rate * 100 <= maxEngagement
      );
    }

    if (budget && budget !== "all") {
      const budgetRange = budget.split("-");
      const minBudget = !budgetRange[1]
        ? parseInt(budgetRange[0]) + 1
        : parseInt(budgetRange[0]);
      const maxBudget = !budgetRange[1] ? Infinity : parseInt(budgetRange[1]);

      filteredUsers = filteredUsers.filter(
        (user: UserInfo) =>
          user.money.feeUSD >= minBudget && user.money.feeUSD <= maxBudget
      );
    }

    if (country) {
      filteredUsers = filteredUsers.filter((user: UserInfo) =>
        user.country.toLowerCase().includes(country.toLowerCase())
      );
    }

    onFilterChange(filteredUsers);
  }

  useEffect(() => {
    handleFilter();
  }, [followers, age, engagement, budget, country]);
  return (
    <div className="flex  flex-col lg:flex-row gap-8 mb-16">
      <div className="flex gap-2 lg:gap-8">
        <select
          className="lg:p-2 outline-none"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
        >
          <option selected disabled value="">
            Total Followers
          </option>
          <option value="all">All</option>
          <option value="1000-10000">1K-10K</option>
          <option value="10001-100000">10K-100K</option>
          <option value="100000+">100K+</option>
        </select>
        <select
          className="lg:p-2 outline-none"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option selected disabled value="">
            Age
          </option>
          <option value="all">All</option>
          <option value="10-20">10-20</option>
          <option value="21-30">21-30</option>
          <option value="30+">30+</option>
        </select>
      </div>
      <div className="flex gap-2 mr-2 lg:gap-8">
        <select
          className="lg:p-2 outline-none"
          value={engagement}
          onChange={(e) => setEngagement(e.target.value)}
        >
          <option selected disabled value="">
            Engagement Rate
          </option>
          <option value="all">All</option>
          <option value="1-10">1%-10%</option>
          <option value="11-20">11%-20%</option>
          <option value="20+">20%+</option>
        </select>
        <select
          className="lg:p-2 outline-none"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option selected disabled value="">
            Budget
          </option>
          <option value="all">All</option>
          <option value="10-100">10$-100$</option>
          <option value="101-1000">101$-1000$</option>
          <option value="1000+">1000$+</option>
        </select>
      </div>
      <input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 outline-none"
        type="text"
        placeholder="Country"
      />
    </div>
  );
};

export default FilterSection;

import React, { useState } from "react";
import Card from "../products/Card";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingCard from "../products/LoadingCard";
import { GoPlus } from "react-icons/go";

export const getProductsList = () => {
  return axios.get(`https://munchies-api.up.railway.app/products`);
};
const HomeKitchen = () => {
  const [short, setShort] = useState<string>("all");
  const { data, isLoading, isError } = useQuery("products", getProductsList);

  return (
    <section className="py-16 bg-[#F7F8FA]">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[24px] font-medium">Home Kitchen</h1>

          <ul className="border border-[#F3BA00] md:w-[800px] flex flex-row items-center rounded-xl overflow-hidden mt-3">
            <li
              className={`border-r custome-short-btn ${
                short === "all" ? "bg-[#F3BA00] font-bold" : "text-gray-500"
              }`}
              onClick={(e) => {
                setShort("all");
              }}
            >
              All
            </li>
            <li
              className={`border-r custome-short-btn  ${
                short === "button" ? "bg-[#F3BA00]  font-bold" : "text-gray-500"
              }`}
              onClick={(e) => {
                setShort("button");
              }}
            >
              Button
            </li>
            <li
              className={`border-r custome-short-btn  ${
                short === "free" ? "bg-[#F3BA00]  font-bold" : "text-gray-500"
              }`}
              onClick={(e) => {
                setShort("free");
              }}
            >
              Free Delivery
            </li>
            <li
              className={`border-r custome-short-btn  ${
                short === "new" ? "bg-[#F3BA00] font-bold" : "text-gray-500"
              }`}
              onClick={(e) => {
                setShort("new");
              }}
            >
              New
            </li>
            <li
              className={`custome-short-btn  ${
                short === "coming" ? "bg-[#F3BA00] font-bold" : "text-gray-500"
              }`}
              onClick={(e) => {
                setShort("coming");
              }}
            >
              Coming
            </li>
          </ul>
        </div>
        <select
          name="filter"
          className="px-5 py-4 mt-6 border-2 rounded-xl min-w-[300px] text-gray-500"
        >
          <option value="all">Filters</option>
          <option value="button">Button</option>
          <option value="free">Free Delivery</option>
          <option value="new">New</option>
          <option value="coming">coming</option>
        </select>
        <div className="grid gap-12 px-3 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-0">
          {isLoading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            data?.data.map((product: any) => {
              return <Card key={product.id} product={product} />;
            })
          )}
        </div>
        <div className="flex items-center justify-center mt-20">
          <button className="flex items-center justify-center space-x-2 border border-[#F3BA00] py-3 px-8 text-gray-500 rounded-lg ">
            <span>
              <GoPlus />
            </span>{" "}
            <span>Load More...</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeKitchen;

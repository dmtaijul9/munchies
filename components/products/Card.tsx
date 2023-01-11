/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

const Card = ({ product }) => {
  const { image, id, name, price } = product;
  return (
    <div className="w-full duration-500 bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl">
      <a href="#">
        <Image
          src={image}
          alt="Product"
          className="object-cover w-full h-72 rounded-t-xl"
          width={500}
          height={500}
        />
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="block text-lg font-medium text-[#1B1C21] capitalize truncate">
              {name}
            </p>
            <p className="my-3 text-lg font-medium text-[#1B1C21] cursor-auto">
              ৳ {price}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center justify-center space-x-1 bg-[#F7F8FA] shadow-sm py-1 px-2 rounded-md">
                <div>
                  <AiFillStar size={20} />
                </div>
                <p>4.7</p>
              </div>
              <div className="flex items-center justify-center space-x-1 bg-[#F7F8FA] shadow-sm py-1 px-2 rounded-md">
                <p>50-79 min</p>
              </div>
            </div>
            <div className=" ml-auto flex items-center justify-center space-x-1 bg-[#F3BA00] shadow-sm py-1 px-2 rounded-md text-white">
              <GoPlus size={22} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

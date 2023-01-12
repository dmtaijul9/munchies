import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#1AC073] text-white">
      <div>
        <div className="flex items-center justify-between container mx-auto h-[70px] border-b-2 border-white">
          <div className="">
            <Image
              src="/img/WHAT2EAT.png"
              alt="logo"
              width={300}
              height={100}
              className="w-auto "
            />
          </div>
          <ul className="hidden space-x-4 md:flex ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-3">
            <button className="flex items-center p-2 text-gray-400 bg-white rounded-md">
              <FaFacebookF size={16} />
            </button>
            <button className="flex items-center p-2 text-gray-400 bg-white rounded-md">
              <AiFillInstagram size={16} />
            </button>
          </div>
        </div>

        <div className="py-5 text-center text-white">
          Copyright © 2022 What2Eat.
        </div>
      </div>
    </div>
  );
};

export default Footer;

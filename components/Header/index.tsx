import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="absolute h-[80px] py-2 bg-transparent w-full">
      <div className="container flex items-center justify-between mx-auto text-white">
        <div>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={300}
            height={100}
            className="w-[120px] h-[65px]"
          />
        </div>
        <ul className="flex space-x-4">
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
          <button className="flex items-center">
            <FiSearch size={25} />
          </button>
          <button className="flex items-center">
            <HiShoppingBag size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

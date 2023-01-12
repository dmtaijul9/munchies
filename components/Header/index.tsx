import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";
import { state } from "../../lib/type";

const Header = ({ transparent }: { transparent?: boolean }) => {
  const quantity = useSelector((state: state) => state.cart.cartTotalQuantity);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header
        className={` w-screen py-2 ${navOpen ? "bg-white" : ""} ${
          transparent ? "absolute" : ""
        }`}
      >
        <nav className="container flex flex-wrap items-center justify-between px-4 py-4 mx-auto text-lg md:py-0">
          <div>
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={300}
                height={100}
                className="w-[120px] h-[65px]"
              />
            </Link>
          </div>

          <div
            className={`items-center md:hidden mr-6 space-x-3 flex ${
              navOpen ? "text-gray-700" : "text-white"
            } `}
          >
            <div className="flex items-center mr-6 space-x-3">
              <button className="flex items-center">
                <FiSearch size={26} />
              </button>
              <Link href="/cart" className="relative flex items-center">
                <HiShoppingBag size={26} />
                {quantity >= 1 && (
                  <div className="absolute text-white bg-red-600 w-[16px] h-[16px] bottom-5 left-4 flex items-center justify-center rounded-full text-[10px]">
                    {quantity}
                  </div>
                )}
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="block w-6 h-6 cursor-pointer "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div
            className={`duration-200 w-full md:flex md:items-center md:w-auto ${
              navOpen ? "" : "hidden"
            }`}
          >
            <ul
              className={`pt-4 text-base  md:flex md:justify-between md:pt-0 ${
                navOpen ? "text-gray-700" : ""
              } ${transparent ? "text-white" : "text-gray-900"}`}
            >
              <li>
                <Link
                  className="block py-2 md:p-4 hover:text-purple-400"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 md:p-4 hover:text-purple-400"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 md:p-4 hover:text-purple-400"
                  href="#"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 md:p-4 hover:text-purple-400"
                  href="#"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 md:p-4 hover:text-purple-400"
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`items-center hidden mr-6 space-x-3 md:flex ${
              navOpen ? "text-gray-700" : ""
            } ${transparent ? "text-white" : "text-gray-900"}`}
          >
            <button className="flex items-center">
              <FiSearch size={26} />
            </button>
            <Link href="/cart" className="relative flex items-center">
              <HiShoppingBag size={26} />
              {quantity >= 1 && (
                <div className="absolute text-white bg-red-600 w-[16px] h-[16px] bottom-5 left-4 flex items-center justify-center rounded-full text-[10px]">
                  {quantity}
                </div>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

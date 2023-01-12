import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0C1712]  py-20">
      <div className="container flex items-center justify-between m-auto min-h-[700px]">
        <div className="px-2 text-white md:w-1/2 md:px-0">
          <div className=" md:w-[500px] w-full">
            <h1 className="md:text-[70px] text-[40px]">
              Authentic Home food in UK
            </h1>
            <p>
              What2Eat is a courier service in which authentic home cook food is
              delivered to a customer.
            </p>
          </div>
          <div className="mt-5 max-w-[400px]">
            <div className="relative flex items-stretch w-full mb-4 input-group">
              <input
                type="search"
                className="relative flex-auto block w-full min-w-0 px-3 py-4 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border-0 border-gray-300 border-solid rounded-l form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search food you love"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                className="inline-block text-white px-6 py-2 text-xs font-medium leading-tight  uppercase transition duration-150 ease-in-out  border-blue-600 rounded-r btn  hover:bg-opacity-50 focus:outline-none focus:ring-0 bg-[#F3BA00] border-0"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="items-center justify-center hidden w-1/2 lg:flex">
          <Image
            src="/img/cuate.png"
            alt="cuate"
            width={500}
            height={500}
            className="w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

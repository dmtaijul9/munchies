import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mb-5 bg-white rounded-lg ">
      <Link href="/">
        <Image
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
          width={500}
          height={500}
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-extralight text-[#1B1C21]">
          Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris
          sed faucibus.
        </p>
      </div>
    </div>
  );
};

export default Card;

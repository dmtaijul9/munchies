import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container m-auto">
        <div className="mb-5">
          <h1 className="text-[24px] font-medium">Our Blog</h1>
        </div>
        <div className="grid grid-cols-1 gap-10 px-2 sm:px-0 sm:grid-cols-2 lg:grid-cols-4">
          <div className="w-full mb-5 bg-white rounded-lg ">
            <Link href="/">
              <Image
                className="rounded-t-lg"
                src="/img/blog/unsplash_bZD6EO4cx2U.png"
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
                  Most Satisfying Cake decorating Cake ideas
                </h5>
              </a>
              <p className="mb-3 font-extralight text-[#1B1C21]">
                Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                mauris sed faucibus.
              </p>
            </div>
          </div>
          <div className="w-full mb-5 bg-white rounded-lg lg:col-span-2 lg:col-start-2 lg:row-span-2">
            <Link href="/">
              <Image
                className="w-full rounded-t-lg"
                src="/img/blog/unsplash_B-j277apkPg.png"
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
                  Most Satisfying Cake decorating Cake ideas
                </h5>
              </a>
              <p className="mb-3 font-extralight text-[#1B1C21]">
                Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                mauris sed faucibus.
              </p>
            </div>
          </div>
          <div className="w-full mb-5 bg-white rounded-lg ">
            <Link href="/">
              <Image
                className="rounded-t-lg"
                src="/img/blog/unsplash_OlKCes2y1eA.png"
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
                  Most Satisfying Cake decorating Cake ideas
                </h5>
              </a>
              <p className="mb-3 font-extralight text-[#1B1C21]">
                Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                mauris sed faucibus.
              </p>
            </div>
          </div>
          <div className="w-full mb-5 bg-white rounded-lg ">
            <Link href="/">
              <Image
                className="rounded-t-lg"
                src="/img/blog/unsplash_pp88AksN4dg.png"
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
                  Most Satisfying Cake decorating Cake ideas
                </h5>
              </a>
              <p className="mb-3 font-extralight text-[#1B1C21]">
                Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                mauris sed faucibus.
              </p>
            </div>
          </div>
          <div className="w-full mb-5 bg-white rounded-lg ">
            <Link href="/">
              <Image
                className="rounded-t-lg"
                src="/img/blog/unsplash_TclQHtlkzRc.png"
                alt=""
                width={1000}
                height={1000}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-wide text-[#101115]">
                  Most Satisfying Cake decorating Cake ideas
                </h5>
              </a>
              <p className="mb-3 font-extralight text-[#1B1C21]">
                Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
                mauris sed faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

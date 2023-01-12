import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container flex items-center justify-between mx-auto space-x-20">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-[24px] tracking-wide text-[#101115] w-1/2">
              Do you have a question or want to become a seller ?
            </h2>
            <p className="text-[#1B1C21] text-sm tracking-wide">
              Fill this form and our manager will contact you next 48 hours.
            </p>
          </div>
          <form className="flex flex-col w-full mt-5 space-y-8">
            <div className="flex w-full space-x-5">
              <div className="w-full">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-4 rounded-xl "
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-4 rounded-xl "
                  name="email"
                  placeholder="Your E-mail"
                />
              </div>
            </div>
            <div className="w-full ">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                cols={30}
                className="w-full px-4 py-4 rounded-xl "
                rows={10}
                placeholder="Your Message"
              />
            </div>
          </form>
        </div>
        <div className="items-center justify-center hidden w-1/2 lg:flex">
          <Image
            src="/img/Food_delivery_cute_man_riding_motorcycles_cartoon_art_illustration 2 (1).png"
            alt="Food delivery"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

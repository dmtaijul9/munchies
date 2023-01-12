/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/checkout/Card";
import Layout from "../../components/ui/Layout";
import { useForm } from "../../lib/useForm";
import { MdAlternateEmail } from "react-icons/md";
import { useRouter } from "next/router";
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import { getSubTotal, getVat } from "../../utils/getData";
import axios from "axios";
import { objAddonItems } from "../../lib/type";

const index = () => {
  const router = useRouter();
  const { items, cartTotalAmount } = useSelector((state: any) => state.cart);
  useEffect(() => {
    if (cartTotalAmount <= 0) {
      router.push("/");
    }
  }, [cartTotalAmount]);

  const { inputs, handleChange, clearForm } = useForm({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { name, email, address } = inputs;
    if (name.trim() === "" || email.trim() === "" || address.trim() === "") {
      return toast.error("Fields can not be empty!");
    }
    const price = getSubTotal(items);

    const vat = getVat(items);

    const customer = {
      ...inputs,
    };
    const calculation = {
      price,
      vat,
      total: price + vat,
    };
    const cartItems = items.map((item: objAddonItems) => {
      const { id, name, price, quantity, vat, addons } = item;
      return {
        id,
        name,
        price,
        quantity,
        vat,
        addon: {
          name: addons.name,
          price: addons.price,
        },
      };
    });

    const readyToOrderProccess = {
      customer,
      calculation,
      cartItems,
    };

    console.log(readyToOrderProccess);
    try {
      const res = await axios({
        url: "https://munchies-api.up.railway.app/order/",
        method: "POST",
        data: readyToOrderProccess,
        headers: {
          "Content-Type": "application/javascript",
          "x-access-user": "taijulislam.st9@gmail.com",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="container py-20 mx-auto ">
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items as summary to order.
            </p>
            <div className="px-2 py-4 mt-8 space-y-3 bg-white border rounded-lg sm:px-6">
              {items.map((item: objAddonItems) => {
                return <Card key={item.id} item={item} />;
              })}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-4 pt-8 mt-10 bg-gray-50 lg:mt-0"
          >
            <p className="text-xl font-medium">Coustomers Details</p>
            <p className="text-gray-400">
              Complete your order by providing your details.
            </p>
            <div className="">
              <div>
                <label
                  htmlFor="email"
                  className="block mt-4 mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block mt-4 mb-2 text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 text-sm uppercase border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mt-4 mb-2 text-sm font-medium"
                >
                  Billing Address
                </label>
                <textarea
                  className="w-full px-4 py-3 text-sm uppercase border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  name="address"
                  cols={30}
                  rows={10}
                  placeholder="Your Billing address Here"
                  value={inputs.address}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  $ {cartTotalAmount}
                </p>
              </div>
            </div>
            <button
              className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md"
              type="submit"
            >
              Place Order
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default index;

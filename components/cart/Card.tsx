import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

import {
  decreamentCart,
  deleteItems,
  increamentCart,
} from "../../redux/services/cartSlice";

const Card = ({ item }: { item: any }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col py-6 space-y-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0">
        <Image
          className="object-cover w-24 h-24 max-w-full rounded-lg"
          src={item.image}
          alt={item.name}
          width={150}
          height={150}
        />
      </div>

      <div className="relative flex flex-col justify-between flex-1">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">
              {item.addons.name}
            </p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
              Quantity - {item.quantity} and {item.vat}% vat will be added.
            </p>
          </div>

          <div className="flex items-end justify-between mt-4 sm:mt-0 sm:items-start sm:justify-end">
            <p className="w-20 text-base font-semibold text-gray-900 shrink-0 sm:order-2 sm:ml-8 sm:text-right">
              ৳ {item.addons.price * item.quantity}
            </p>

            <div className="sm:order-1">
              <div className="flex items-stretch h-8 mx-auto text-gray-600">
                <button
                  className="flex items-center justify-center px-4 transition bg-gray-200 rounded-l-md hover:bg-black hover:text-white"
                  disabled={item.quantity <= 1}
                  onClick={() => {
                    dispatch(
                      decreamentCart({
                        id: item?.id,
                      })
                    );
                  }}
                >
                  -
                </button>
                <div className="flex items-center justify-center w-full px-4 text-xs uppercase transition bg-gray-100">
                  {item.quantity}
                </div>
                <button
                  className="flex items-center justify-center px-4 transition bg-gray-200 rounded-r-md hover:bg-black hover:text-white"
                  disabled={item.quantity >= item.quantity_available}
                  onClick={() => {
                    dispatch(
                      increamentCart({
                        id: item?.id,
                      })
                    );
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            type="button"
            className="flex p-2 text-center text-gray-500 transition-all duration-200 ease-in-out rounded focus:shadow hover:text-gray-900"
            onClick={() => {
              dispatch(deleteItems({ id: item.id, quantity: item?.quantity }));
            }}
          >
            <svg
              className="block w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className=""
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;

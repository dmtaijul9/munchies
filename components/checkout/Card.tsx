import Image from "next/image";
import React from "react";
import { objAddonItems } from "../../lib/type";

const Card = ({ item }: { item: objAddonItems }) => {
  const totalPrice = item.addons.price * item.quantity;
  return (
    <div className="flex flex-col bg-white rounded-lg sm:flex-row">
      <Image
        className="object-cover object-center h-24 m-2 border rounded-md w-28"
        src={item.image}
        alt=""
        width={150}
        height={150}
      />
      <div className="flex flex-col w-full px-4 py-4">
        <span className="font-semibold">{item.addons.name}</span>
        <span className="float-right text-gray-400">
          Quantity - {item.quantity}
        </span>
        <p className="mt-auto text-lg font-bold">{totalPrice}</p>
      </div>
    </div>
  );
};

export default Card;

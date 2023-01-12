import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProductsList } from "../../components/home-page/HomeKitchen";
import Layout from "../../components/ui/Layout";
import { useForm } from "../../lib/useForm";
import { addToCart } from "../../redux/services/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { items } from "../../lib/type";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [addonType, setAddonType] = useState<string>("half");
  const dispatch = useDispatch();

  const { inputs, handleChange, clearForm } = useForm({
    quantity: 1,
  });

  const { data, isLoading, isError } = useQuery("products", getProductsList);

  const product = data?.data.filter((product: items) => {
    return product.id.toString() === productId;
  })[0];

  const addToCartHandler = () => {
    let addonProduct;
    if (addonType === "half") {
      addonProduct = {
        ...product?.addons[0],
      };
    } else {
      addonProduct = {
        ...product?.addons[1],
      };
    }
    const cartTemProduct = {
      ...product,
      quantity: inputs.quantity,
      addons: {
        ...addonProduct,
      },
    };

    dispatch(addToCart(cartTemProduct));
    toast.success("Added to cart Successfully!");
    clearForm();
  };

  return (
    <Layout transparent={false}>
      <section className="container mx-auto my-16">
        <div>
          <ul className="border border-[#F3BA00] md:w-[400px] flex flex-row items-center rounded-xl overflow-hidden mt-3">
            <li
              className={`border-r custome-short-btn ${
                addonType === "half"
                  ? "bg-[#F3BA00] font-medium"
                  : "text-gray-500"
              }`}
              onClick={(e) => {
                setAddonType("half");
              }}
            >
              Half
            </li>
            <li
              className={`border-r custome-short-btn  ${
                addonType === "full"
                  ? "bg-[#F3BA00] font-medium"
                  : "text-gray-500"
              }`}
              onClick={(e) => {
                setAddonType("full");
              }}
            >
              Full
            </li>
          </ul>
        </div>
        <div className="mt-6 ">
          <div className="flex flex-col -mx-4 md:flex-row">
            <div className="px-4 md:flex-1">
              <div x-cloak>
                <div className="bg-gray-100 rounded-lg ">
                  <Image
                    src={product?.image}
                    alt="Product"
                    width={500}
                    height={700}
                    className="w-full"
                  />
                </div>

                <div className="flex mb-4 -mx-2"></div>
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
                {product?.addons[addonType === "half" ? 0 : 1].name}
              </h2>

              <div className="flex items-center my-4 space-x-4">
                <div>
                  <div className="flex px-3 py-2 bg-gray-100 rounded-lg">
                    <span className="mt-1 mr-1 text-gray-900">৳</span>
                    <span className="text-3xl font-bold text-gray-900">
                      {product?.addons[addonType === "half" ? 0 : 1].price}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500">40/50 Min</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="absolute left-0 right-0 block pt-2 text-xs font-semibold tracking-wide text-center text-gray-400 uppercase">
                    Qty
                  </div>
                  <select
                    name="quantity"
                    className="flex items-end pb-1 pl-4 pr-8 border border-gray-200 appearance-none cursor-pointer rounded-xl h-14"
                    value={inputs.quantity}
                    onChange={handleChange}
                  >
                    {/* @ts-ignore */}
                    {[...Array(product?.quantity_available).keys()].map((x) => (
                      <option value={x + 1} key={x + 1}>
                        {" "}
                        {x + 1}{" "}
                      </option>
                    ))}
                  </select>

                  <svg
                    className="absolute bottom-0 right-0 w-5 h-5 mb-2 mr-2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="px-6 py-2 font-semibold text-white bg-[#F3BA00] h-14 rounded-xl hover:bg-opacity-50"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;

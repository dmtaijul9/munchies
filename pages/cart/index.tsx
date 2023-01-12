import React from "react";
import Layout from "../../components/ui/Layout";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/cart/Card";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { setTotal } from "../../redux/services/cartSlice";
import { getSubTotal, getVat } from "../../utils/getData";
import { objAddonItems, state } from "../../lib/type";

const CartPage = () => {
  const { items, cartTotalQuantity } = useSelector((state: state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  const router = useRouter();

  const subTotal = getSubTotal(items);

  const vat = getVat(items);

  return (
    <Layout>
      <section className="h-screen py-12 bg-gray-100 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="max-w-2xl mx-auto mt-8 md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {items?.map((item) => {
                      return <Card key={item.id} item={item} />;
                    })}
                  </ul>
                </div>

                <div className="py-2 mt-6 border-t border-b">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ৳ {subTotal}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Vat</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {" "}
                      ৳ {vat}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">
                      BDT
                    </span>{" "}
                    {subTotal + vat}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out bg-gray-900 rounded-md group focus:shadow hover:bg-gray-800"
                    onClick={() => {
                      dispatch(setTotal(subTotal + vat));
                      router.push("/checkout");
                    }}
                    disabled={cartTotalQuantity <= 0}
                  >
                    Checkout <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;

import { useEffect, useState, useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
/* This example requires Tailwind CSS v2.0+ */
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$36.00",
    color: "Charcoal",
    size: "L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg",
    imageAlt: "Model wearing men's charcoal basic tee in large.",
  },
  // More products...
];

export default function Summary({ setStep }) {
  const [orderDatas, updateItemCount] = useContext(OrderContext);
  const [checkOrder, setCheckOrder] = useState(false);
  const productArray = Array.from(orderDatas.products);
  const optionArray = Array.from(orderDatas.options);

  useEffect(() => {
    console.log(orderDatas);
  }, []);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <main className="relative lg:min-h-full">
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
            <div className="lg:col-start-2">
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                주문서 확인
              </h1>

              <dl className="mt-16 text-sm font-medium">
                <dt className="text-gray-900">Tracking number</dt>
                <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
              </dl>

              <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                {productArray.map((product, i) => (
                  <li key={i} className="flex py-6 space-x-6">
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">{product[0]}</h3>
                    </div>
                    <p className="flex-none font-medium text-gray-900">
                      {product[1]}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                {optionArray.map((item, i) => (
                  <div className="flex justify-between" key={i}>
                    <dt>{item[0]}</dt>
                    <dd className="text-gray-900">{item[1]}</dd>
                  </div>
                ))}

                <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">{orderDatas.totals.total}</dd>
                </div>
              </dl>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <div>
                  <input
                    type="checkbox"
                    id="order"
                    checked={checkOrder}
                    onChange={(e) => {
                      setCheckOrder(e.target.checked);
                    }}
                  />
                  <label htmlFor="order">주문하시겠습니까?</label>
                </div>
              </div>
              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <div>
                  <button
                    type="submit"
                    onClick={() => setStep(2)}
                    disabled={!checkOrder}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

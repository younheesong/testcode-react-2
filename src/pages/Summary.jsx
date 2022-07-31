import { useState } from "react";

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

export default function Summary() {
  const [checkOrder, setCheckOrder] = useState(false);
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
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                주문서 확인
              </p>

              <dl className="mt-16 text-sm font-medium">
                <dt className="text-gray-900">Tracking number</dt>
                <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
              </dl>

              <ul
                role="list"
                className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex py-6 space-x-6">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p>{product.color}</p>
                      <p>{product.size}</p>
                    </div>
                    <p className="flex-none font-medium text-gray-900">
                      {product.price}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">$72.00</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-gray-900">$8.00</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Taxes</dt>
                  <dd className="text-gray-900">$6.40</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">$86.40</dd>
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
                  <button type="submit" disabled={!checkOrder}>
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

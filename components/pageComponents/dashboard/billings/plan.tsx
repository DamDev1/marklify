import React, { Fragment } from "react";
import plansData from "@/lib/pricingData.json";

export default function Plan() {
  return (
    <Fragment>
      {plansData.map((data, index) => (
        <div
          key={index}
          className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs"
        >
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              {data.Plan}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">{data.Description}</p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                {data.Price.toLocaleString()}₦{" "}
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>

            <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What's included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              {data.Features.map((feature, index) => (
                <li key={index} className="flex items-center gap-1">
                  {feature.value === true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700 shadow-sm"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700 shadow-sm"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}

                  <span className="text-gray-700">{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

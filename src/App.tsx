import "./App.css";
import clsx from "clsx";
import { Product } from "./data/product";


export const App = () => {

  return (
    <>
      <div className="flex flex-col gap-12">
        {/* WELCOME */}
        <div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            {`Welcome, Tom!`}
          </h2>
          <p>tom@user.com</p>
        </div>

        {/* LOGIN */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white text-start"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="px-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="text-start">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="px-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>  <div className="flex flex-col gap-3 items-center overflow-auto h-vh">
          {/* Product */}
          <div className="flex w-[32rem] border border-neutral-700/20 rounded-xl divide-x divide-neutral-700 overflow-hidden group">
            <div className="p-2 bg-gradient-to-b from-neutral-700/80  shrink-0 flex items-center justify-center relative overflow-hidden">
              <img
                className="object-cover w-24 h-24 scale-125  rounded-full z-10"
                src={Product.images[0] || ""}
                alt=""
              />
              <img
                className="object-cover w-80 h-80  rounded-full absolute translate-x-[2px] translate-y-[2px] blur-lg contrast-200 grayscale-[30%] opacity-20 "
                src={Product.images[0] || ""}
                alt=""
              />
            </div>
            <div className="p-2 grow flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-neutral-200 text-xl font-bold">
                  {Product.title}
                </h3>
                <div className="flex gap-1 flex-wrap justify-center">
                  <span
                    className={clsx(
                      "text-xs rounded-lg text-white px-2 py-1 font-medium  ring-inset grow-0 inline-flex items-center leading-none ring-1",
                      "ring-emerald-400"
                    )}
                  >
                    {Product.category}
                  </span>
                </div>
              </div>
              <div className="min-h-12 rounded-md border border-neutral-700/20 flex divide-x divide-neutral-700/20 py-1">
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Discount Percentage
                  </span>
                  <p className="">{Product.discountPercentage}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Price
                  </span>
                  <p className="">{Product.price}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    ID
                  </span>
                  <p className="">{Product.id}</p>
                </div>
              </div>
              <p className="text-left text-neutral-400 text-sm italic">
                {Product.description}
              </p>
            </div>
          </div>
          <div className="flex w-[32rem] border border-neutral-700/20 rounded-xl divide-x divide-neutral-700 overflow-hidden group">
            <div className="p-2 bg-gradient-to-b from-neutral-700/80  shrink-0 flex items-center justify-center relative overflow-hidden">
              <img
                className="object-cover w-24 h-24 scale-125  rounded-full z-10"
                src={Product.images[0] || ""}
                alt=""
              />
              <img
                className="object-cover w-80 h-80  rounded-full absolute translate-x-[2px] translate-y-[2px] blur-lg contrast-200 grayscale-[30%] opacity-20 "
                src={Product.images[0] || ""}
                alt=""
              />
            </div>
            <div className="p-2 grow flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-neutral-200 text-xl font-bold">
                  {Product.title}
                </h3>
                <div className="flex gap-1 flex-wrap justify-center">
                  <span
                    className={clsx(
                      "text-xs rounded-lg text-white px-2 py-1 font-medium  ring-inset grow-0 inline-flex items-center leading-none ring-1",
                      "ring-emerald-400"
                    )}
                  >
                    {Product.category}
                  </span>
                </div>
              </div>
              <div className="min-h-12 rounded-md border border-neutral-700/20 flex divide-x divide-neutral-700/20 py-1">
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Discount Percentage
                  </span>
                  <p className="">{Product.discountPercentage}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Price
                  </span>
                  <p className="">{Product.price}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    ID
                  </span>
                  <p className="">{Product.id}</p>
                </div>
              </div>
              <p className="text-left text-neutral-400 text-sm italic">
                {Product.description}
              </p>
            </div>
          </div>
          <div className="flex w-[32rem] border border-neutral-700/20 rounded-xl divide-x divide-neutral-700 overflow-hidden group">
            <div className="p-2 bg-gradient-to-b from-neutral-700/80  shrink-0 flex items-center justify-center relative overflow-hidden">
              <img
                className="object-cover w-24 h-24 scale-125  rounded-full z-10"
                src={Product.images[0] || ""}
                alt=""
              />
              <img
                className="object-cover w-80 h-80  rounded-full absolute translate-x-[2px] translate-y-[2px] blur-lg contrast-200 grayscale-[30%] opacity-20 "
                src={Product.images[0] || ""}
                alt=""
              />
            </div>
            <div className="p-2 grow flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-neutral-200 text-xl font-bold">
                  {Product.title}
                </h3>
                <div className="flex gap-1 flex-wrap justify-center">
                  <span
                    className={clsx(
                      "text-xs rounded-lg text-white px-2 py-1 font-medium  ring-inset grow-0 inline-flex items-center leading-none ring-1",
                      "ring-emerald-400"
                    )}
                  >
                    {Product.category}
                  </span>
                </div>
              </div>
              <div className="min-h-12 rounded-md border border-neutral-700/20 flex divide-x divide-neutral-700/20 py-1">
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Discount Percentage
                  </span>
                  <p className="">{Product.discountPercentage}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    Price
                  </span>
                  <p className="">{Product.price}</p>
                </div>
                <div className="grow flex flex-col justify-between">
                  <span className="uppercase text-neutral-500 font-semibold text-xs">
                    ID
                  </span>
                  <p className="">{Product.id}</p>
                </div>
              </div>
              <p className="text-left text-neutral-400 text-sm italic">
                {Product.description}
              </p>
            </div>
          </div>


          {/* PAGINATION */}
          <div className="flex gap-4">
            <button
              type="button"
              className={clsx(
                "bg-gradient-to-b from-neutral-700 to-neutral-800 ring-1 ring-neutral-700/60 ring-inset text-neutral-300",
                "p-2  flex items-center justify-center font-semibold text-sm w-20 h-8 leading-none ",
                "rounded-md",
                " disabled:text-neutral-400 disabled:from-neutral-800 disabled:to-neutral-800"
              )}
            >
              Previous
            </button>
            <span> Page 1 of 2 </span>
            <button
              type="button"
              className={clsx(
                "bg-gradient-to-b from-neutral-700 to-neutral-800 ring-1 ring-neutral-700/60 ring-inset text-neutral-300",
                "p-2  flex items-center justify-center font-semibold text-sm w-20 h-8 leading-none ",
                "rounded-md",
                " disabled:text-neutral-400 disabled:from-neutral-800 disabled:to-neutral-800"
              )}
            >
              Next
            </button>

          </div>
        </div>






        <button
          type="button"
          className="absolute top-1 right-1 font-sm text-neutral-500 hover:underline"

        >
          Logout
        </button>
      </div>
    </>

  );
};

/* eslint-disable @next/next/no-img-element */
import Weather from "@/components/weather";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const router = useRouter();
  const { data } = useSession();
  const [state, setState] = useState<string>();

  const styles: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    background: "#ffffff", // Replace with your color variable
    padding: "0.75rem",
    textAlign: "center",
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            {data?.user?.image && (
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={data?.user?.image}
                alt={data?.user?.image}
              />
            )}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {data?.user?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {data?.user?.email}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                onClick={() => signOut()}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Out
              </button>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Index;
Index.auth = true;

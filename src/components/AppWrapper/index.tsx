"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import Navbar from "@components/navbar/Navbar";

type IWrapper = {
  children: React.ReactNode;
};

function AppWrapper({ children }: IWrapper) {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <Navbar /> */}
      <main className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-24 mb-32">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default AppWrapper;

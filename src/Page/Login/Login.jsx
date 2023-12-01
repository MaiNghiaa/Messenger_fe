import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import MainLogin from "./Sections/MainLogin";

export default function Login() {
  return (
    <div className="w-[1440px] relative ">
      <Header />
      <MainLogin />
      <Footer />
    </div>
  );
}

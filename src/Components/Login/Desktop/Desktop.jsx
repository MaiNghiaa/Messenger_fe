import React, { Component } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import MainDesktop from "./Sections/MainDesktop";
export default class Desktop extends Component {
  render() {
    return (
      <div className="w-[1440px] relative ">
        <Header />
        <MainDesktop />
        <Footer />
      </div>
    );
  }
}

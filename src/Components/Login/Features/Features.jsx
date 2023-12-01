import React, { Component } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import MainFeatures from "./Sections/MainFeatures";
export default class Features extends Component {
  render() {
    return (
      <div className="w-[1440px] relative ">
        <Header />
        <MainFeatures />
        <Footer />
      </div>
    );
  }
}

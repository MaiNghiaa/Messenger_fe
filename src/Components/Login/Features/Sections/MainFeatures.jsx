import React, { Component } from "react";
import Content from "./Content";
import Communication from "./Communication";
import Together from "./Together";
import CustomReaction from "./CustomReaction";
import AnimateEffect from "./AnimateEffect";
import ReplyForwarding from "./ReplyForwarding";
import Applock from "./Applock";
import Payment from "./Payment";
import Business from "./Business";

export default class MainFeatures extends Component {
  render() {
    return (
      <main className=" mt-[112px]">
        <div>
          <Content />
          <Communication />
          <Together />
          <CustomReaction />
          <AnimateEffect />
          <ReplyForwarding />
          <Applock />
          <Payment />
          <Business />
        </div>
      </main>
    );
  }
}

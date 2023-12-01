import React, { Component } from "react";

export default class MainDesktop extends Component {
  render() {
    const gradientStyle = {
      backgroundImage:
        "linear-gradient(83.84deg, rgb(0, 136, 255) -6.87%, rgb(160, 51, 255) 26.54%, rgb(255, 92, 135) 58.58%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      letterSpacing: "0em",
      lineHeight: "80px",
      marginTop: "50px",
    };
    return (
      <div className="flex justify-between items-center mt-[112px] mx-[70px] ">
        <div className="text-content w-[40%]">
          <h2
            className="title text-[75px] font-[600] mb-5"
            style={gradientStyle}
          >
            Go big with Messenger
          </h2>
          <p className="desc mb-5">
            A simple app that lets you text, video call and stay close to people
            you care about. For Mac and PC.
          </p>
          <button
            type="button"
            className="flex items-center gap-1.5 mr-5 text-white bg-blue-700 hover:bg-purple-900  focus:outline-none focus:ring-blue-300 font-medium rounded-[999px] text-sm w-full sm:w-auto px-7 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/lzu33AK7CZf.png"
              alt=""
              height="16"
              width="16"
            />
            Download for macOS
          </button>
        </div>
        <img
          className="w-[60%]"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/x8C15_rP0Ey.png"
          alt=""
        />
      </div>
    );
  }
}

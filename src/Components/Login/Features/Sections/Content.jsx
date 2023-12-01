import React, { Component } from "react";

export default class Content extends Component {
  render() {
    const gradientStyle = {
      backgroundImage:
        "linear-gradient(81.84deg, #0099ff -9.4%, #a033ff 51.57%, #ff5280 84.07%, #ff7061 90.59%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textAlign: "left",
      letterSpacing: "0em",
      lineHeight: "80px",
      marginTop: "50px",
    };
    return (
      <div className="flex items-center justify-between ml-[100px] mb-[75px]">
        <div className="text_content w-[50%]">
          <p
            className="mb-7 text-title_content text-[75px] font-[600] w-[400px]"
            style={gradientStyle}
          >
            More ways to stay connected
          </p>
          <p className="text-desc_content w-[320px] mb-8">
            Messenger has everything you need to feel closer to your favourite
            people.
          </p>
        </div>
        <img
          className="w-[50%]"
          src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.8562-6/122232591_380123473031320_5356914086841513506_n.png?_nc_cat=104&ccb=1-7&_nc_sid=f537c7&_nc_ohc=grA9lgMA4c8AX9sWDKA&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDLI4kIMD0SbKtQS07Py3weq7bUQwG-Z2fyMaDcFL969g&oe=656E15ED
"
          alt=""
        />
      </div>
    );
  }
}

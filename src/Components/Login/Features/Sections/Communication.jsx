import React, { Component } from "react";

export default class Communication extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center pb-[112px]">
        <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] text-center mb-7">
          CROSS-APP COMMUNICATION
        </p>
        <h2 className="title text-[60px] leading-[65px] w-[750px] font-[500]">
          <p className="text-center">Hang with your</p>

          <p className="text-center">favourite people on your</p>
          <p className="text-center">favourite apps and</p>
          <p className="text-center">devices</p>
        </h2>
        <p className="desc w-[450px] text-center my-9">
          Messenger powers conversations within Facebook, Instagram, Portal and
          Oculus (coming soon).
        </p>
        <img
          className="w-[40%]"
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.8562-6/122327939_2741885309464391_8207873556820675575_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=yc3kz2zM9DcAX9wWLi5&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBIFrfdb-SOrbz8J8n9YLl_Ds5av_uODaPxOMvmRbLa0w&oe=656EC319"
          alt=""
        />
      </div>
    );
  }
}

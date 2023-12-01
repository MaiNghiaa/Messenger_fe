import React, { Component } from "react";

export default class AnimateEffect extends Component {
  render() {
    return (
      <div className=" pb-[70px] bg-[#FBFBFF]">
        <div className="flex flex-row justify-between items-center mx-[112px] pt-[70px]">
          <div className="text-content">
            <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] mb-4">
              ANIMATED EFFECTS
            </p>
            <h2 className="text-[60px] leading-[65px] font-[600] w-[400px] mb-5">
              Express yourself
            </h2>
            <p className="desc w-[350px]">
              Bring your conversations to life with fun AR effects, message
              effects* and selfie stickers*.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/401777820_860699232446796_4953575057466812831_n.png?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=pJHOW9tSupMAX-Z69Ee&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBy4Ptqk9l6F995BxYH-3lwlmXPIxdSHMD8VN9TMUgA6A&oe=656E96C1"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

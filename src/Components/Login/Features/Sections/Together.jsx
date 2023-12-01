import React, { Component } from "react";

export default class Together extends Component {
  render() {
    return (
      <div className="bg-[#FBFBFF]">
        <div className="flex flex-row justify-between items-center mx-[112px] pt-[70px]">
          <div className="text-content">
            <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] mb-7">
              WATCH TOGETHER
            </p>
            <h2 className="text-[60px] leading-[65px] font-[600] w-[400px] mb-5">
              Enjoy videos with your friends
            </h2>
            <p className="desc w-[350px]">
              Watch films, music videos, TV shows and more with your friends
              over video chat.
            </p>
          </div>
          <div className="Video">
            <video
              poster="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.8562-6/121808770_343448660263296_2349379849209219156_n.png?_nc_cat=111&ccb=1-7&_nc_sid=f537c7&_nc_ohc=kAN9pncpb1QAX8w7n9C&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAmFMYMB4AR-K_Rcxg-1ijL62TWyA0_Gg6YtyJo2HvQCw&oe=656F31F6"
              autoPlay={1}
              muted={1}
              loop={1}
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.2365-6/121102663_1399766040228533_8301866763324278610_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Z1n1wC8md0AX9Lj9Az&_nc_ht=scontent.fhan14-1.fna&oh=00_AfByq5mB6Jcd5fTviRWjB4aAbPcrrfTuvgeU5ZKYihuXGw&oe=65844D6B"
              playsInline={1}
              data-preload="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.2365-6/121102663_1399766040228533_8301866763324278610_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Z1n1wC8md0AX9Lj9Az&_nc_ht=scontent.fhan14-1.fna&oh=00_AfByq5mB6Jcd5fTviRWjB4aAbPcrrfTuvgeU5ZKYihuXGw&oe=65844D6B"
              data-preload-type="video"
            />
          </div>
        </div>
      </div>
    );
  }
}

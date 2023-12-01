import React, { Component } from "react";

export default class Applock extends Component {
  render() {
    return (
      <div className="flex items-center justify-around px-[150px] pb-[112px]">
        <div className="Video w-[35%]">
          <video
            className="_94c6"
            poster="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.8562-6/121665170_340263387076490_5560809650091276518_n.png?_nc_cat=109&ccb=1-7&_nc_sid=f537c7&_nc_ohc=cB47ywF5aEkAX9b3yfR&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAj13v6-X4LPcqoUw78eS-Supb0Dd2pduMeJjOQcM7tjw&oe=656F82AA"
            autoPlay={1}
            muted={1}
            loop={1}
            src="https://video.fhan14-3.fna.fbcdn.net/v/t42.1790-2/122231556_217159159833938_1321161281269299179_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=mZzdXA1ZDLsAX-dyGP4&rl=300&vabr=78&_nc_ht=video.fhan14-3.fna&oh=00_AfAqHBi4woCv-DcdCGyfz22LybTbcL7rQ-4W8ZgUM4FkEQ&oe=656FE3F4"
            playsInline={1}
            data-preload="https://video.fhan14-3.fna.fbcdn.net/v/t42.1790-2/122231556_217159159833938_1321161281269299179_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=mZzdXA1ZDLsAX-dyGP4&rl=300&vabr=78&_nc_ht=video.fhan14-3.fna&oh=00_AfAqHBi4woCv-DcdCGyfz22LybTbcL7rQ-4W8ZgUM4FkEQ&oe=656FE3F4"
            data-preload-type="video"
          />
        </div>
        <div className="Text-content w-[50%] pl-[120px] flex justify-start flex-col items-start">
          <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] text-center mb-7">
            APP LOCK
          </p>
          <h2 className="text-[60px] leading-[65px] font-[600] w-[310px] mb-7">
            Keep your chats extra secure
          </h2>
          <p className="desc w-[450px] color-[#595959] font-[20px] font-[400] leading-[30px]">
            Opt in to use your devices face or fingerprint ID to unlock
            Messenger, so only you have access to your chats.
          </p>
        </div>
      </div>
    );
  }
}

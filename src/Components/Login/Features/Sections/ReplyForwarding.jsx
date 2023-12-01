import React, { Component } from "react";

export default class ReplyForwarding extends Component {
  render() {
    return (
      <div className="mx-[112px] pb-[70px]">
        <div className="flex flex-row justify-between items-center ">
          <div className="text-content">
            <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] mb-4">
              REPLIES & FORWARDING
            </p>
            <h2 className="text-[60px] leading-[65px] font-[600] w-[400px] mb-5">
              Let the conversation flow
            </h2>
            <p className="desc w-[350px]">
              Choose the exact message that you want to reply to or forward,
              directly in your chat
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.2365-6/121276964_694622284798211_2327909589864702037_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RnMaGI6LkwgAX_fBINE&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD-90LgNL9Kvma5OjdqSQ_QkBxYuCTkYu4c_r5niVj3Eg&oe=65846F5D"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

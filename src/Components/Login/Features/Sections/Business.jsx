import React, { Component } from "react";

export default class Business extends Component {
  render() {
    return (
      <div className="flex items-center justify-around px-[150px] pb-[112px]">
        <div className="img w-[35%]">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.8562-6/120894751_1549467898574430_9196133852584655168_n.png?_nc_cat=103&ccb=1-7&_nc_sid=f537c7&_nc_ohc=mD_Y61zF0CsAX-z4Dp4&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCeptcd_yqGcpoTu54jGWObO67e2ff3hFe3YikyKLKhsQ&oe=656F21E5"
            alt=""
          />
        </div>
        <div className="Text-content w-[50%] pl-[120px] flex justify-start flex-col items-start">
          <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] text-center mb-7">
            BUSINESS
          </p>
          <h2 className="text-[60px] leading-[65px] font-[600] w-[550px] mb-7">
            Connect with businesses
          </h2>
          <p className="desc w-[375px] color-[#595959] font-[20px] font-[400] leading-[30px]">
            Find deals, make reservations and get customer support by chatting
            with your favourite businesses straight from Messenger.
          </p>
        </div>
      </div>
    );
  }
}

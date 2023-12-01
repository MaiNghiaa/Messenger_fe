import React, { Component } from "react";

export default class CustomReaction extends Component {
  render() {
    return (
      <div className="flex items-center justify-around px-[112px] pt-[70px]">
        <div className="Video w-[35%]">
          <video
            className="w-[100%] "
            poster="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.8562-6/121669657_272362913953120_8810070943494933498_n.png?_nc_cat=100&ccb=1-7&_nc_sid=f537c7&_nc_ohc=cEJvq8e3C78AX-tjLMz&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBrJn6s5CM6QW-lp8YQRGfkLBfdCgc7TzX_lCcIaWiXyA&oe=656E22A5"
            autoPlay={1}
            muted={1}
            loop={1}
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.2365-6/121110808_1077808685970018_7380496783956148347_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=9cqW9-2Cul8AX849a3X&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDBwW8tULk8Pj4UyJN23y7_WO3lUf6f_AA7_HmmnGXdbQ&oe=65844660"
            playsInline={1}
            data-preload="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.2365-6/121110808_1077808685970018_7380496783956148347_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=9cqW9-2Cul8AX849a3X&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDBwW8tULk8Pj4UyJN23y7_WO3lUf6f_AA7_HmmnGXdbQ&oe=65844660"
            data-preload-type="video"
          />
        </div>
        <div className="Text-content w-[50%] pl-[120px] flex justify-start flex-col items-start">
          <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] text-center mb-7">
            CUSTOM REACTIONS
          </p>
          <h2 className="text-[60px] leading-[65px] font-[600] w-[310px] mb-7">
            Say it with any emoji
          </h2>
          <p className="desc w-[450px] color-[#595959] font-[20px] font-[400] leading-[30px]">
            Lost for words? Now you can customise your reactions with way more
            emojis to choose from, including 🎉 and 🔥.
          </p>
        </div>
      </div>
    );
  }
}

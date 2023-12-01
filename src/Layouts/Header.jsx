import React, { Component } from "react";
// import Features from "../Page/Features/Features";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header className="bg-white fixed top-[0] left-0 right-0 h-[112px]">
        <div className="py-9 px-32 flex justify-between items-center">
          <div className="Logo">
            <img
              className="w-[40px] h-[40px]"
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=3baMYHh2xyIAX8T9JNh&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAnxEf1WhqOEQ-ZFjfY4woRELmsVOPxaV6ucVOrT3IxxA&oe=656EF6FD"
              alt="Logo"
            />
          </div>
          <div className="Navigation pr-4">
            <ul className="nav-list flex gap-9">
              <li className="nav-item">
                <Link
                  to="/features"
                  className="nav-item_link text-[14px] font-[500]"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Desktop"
                  className="nav-item_link text-[14px] font-[500]"
                >
                  Desktop app
                </Link>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-item_link text-[14px] font-[500]">
                  {" "}
                  Privacy and safety
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://developers.facebook.com/products/messenger/"
                  className="nav-item_link text-[14px] font-[500]"
                >
                  For developers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

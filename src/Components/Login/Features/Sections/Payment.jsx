import React, { Component } from "react";

export default class Payment extends Component {
  render() {
    return (
      <div className="flex flex-row justify-between items-center mx-[112px]">
        <div className="text-content">
          <p className="sub-title text-[#595959] text-[15px] font-[400] tracking-[1px] leading-[20px] mb-7">
            PAYMENTS
          </p>
          <h2 className="text-[60px] leading-[65px] font-[600] w-[420px] mb-7">
            Send money to friends & family
          </h2>
          <p className="desc w-[450px]">
            Send and receive money securely and easily by adding your debit
            card, PayPal account or reloadable prepaid card.*
          </p>
        </div>
        <div className="Video w-[50%]">
          <img
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/121281902_2755674331388383_8406463564000211762_n.png?_nc_cat=101&ccb=1-7&_nc_sid=f537c7&_nc_ohc=TFUCqC89AcIAX-D7Jnf&_nc_ht=scontent.fhan14-1.fna&oh=00_AfADqn0a0i0l5fCumvPV23gB3Ixoaj0AXNmKq_6BO3O2dQ&oe=656E85B4"
            alt=""
          />
        </div>
      </div>
    );
  }
}

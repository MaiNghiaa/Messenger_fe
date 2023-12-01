import React from "react";

export default function Footer() {
  return (
    <footer className=" h-[112px]">
      <div className="py-9 px-36 flex items-center gap-[65px] justify-start">
        <div className="title text-[12.2px] whitespace-nowrap">
          <span className="font-[800]">© Meta 2023.</span>{" "}
          <span className="font-[400] whitespace-nowrap">
            The Apple and Google Play logos are trademarks of their respective
            owners.
          </span>
        </div>
        <div className="nav-footer">
          <ul className="nav-footer__list flex justify-start items-center gap-[55px] font-[400] ">
            <li className="nav-footer-item">
              <a
                className="text-[13px] tracking-tighter whitespace-nowrap"
                href="https://www.facebook.com/privacy/policy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="nav-footer-item">
              <a
                className="text-[13px] tracking-tighter whitespace-nowrap"
                href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
              >
                Cookie Policy
              </a>
            </li>
            <li className="nav-footer-item">
              <a
                className="text-[13px] tracking-tighter whitespace-nowrap"
                href="https://www.facebook.com/policies_center/"
              >
                Terms
              </a>
            </li>
            <li className="nav-footer-item">
              <a
                className="text-[13px] tracking-tighter whitespace-nowrap hover:underline pb-[2px] opacity-50 hover:opacity-100"
                href="https://www.facebook.com/policies_center/"
              >
                English(US)
              </a>
            </li>
            <li className="nav-footer-item">
              <img
                className=" object-cover"
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/401750647_1601653570640810_4087456680134260053_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=kkYVXVf15sMAX_vF5iU&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDfVRv5EZjwKuqyYU29LMTm_EgJ_B8BfjeLqHhKXtzETw&oe=656E96C8"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

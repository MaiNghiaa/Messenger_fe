import React, { useState } from "react";

export default function MainLogin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(81.84deg, #0099ff -9.4%, #a033ff 51.57%, #ff5280 84.07%, #ff7061 90.59%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "left",
    letterSpacing: "0em",
    lineHeight: "80px",
    marginTop: "50px",
  };
  const gradientStyleHeading = {
    backgroundImage:
      "linear-gradient(81.84deg, #0099ff -9.4%, #a033ff 51.57%, #ff5280 84.07%, #ff7061 90.59%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "left",
    letterSpacing: "0em",
  };

  return (
    <main className=" mt-[112px]">
      <div className="py-[112px] px-[110px]">
        <div className="flex">
          <div className="w-[50%] flex flex-col justify-start items-start">
            <div className="content">
              <p
                className="mb-7 title text-[75px] font-[600] w-[400px]"
                style={gradientStyle}
              >
                Hang out anytime, anywhere
              </p>
              <p className="sub_title w-[400px] mb-8">
                Messenger makes it easy and fun to stay close to your favourite
                people.
              </p>
            </div>

            <div className="">
              <form className="max-w-sm mx-auto">
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="bg-[#fefefe] border-[0.2px] text-sm rounded-lg  block w-[350px] p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    id="password"
                    className="bg-[#fefefe] border-[0.2px]   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="mb-10 flex items-center ">
                  <button
                    type="submit"
                    className=" mr-5 text-white bg-blue-700 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[999px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Log In
                  </button>
                  <a className="text-blue-700 underline text-[12px]">
                    <div>
                      <button
                        onClick={openModal}
                        className="underline transition"
                      >
                        Dont have Account Click Here?
                      </button>

                      {isModalOpen && (
                        <div
                          id="authentication-modal"
                          tabIndex={-1}
                          aria-hidden="true"
                          className="transition overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        >
                          <div className="fixed top-[25%] left-[35%] p-4 w-full max-w-md max-h-full ">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-[#FBFBFF]">
                              {/* Modal header */}
                              <div className="flex items-center justify-between border-b rounded-t dark:border-gray-600">
                                <h3
                                  style={gradientStyleHeading}
                                  className="text-[16px] leading-4 font-semibold text-gray-900 p-4 md:p-5"
                                >
                                  Resigter
                                </h3>
                                <span
                                  className="close p-6 cursor-pointer"
                                  onClick={closeModal}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                  </svg>
                                </span>
                              </div>
                              {/* Modal body */}
                              <div className="p-4 md:p-5">
                                <form className="max-w-sm mx-auto">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="tenhienthi"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#595959]"
                                    >
                                      Name
                                    </label>

                                    <input
                                      type="text"
                                      id="tenhienthi"
                                      className="bg-[#fefefe] border-[0.2px] text-sm rounded-lg  block w-[350px] p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder=""
                                      required
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="email"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#595959]"
                                    >
                                      Email
                                    </label>

                                    <input
                                      type="email"
                                      id="email"
                                      className="bg-[#fefefe] border-[0.2px] text-sm rounded-lg  block w-[350px] p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Email Address"
                                      required
                                    />
                                  </div>
                                  <div className="mb-10">
                                    <label
                                      htmlFor="password"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#595959]"
                                    >
                                      Password
                                    </label>
                                    <input
                                      type="password"
                                      id="password"
                                      className="bg-[#fefefe] border-[0.2px]   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      required
                                      placeholder="Password"
                                    />
                                  </div>
                                  <div className="w-100% bg-sky-100 text-center rounded-full	">
                                    <button
                                      type="submit"
                                      style={gradientStyleHeading}
                                      className=" mr-5 text-white  hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[999px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                      Register
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </a>
                </div>

                {/* Box model */}

                {/* End box model */}
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 rounded outline-none border-[#3b3b3b] border-solid border-2"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-[12px] text-[#3b3b3b] "
                  >
                    keep me signed in
                  </label>
                </div>
              </form>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a href="https://apps.apple.com/us/app/messenger/id1480068668?mt=12">
                      <img
                        className="h-[44px]"
                        src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/119597221_2801552506611915_4465041091818364564_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=SY3JWozL_hQAX9blnZ5&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC1FKz3ym2puxBtbj_2GzqGskyWYLBYC48PNxQdxkAUpg&oe=656F6D75"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://apps.microsoft.com/detail/9WZDNCRF0083?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US">
                      <img
                        className="h-[44px] "
                        src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/119623783_679418069326044_1960140840932205061_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=dqL2-6HEdu8AX-WJtmi&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDb5ebnUgkrd5RfMcJsTgZRQQD_sFFCmguT-MizSJ-Aog&oe=656FDA9D"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=HGInTEkDHEYAX83LUhG&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDbGJ3qVCsdHMoKWLRTOMavGKj0HLN-AvjjZW1dF8df7A&oe=656EB027"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

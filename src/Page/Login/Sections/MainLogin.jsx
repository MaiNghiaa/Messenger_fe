import React from "react";

export default function MainLogin() {
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
                    placeholder="Email address or phone number"
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
                <div className="mb-10">
                  <button
                    type="submit"
                    className="mr-5 text-white bg-blue-700 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[999px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Log In
                  </button>
                  <a className="text-blue-700 underline text-[12px]">
                    Fogotten your password?
                  </a>
                </div>

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

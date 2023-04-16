import React from "react";
// 'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }

export default function Login() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="bg-[#b0d8da] relative w-full h-full">
          <div className="p-[50px]">
            <div>
              <img
                src="./logo.png"
                alt="index"
                className="w-[60px] h-[60px] object-cover"
              />
            </div>
            <div className="mt-5 text-white text-lg xl:text-2xl max-w-[420px] leading-[1.5] font-medium">
              Find 3D object, mockup and illutrasions here...
            </div>
          </div>
          <div className="lg:rounded-l-[50px] p-[50px] bg-[#fff] lg:absolute right-0 bottom-0 top-0 w-[100%] lg:w-[60%]">
            <div className="text-lg text-[#a49f9f] text-right">English </div>

            <div className="max-w-[500px] mx-auto">
              <h1 className="text-lg xl:text-2xl text-black font-bold mt-[51px]">
                Create Account
              </h1>
              <div className="flex gap-[30px] mt-5 flex-wrap justify-between">
                <div className="flex items-center text-sm text-gray-500 border rounded-lg px-3 py-3 cursor-pointer min-w-[230px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google"
                    className="w-[20px] h-[20px] object-cover mr-2"
                  />{" "}
                  Sign up with google
                </div>
                <div className="flex items-center text-sm text-gray-500 border rounded-lg px-3 py-3 cursor-pointer ">
                  <img
                    src="https://www.facebook.com/images/fb_icon_325x325.png"
                    alt="facebook"
                    className="w-[20px] h-[20px] object-cover mr-2"
                  />{" "}
                  Sign up with facebook
                </div>
              </div>
              <div className="text-center py-8 text-gray-400">- OR -</div>
              <form>
                <div className="mb-[50px]">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-[100%] outline-none border-0 mb-[4px]"
                  />
                  <div className="w-[100%] h-[1px] bg-gray-200"></div>
                </div>
                <div className="mb-[50px]">
                  <input
                    type="text"
                    placeholder="Email Adress"
                    className="w-[100%] outline-none border-0 mb-[4px]"
                  />
                  <div className="w-[100%] h-[1px] bg-gray-200"></div>
                </div>
                <div className="mb-[50px]">
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-[100%] outline-none border-0 mb-[4px]"
                  />
                  <div className="w-[100%] h-[1px] bg-gray-200"></div>
                </div>
                <button className="w-[100%] bg-[#5abbc2] p-3 text-white font-semibold rounded-lg">
                  Create Account
                </button>
                <div className="text-gray-400 mt-6">
                  Already have an account?{" "}
                  <a href="#" className="text-[#89ced2]">
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

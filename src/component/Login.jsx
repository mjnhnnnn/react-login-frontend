import React, { useState } from "react";
//       'sm': '640px',
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
  const [form, setForm] = useState({});
  const handleForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#b0d8da] to-[#fff] from-50% to-40%">
        <div className="bg-[#b0d8da] flex flex-wrap min-h-[100vh] max-w-[1280px] mx-auto">
          <div className="p-[50px] lg:w-[40%]">
            <div>
              <img
                src="./logo.png"
                alt="index"
                className="w-[60px] h-[60px] object-cover"
              />
            </div>
            <div className="mt-5 text-white text-lg xl:text-2xl  leading-[1.5] font-medium">
              Find 3D object, mockup and illutrasions here...
            </div>
            <div>
              <img
                className="object-cover mt-8"
                src="./Daco_4235668.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:rounded-l-[50px] p-[50px] bg-white dark:bg-slate-800 w-[100%] lg:w-[60%]">
            <div className="text-lg text-[#a49f9f] text-right max-w-[500px] mx-auto">
              English{" "}
            </div>

            <div className="max-w-[500px] mx-auto">
              <h1 className="text-lg xl:text-2xl text-black dark:text-white font-bold mt-[51px]">
                Create Account
              </h1>
              <div className="flex gap-[30px] mt-5 flex-wrap justify-between">
                <div className="flex items-center text-sm text-gray-500 border rounded-lg px-3 py-3 cursor-pointer w-[100%] max-w-[230px] hover:bg-sky-50 ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google"
                    className="w-[20px] h-[20px] object-cover mr-2"
                  />{" "}
                  Sign up with google
                </div>
                <div className="flex items-center text-sm text-gray-500 border rounded-lg px-3 py-3 cursor-pointer w-[100%] max-w-[230px] hover:bg-sky-50">
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
                    className="w-[100%] outline-none border-0 mb-[4px] peer/name dark:bg-[transparent] dark:text-white"
                    onChange={(e) => handleForm("name", e.target.value)}
                  />
                  <div className="w-[100%] h-[1.2px] bg-gray-200 peer-focus/name:bg-[#5abbc2]"></div>
                </div>
                <div className="mb-[50px]">
                  <input
                    type="text"
                    placeholder="Email Adress"
                    className="w-[100%] outline-none border-0 mb-[4px] peer/mail dark:bg-[transparent] dark:text-white"
                    onChange={(e) => handleForm("mail", e.target.value)}
                  />
                  <div className="w-[100%] h-[1.2px] bg-gray-200 peer-focus/mail:bg-[#5abbc2]"></div>
                </div>
                <div className="mb-[50px]">
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-[100%] outline-none border-0 mb-[4px] peer/pass dark:bg-[transparent] dark:text-white"
                    onChange={(e) => handleForm("pass", e.target.value)}
                  />
                  <div className="w-[100%] h-[1.2px] bg-gray-200 peer-focus/pass:bg-[#5abbc2]"></div>
                </div>
                <button
                  type="button"
                  className="w-[100%] bg-[#5abbc2] p-3 text-white font-semibold rounded-lg hover:bg-[#58cad2] transition-all"
                  onClick={() => handleSubmit()}
                >
                  Create Account
                </button>
                <div className="text-gray-400 mt-6">
                  Already have an account?{" "}
                  <a href="#jkj" className="text-[#89ced2]">
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

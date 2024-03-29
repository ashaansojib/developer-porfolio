import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckDouble,
  FaEye,
  FaGear,
  FaGithub,
  FaToolbox,
} from "react-icons/fa6";
const Home = () => {
  return (
    <div className="px-4 py-2">
      <div className="grid md:grid-cols-3 grid-cols-1 justify-between gap-4">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">Ashaduzzaman Sojib</h1>
          <p className="font-semibold text-gray-600">
            Jr. MERN Stack Developer
          </p>
          <p className="text-gray-700">
            Basically, coding constantly is as enjoyable to me as playing games. From this interest i'm in the website development sector. I have been working on website development since many days. I have been working as a professional MERN Stack developer for the last 1 year. Here one of my best{" "}
            <Link className="text-green-600 hover:underline">
              online project
            </Link>{" "}
            also i have many project in that page.
          </p>
          <div className="flex gap-3 py-4">
            <Link to="https://drive.google.com/file/d/1MzvdU8CEHrbziY-s29JUOt1V3SfgplAK/view" target="_blank">
              <button className="rounded-md flex items-center gap-2 px-3 py-2 bg-green-500 text-white font-semibold uppercase">
                <FaEye className="animate-bounce" /> Get Resume
              </button>
            </Link>
            <Link to="https://github.com/ashaansojib" target="_blank">
              <button className="rounded-md flex items-center gap-2 px-3 py-2 bg-gray-500 text-white font-semibold uppercase">
                <FaGithub className="animate-bounce" /> View Github
              </button>
            </Link>
          </div>
        </div>
        <div className="avatar md:justify-end justify-center">
          <div className="rounded-md h-60">
            <img src="/bb.png" />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold flex gap-2 items-center">
        <FaCheckDouble className="text-green-500" /> What I do...
      </h2>
      <p>
        I have enough experience as a MERN stack developer. I can confidently work with ReactJS, NodeJS, ExpressJS, MongoDB. Also i can work with the most common and popular Library and FrameWork. I have digital marketing knowledge and i can use all tools that need for a professional web development. Below mentioned all the tools, library and framework. 
      </p>
      <h4 className="font-semibold py-2 flex items-center gap-2">
        <FaGear className="animate-spin" /> Experties In..
      </h4>
      <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 justify-between items-center gap-3">
        <button className="px-4 py-2 bg-slate-500 font-semibold text-white rounded-md">
          Vanilla JS
        </button>
        <button className="px-4 py-2 bg-[#1210a0fb] font-semibold text-white rounded-md">
          JS ES6
        </button>
        <button className="px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md">
          React JS
        </button>
        <button className="px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md">
          Router
        </button>
        <button className="px-4 py-2 bg-[#1779db] font-semibold text-white rounded-md">
          TypeScript
        </button>
        <button className="px-4 py-2 bg-[#1d456d] font-semibold text-white rounded-md">
          Node JS
        </button>
        <button className="px-4 py-2 bg-[#217ad3] font-semibold text-white rounded-md">
          Express JS
        </button>
        <button className="px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md">
          MongoDB
        </button>
        <button className="px-4 py-2 bg-[#afb8c9] font-semibold text-white rounded-md">
          MySQL
        </button>
        <button className="px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md">
          TailwindCss
        </button>
        <button className="px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md">
          Bootstrap
        </button>
        <button className="px-4 py-2 bg-[#1ae094] font-semibold text-white rounded-md">
          HTML5
        </button>
        <button className="px-4 py-2 bg-[#1a80e0] font-semibold text-white rounded-md">
          CSS3
        </button>
        <button className="px-4 py-2 bg-[#1ae05c] font-semibold text-white rounded-md">
          SASS
        </button>
      </div>
      <h4 className="font-semibold pb-2 pt-4 flex items-center gap-2">
        <FaToolbox className="animate-bounce" /> Expert Tools..
      </h4>
      <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 justify-between items-center gap-3">
        <button className="px-4 py-2 bg-[#d83988] font-semibold text-white rounded-md">
          Github
        </button>
        <button className="px-4 py-2 bg-[#d839bd] font-semibold text-white rounded-md">
          Redux
        </button>
        <button className="px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md">
          JWT
        </button>
        <button className="px-4 py-2 bg-[#382535] font-semibold text-white rounded-md">
          Firebase
        </button>
        <button className="px-4 py-2 bg-[#881577] font-semibold text-white rounded-md">
          Axios
        </button>
        <button className="px-4 py-2 bg-[#1d456d] font-semibold text-white rounded-md">
          Vercel
        </button>
        <button className="px-4 py-2 bg-[#24c783] font-semibold text-white rounded-md">
          VSCode
        </button>
        <button className="px-4 py-2 bg-[#645] font-semibold text-white rounded-md">
          Canva
        </button>
        <button className="px-4 py-2 bg-[#1210a0fb] font-semibold text-white rounded-md">
          Figma
        </button>
      </div>
    </div>
  );
};

export default Home;

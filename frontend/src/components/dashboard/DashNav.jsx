import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { DiHtml5Multimedia } from "react-icons/di";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { MdAllInbox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { MdUnsubscribe } from "react-icons/md";

const DashNav = (props) => {
  const [open, setOpen] = useState(true);
  const Menu = [
    { title: "Dashboard" },
    { title: "Create Product", icon: <SiPowerpages /> },
    { title: "Product-List", icon: <DiHtml5Multimedia /> },
    { title: "User-List", icon: <PiProjectorScreenChartFill /> },
    { title: "Profile", icon: <ImProfile /> },
    { title: "Inbox", icon: <MdAllInbox /> },
    { title: "Setting", icon: <IoMdSettings /> },
    { title: "Logout", icon: <IoLogOut /> },
  ];

  return (
    <div>
      <div>hello</div>
      <div className="flex min-h-screen p-2 ">
        <div
          className={`bg-darkPurple  p-5 pt-2 transition-width duration-300 ${
            open ? "w-72" : "w-20"
          } relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-darkPurple text-3xl rounded-full absolute -right-3 top-9 border border-darkPurple cursor-pointer transition-transform duration-300 ${
              open ? "" : "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex ">
            <AiFillEnvironment
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-black origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Admin
            </h1>
          </div>
          <ul className="pt-4">
            {/* {Menu.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-1 cursor-pointer p-3 hover:bg-gray-500 rounded-md mt-3"
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <MdDashboard />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))} */}
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <MdAllInbox />
              </span>
              <a href="/dashboard">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-gray-500 rounded-md  pb-5  ${
                    !open && "hidden"
                  }`}
                >
                  Dashboard
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <MdAllInbox />
              </span>
              <a href="/">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-gray-500 rounded-md  pb-5  ${
                    !open && "hidden"
                  }`}
                >
                  Home
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <SiPowerpages />
              </span>
              <a href="/dashboard/article-add">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Add Articles
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <DiHtml5Multimedia />
              </span>
              <a href="/dashboard/all-articles">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  All Articles
                </span>
              </a>
            </li>

            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <DiHtml5Multimedia />
              </span>
              <a href="/dashboard/all-category">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  All Category
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <DiHtml5Multimedia />
              </span>
              <a href="/dashboard/add-category">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Add Category
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <DiHtml5Multimedia />
              </span>
              <a href="/dashboard/add-tag">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Add Tag
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <DiHtml5Multimedia />
              </span>
              <a href="/dashboard/all-tag">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  All Tag
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <PiProjectorScreenChartFill />
              </span>
              <a href="/userList">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  User-List
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <IoMdContacts />
              </span>
              <a href="/contactList">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Contact-List
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <MdUnsubscribe />
              </span>
              <a href="/subscribeList">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Subscribe-List
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <IoMdSettings />
              </span>
              <a href="/createProduct">
                <span
                  className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                    !open && "hidden"
                  }`}
                >
                  Setting
                </span>
              </a>
            </li>
            <li className="flex gap-1">
              <span className="text-2xl text-black pl-2 pt-1 ">
                <IoLogOut />
              </span>

              <span
                className={`text-gray-900 text-sm flex items-center gap-x-1 cursor-pointer p-2 -pt-3 hover:bg-blue-500 rounded-md  pb-2  ${
                  !open && "hidden"
                }`}
              >
                <p> Logout</p>
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="flex-1 bg-gray-100 ml-5 rounded-lg p-5">
        {props.children}
      </div> */}
      </div>
    </div>
  );
};

export default DashNav;

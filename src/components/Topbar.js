import React, { useState } from "react";
import DropDown from "./navigation/DropDown";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiAlignLeft,
  FiX,
  FiXCircle,
} from "react-icons/fi";
import { MdFormatIndentIncrease } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TopBar = (props) => {
  const [notificationOpen, setnotificationOpen] = useState(false);
  const [slideOutOpen, setslideOutOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <header className="py-3 px-6 bg-transparent ">
      <div className="flex justify-between items-center py-4 px-6 bg-white  shadow-sm rounded-md">
        <div className="flex items-center">
          <button
            onClick={() => props.toggleSidebar()}
            className="text-gray-500 focus:outline-none mr-3 lg:hidden"
          >
            <FiMenu size="20" />
          </button>

          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiSearch className="h-5 w-5 text-gray-500" />
            </span>
            <input
              className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 border-gray-300 focus:border-indigo-600"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setnotificationOpen(!notificationOpen)}
              className="flex mx-4 text-gray-500 focus:outline-none"
            >
              <FiBell className="w-6 h-6" />
              <span className="absolute block z-1 w-5 h-5 leading-5 bg-red-500  -top-3 right-1 rounded-full  text-xs text-white font-semibold align-middle">
                6
              </span>
            </button>
            {notificationOpen && (
              <div
                onClick={() => setnotificationOpen(false)}
                className="fixed inset-0 h-full w-full z-10"
              ></div>
            )}

            {notificationOpen && (
              <div
                className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-10"
                style={{ width: "20rem" }}
              >
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-sm mx-2">
                    <span className="font-bold" href="#">
                      Sara Salah
                    </span>{" "}
                    replied on the{" "}
                    <span className="font-bold text-indigo-400" href="#">
                      Upload Image
                    </span>{" "}
                    artical . 2m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="avatar"
                  />
                  <p className="text-sm mx-2">
                    <span className="font-bold" href="#">
                      Slick Net
                    </span>{" "}
                    start following you . 45m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="text-sm mx-2">
                    <span className="font-bold" href="#">
                      Jane Doe
                    </span>{" "}
                    Like Your reply on{" "}
                    <span className="font-bold text-indigo-400" href="#">
                      Test with TDD
                    </span>{" "}
                    artical . 1h
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                    alt="avatar"
                  />
                  <p className="text-sm mx-2">
                    <span className="font-bold" href="#">
                      Abigail Bennett
                    </span>{" "}
                    start following you . 3h
                  </p>
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setdropdownOpen(!dropdownOpen)}
              className="relative flex items-center focus:outline-none"
            >
              <div className="text-right mx-3">
                <h5 className="text-sm font-semibold text-gray-600">
                  John Doe
                </h5>
                <p className="text-xs font-normal text-gray-600">admin</p>
              </div>
              <div className="h-10 w-10 rounded-full shadow overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
                  alt="Your avatar"
                />
              </div>
              <span className="absolute block z-1 w-3 h-3 bg-green-500  bottom-0 -right-1 rounded-full border border-white"></span>
            </button>

            {dropdownOpen && (
              <div
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className="fixed inset-0 h-full w-full z-10"
              ></div>
            )}

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl border border-gray-100 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Products
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setslideOutOpen(!slideOutOpen)}
              className="flex ml-4 text-gray-500 focus:outline-none"
            >
              <MdFormatIndentIncrease size="25" />
            </button>
            {slideOutOpen && (
              <div
                onClick={() => setslideOutOpen(false)}
                className="fixed inset-0 h-full w-full z-10"
              ></div>
            )}
            {slideOutOpen && (
              <div className="fixed top-0 right-0 w-80 h-screen bg-white rounded-sm shadow-lg border border-gray-100 overflow-hidden z-10">
                <Tabs>
                  <TabList className="px-2 pt-4 flex border-b border-gray-100">
                    <button
                      onClick={() => setslideOutOpen(!slideOutOpen)}
                      className="p-2 float-left text-gray-500 focus:outline-none"
                    >
                      <FiX size="25" />
                    </button>
                    <Tab className="p-2 text-sm cursor-pointer border-b-2 border-purple-600 text-indigo-600 uppercase focus:outline-none">Messages</Tab>
                    <Tab className="p-2 text-sm cursor-pointer  text-indigo-600 uppercase focus:outline-none">Settings</Tab>
                    <Tab className="p-2 text-sm cursor-pointer   text-indigo-600 uppercase focus:outline-none">Activity</Tab>
                  </TabList>

                  <TabPanel>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                      />
                      <p className="text-sm mx-2">
                        <span className="font-bold" href="#">
                          Sara Salah
                        </span>{" "}
                        replied on the{" "}
                        <span className="font-bold text-indigo-400" href="#">
                          Upload Image
                        </span>{" "}
                        artical . 2m
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="avatar"
                      />
                      <p className="text-sm mx-2">
                        <span className="font-bold" href="#">
                          Slick Net
                        </span>{" "}
                        start following you . 45m
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        alt="avatar"
                      />
                      <p className="text-sm mx-2">
                        <span className="font-bold" href="#">
                          Jane Doe
                        </span>{" "}
                        Like Your reply on{" "}
                        <span className="font-bold text-indigo-400" href="#">
                          Test with TDD
                        </span>{" "}
                        artical . 1h
                      </p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                        alt="avatar"
                      />
                      <p className="text-sm mx-2">
                        <span className="font-bold" href="#">
                          Abigail Bennett
                        </span>{" "}
                        start following you . 3h
                      </p>
                    </a>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

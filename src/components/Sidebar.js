import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { FiDisc, FiCircle } from "react-icons/fi";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.sidebarIsShown);
  }
  render() {
    return (
      <>
        <div
          onClick={() => this.props.toggleSidebar()}
          className={
            "fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden " +
            (this.props.sidebarIsShown ? "block" : "hidden")
          }
        ></div>
        <div
          className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform  px-5 py-6 shadow-sm rounded-md bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${
            this.props.sidebarIsShown
              ? "translate-x-0 ease-out3"
              : "-translate-x-full ease-in"
          }`}
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <FaFire className="fill-current text-indigo-700 h-6 w-6" />
              <span className="text-indigo-700 text-2xl mx-1 font-semibold">
                Dashboard
              </span>
            </div>
              <div className="ml-auto">
              <a href="#" className="text-sm font-medium text-indigo-500">{this.props.sidebarIsShown ? <FiDisc /> : <FiCircle />}</a>
              </div>
          </div>
          <nav className="mt-8">
            <ul className="list-reset flex-1 z-10">
              {this.props.pages.map((page, index) => (
                <LinkItem
                  page={page}
                  key={index}
                  location={this.props.location}
                />
              ))}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

let LinkItem = ({ page, location }) => (
  <li>
    <Link
      to={page.path}
      className={
        "flex items-center mt-4 py-2 px-6 rounded " +
        (location.pathname === page.path
          ? "  bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-400  text-gray-100"
          : " text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100")
      }
    >
      <FiCircle className={" px-1"} />
      <span className="px-1">{page.name}</span>
    </Link>
  </li>
);

export default Sidebar;

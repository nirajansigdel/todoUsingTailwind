import React from "react";
import nirajan from "../images/nirajan.jpg";
import {
  FaCalendar,
  FaCog,
  FaLayerGroup,
  FaList,
  FaProjectDiagram,
  FaQrcode,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      id: 1,
      title: "Overview",
      icon: <FaQrcode />,
    },
    {
      id: 2,
      title: "Task List",
      icon: <FaList />,
      to: "/",
    },
    {
      id: 3,
      title: "Project Overview",
      icon: <FaProjectDiagram />,
      to: "/projectoverview",
    },
    {
      id: 4,
      title: "Calendar",
      icon: <FaCalendar />,
    },
    {
      id: 5,
      title: "Setting",
      icon: <FaCog />,
    },
  ];
  return (
    <div className="pt-6  w-60 flex flex-col items-center text-center">
      <div className="flex justify-center text-center items-center h-11 w-56 border border-black rounded-xl">
        <img
          src={nirajan}
          alt=""
          srcset=""
          className="w-9 rounded-3xl mr-5  "
        />
        <span className="">Nirajansigdel</span>
      </div>
      <div className="space-y-1 pt-6 w-56 items-center text-center ">
        {menu.map((menu) => (
          <Link to={menu.to ? menu.to : ""}>
            <div className="menu " key={menu.id}>
              <ul className="space-y-5">
                <li className="flex space-x-3 px-4 rounded-xl hover:bg-yellow-300 cursor-pointer  items-center text-center font-medium font-serif h-11">
                  <span className="">{menu.icon}</span>
                  <span>{menu.title}</span>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex px-4 space-x-2 font-bold pt-96 pb-6 w-56 items-center">
        <span>Logout</span>
        <span>
          <FaSignOutAlt />
        </span>
      </div>
    </div>
  );
}

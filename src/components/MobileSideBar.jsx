import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  CheckCircleIcon,
  ListIcon,
  StarIcon,
  UserIcon,
  LogOut,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function MobileSideBar({ isMenuOpen, setIsMenuOpen }) {
  const [selectedItem, setSelectedItem] = useState("all");
  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    if (currentPath === "all-task") setSelectedItem("all");
    if (currentPath === "important") setSelectedItem("important");
    if (currentPath === "todo") setSelectedItem("todo");
    if (currentPath === "completed") setSelectedItem("completed");
  }, []);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div
      className={` w-screen fixed  z-10 bg-gray-900 h-screen pt-20 p-4  ${
        !isMenuOpen ? "hidden" : "lg:hidden inline"
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className=" rounded-full p-1 bg-white overflow-hidden">
          <UserRound className="w-8 h-8" />
        </div>
        <div className="text-gray-200 capitalize">
          Hey, {user?.username || ""}
        </div>
      </div>

      <nav className="space-y-1">
        <Link
          to="/all-task"
          onClick={() => {
            setSelectedItem("all");
            setIsMenuOpen(false);
          }}
          className={`flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg ${
            selectedItem === "all" && "bg-gray-800"
          }`}
        >
          <ListIcon className="w-5 h-5" />
          All Tasks
        </Link>
        <Link
          to="/completed"
          onClick={() => {
            setSelectedItem("completed");
            setIsMenuOpen(false);
          }}
          className={`flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg ${
            selectedItem === "completed" && "bg-gray-800"
          }`}
        >
          <CheckCircleIcon className="w-5 h-5" />
          Completed
        </Link>
        <Link
          to="/important"
          onClick={() => {
            setSelectedItem("important");
            setIsMenuOpen(false);
          }}
          className={`flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg ${
            selectedItem === "important" && "bg-gray-800"
          }`}
        >
          <StarIcon className="w-5 h-5" />
          Important
        </Link>
        <Link
          to="/todo"
          onClick={() => {
            setSelectedItem("todo");
            setIsMenuOpen(false);
          }}
          className={`flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg ${
            selectedItem === "todo" && "bg-gray-800"
          }`}
        >
          <CalendarIcon className="w-5 h-5" />
          To Do
        </Link>
        {/* <Link
          to="/assigned"
          onClick={() => {
            setSelectedItem("assigned");
            setIsMenuOpen(false);
          }}
          className={`flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg ${
            selectedItem === "assigned" && "bg-gray-800"
          }`}
        >
          <UserIcon className="w-5 h-5" />
          Assigned to me
        </Link> */}
      </nav>
    </div>
  );
}

export default MobileSideBar;

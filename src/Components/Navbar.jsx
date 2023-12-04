import { React, useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import todo from "../assets/icon-todo.svg";
import calender from "../assets/icon-calendar.svg";
import planning from "../assets/icon-planning.svg";
import reminders from "../assets/icon-reminders.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import close from "../assets/icon-close-menu.svg";

const Navbar = () => {
    const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);
  const [hamburger, setHamburger] = useState(false);
    const handleFeature = () => {
        setFeature(!feature);
    }
    const handleCompany = () => {
      setCompany(!company);
  };
  const handleHamburger = (e) => {
    e.preventDefault();
    setHamburger(!hamburger);
  }
  
    return (
      <>
        <div className="p-2 md:p-4 overflow-x-hidden">
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <h2 className="font-bold text-4xl text-center">snap</h2>
              <div className="gap-8 mt-2 hidden md:flex">
                <div className="cursor-pointer" onClick={handleFeature}>
                  <div className="flex gap-2 text-slate-400  text-lg hover:text-black">
                    <h3>Features</h3>
                    <span>
                      {feature ? (
                        <FaAngleUp className="mt-1" />
                      ) : (
                        <FaAngleDown className="mt-1" />
                      )}
                    </span>
                  </div>
                </div>
                {feature && (
                  <div className="flex flex-col absolute left-20 drop-shadow shadow-md p-3 mt-7 rounded-md z-10">
                    <div className="flex items-center gap-2 p-1">
                      <img src={todo} alt="" />
                      <p className="text-black-100">Todo List</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={calender} />
                      <p>Calendar</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={reminders} />
                      <p>Reminders</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={planning} />
                      <p>Planning</p>
                    </div>
                  </div>
                )}
                <div className="cursor-pointer" onClick={handleCompany}>
                  <div className="flex  gap-2 text-slate-400 text-lg hover:text-black">
                    <h3>Company</h3>
                    <span>
                      {company ? (
                        <FaAngleUp className="mt-1" />
                      ) : (
                        <FaAngleDown className="mt-1" />
                      )}
                    </span>
                  </div>
                </div>
                {company && (
                  <div className="flex flex-col absolute left-25 drop-shadow shadow-md p-3 mt-3 rounded-md">
                    <p className="p-1">History</p>
                    <p className="p-1">Our Team</p>
                    <p className="p-1">Blog</p>
                  </div>
                )}
                <h3 className="cursor-pointer text-slate-400 text-lg hover:text-black">
                  Carrers
                </h3>
                <h3 className="cursor-pointer text-slate-400 text-lg hover:text-black">
                  About
                </h3>
              </div>
            </div>

            <div className="gap-7 items-center hidden md:flex">
              <p className="cursor-pointer text-lg text-slate-400 hover:text-black">
                Login
              </p>
              <button className="cursor-pointer px-4 py-1  text-slate-400 border-black border-2 rounded-lg text-lg hover:text-black">
                Register
              </button>
            </div>
            <button className="text-4xl md:hidden cursor-pointer">
              <RxHamburgerMenu onClick={(e) => handleHamburger(e)} />
            </button>
          </div>
          {hamburger && (
            <div className="absolute top-0 right-0 drop-shadow shadow-lg h-full bg-white z-20 w-1/2">
              <div
                className="p-4 w-full text-center h-5"
                onClick={(e) => handleHamburger(e)}
              >
                <img src={close} className="ml-auto cursor-pointer" />
              </div>
              <div className="gap-5 mt-10 mb-10 flex flex-col items-start pl-10 ">
                <div className="cursor-pointer" onClick={handleFeature}>
                  <div className="flex gap-2 text-slate-400  text-lg hover:text-black">
                    <h3>Features</h3>
                    <span>
                      {feature ? (
                        <FaAngleUp className="mt-1" />
                      ) : (
                        <FaAngleDown className="mt-1" />
                      )}
                    </span>
                  </div>
                </div>
                {feature && (
                  <div className="flex flex-col pl-5 rounded-md z-10">
                    <div className="flex items-center gap-2 p-1">
                      <img src={todo} alt="" />
                      <p className="text-black-100">Todo List</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={calender} />
                      <p>Calendar</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={reminders} />
                      <p>Reminders</p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <img src={planning} />
                      <p>Planning</p>
                    </div>
                  </div>
                )}
                <div className="cursor-pointer" onClick={handleCompany}>
                  <div className="flex  gap-2 text-slate-400 text-lg hover:text-black">
                    <h3>Company</h3>
                    <span>
                      {company ? (
                        <FaAngleUp className="mt-1" />
                      ) : (
                        <FaAngleDown className="mt-1" />
                      )}
                    </span>
                  </div>
                </div>
                {company && (
                  <div className="flex flex-col pl-5 rounded-md">
                    <p className="p-1">History</p>
                    <p className="p-1">Our Team</p>
                    <p className="p-1">Blog</p>
                  </div>
                )}
                <h3 className="cursor-pointer text-slate-400 text-lg hover:text-black">
                  Carrers
                </h3>
                <h3 className="cursor-pointer text-slate-400 text-lg hover:text-black">
                  About
                </h3>
              </div>
              <div className="gap-7 items-center flex flex-col">
                <p className="cursor-pointer text-lg text-slate-400 hover:text-black">
                  Login
                </p>
                <button className="cursor-pointer px-4 py-1  text-slate-400 border-black border-2 rounded-lg text-lg hover:text-black">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
}

export default Navbar
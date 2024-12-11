import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <h1 className="text-2xl ">
        URBAN<span className="text-[#c586a5]  text-2xl">.</span>
      </h1>
      {/* <img src={assets.logo} className="w-36" alt="" /> */}

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="dropdown dropdown-end">
          <button tabIndex={0}>
            <div className="w-5 ">
              <img
                alt="Tailwind CSS Navbar component"
                src={assets.profile_icon}
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5 " src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <button>Back</button>
          </div>
        </div>
      </div>
      {/* sidebar end */}
    </div>
  );
};

export default Navbar;

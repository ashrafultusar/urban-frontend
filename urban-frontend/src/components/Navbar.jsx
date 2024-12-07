import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
      <div className="flex items-center justify-between py-5 font-medium">
          <h1 className="text-2xl ">URBAN<span className="text-[#c586a5]  text-2xl">.</span></h1>
      {/* <img src={assets.logo} className="w-36" alt="" /> */}

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />{" "}
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

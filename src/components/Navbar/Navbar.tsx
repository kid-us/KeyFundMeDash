import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../../assets";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      {/* Large Device  Navbar*/}
      <div className="lg:flex md:flex hidden justify-between ">
        <div>
          <p className="text-2xl font-bold first-letter:uppercase">
            {path === "/" ? "Dashboard" : path.substring(1)}{" "}
            {path !== "/" && path !== "/setting" && "fundraising"}
          </p>
          <p className="text-sm text-gray-400">Welcome back Admin.</p>
        </div>

        <div className="flex gap-x-10 items-center bg-white rounded-lg shadow px-10 font-bold">
          <p className="text-gray-500">
            <span className="bi-person-circle"></span> Admin
          </p>
          <button className="bi-chat-square-text-fill text-blue-500"></button>
          <button className="bi-box-arrow-left text-red-500"></button>
        </div>
      </div>

      {/* Small Device Navbar */}
      <div className="sticky top-1 z-50 lg:hidden md:hidden bg-white flex justify-between shadow p-2 rounded-xl">
        <Link to={"/"} className="flex gap-x-4">
          <img src={logo2} alt="Logo" className="w-10" />
          <p className="font-bold pt-2">KeyFundMe</p>
        </Link>

        <div className="flex gap-x-5">
          <button className="bi-chat-square-text-fill text-blue-500 text-lg pt-1"></button>
          <button
            onClick={() => setMenu(true)}
            className="bi-list text-2xl"
          ></button>
        </div>
      </div>

      {/* Small device Menu */}
      {menu && <Menu onClose={() => setMenu(false)} />}
    </>
  );
};

export default Navbar;

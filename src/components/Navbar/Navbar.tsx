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
      <div className="lg:flex hidden justify-between ">
        <div>
          <p className="text-2xl font-bold first-letter:uppercase">
            {path === "/" ? "Dashboard" : path.substring(1)}
          </p>
          <p className="text-sm text-gray-400">Welcome back Admin.</p>
        </div>

        {/* <div className="bg-white rounded-full px-10 py-2 font-bold uppercase">
        Admin
      </div> */}
      </div>

      {/* Small Device Navbar */}
      <div className="lg:hidden bg-white flex justify-between shadow p-2 rounded-xl">
        <Link to={"/"} className="flex gap-x-4">
          <img src={logo2} alt="Logo" className="w-10" />
          <p className="font-bold pt-2">KeyFundMe</p>
        </Link>

        <button
          onClick={() => setMenu(true)}
          className="bi-list text-2xl"
        ></button>
      </div>

      {/* Small device Menu */}
      {menu && <Menu onClose={() => setMenu(false)} />}
    </>
  );
};

export default Navbar;

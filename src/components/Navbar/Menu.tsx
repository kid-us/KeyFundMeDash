import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../../assets";
import { menus } from "../Sidebar/Sidebar";

interface Props {
  onClose: () => void;
}

const Menu = ({ onClose }: Props) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="absolute top-0 left-0 p-5 w-full bg-white z-40 h-[100vh]">
      <div className="flex justify-between">
        <div className="flex gap-x-5">
          <img src={logo2} alt="Logo" className="w-12" />
          <p className="mt-3 text-xl font-bold">KeyFundMe</p>
        </div>
        <button
          onClick={() => onClose()}
          className="bi-x-lg text-xl me-2"
        ></button>
      </div>
      {/* Menus */}
      <div className="mt-10">
        <p className="text-gray-300 text-sm mb-3">Main Menus</p>

        {menus.map((m) => (
          <>
            <Link
              onClick={() => onClose()}
              key={m.id}
              to={m.path}
              className={`flex gap-3 mb-3 hover:bg-gray-50 p-2 rounded ${
                path === m.path && "bg-gray-100"
              } `}
            >
              <p
                className={`bi-${m.icon} ${
                  path === m.path ? "text-black" : "text-gray-500"
                }`}
              ></p>
              <p
                className={`first-letter:uppercase font-bold text-[15px] pt-[1px] ${
                  path === m.path ? "text-black" : "text-gray-500"
                }`}
              >
                {m.name}
              </p>
            </Link>
          </>
        ))}
      </div>

      {/* Logout */}
      <div className="absolute bottom-5">
        <p className="text-[15px] font-bold text-gray-500 hover:text-black cursor-pointer">
          <span className="bi-arrow-bar-left me-3"></span>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Menu;

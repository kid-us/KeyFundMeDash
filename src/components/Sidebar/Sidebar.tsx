import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../../assets";

interface Menu {
  id: number;
  name: string;
  icon: string;
  path: string;
  sub?: boolean;
}

export const menus: Menu[] = [
  {
    id: 1,
    icon: "microsoft",
    name: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: "database-fill",
    name: "Fundraising",
    path: "/fundraising",
    sub: true,
  },
  {
    id: 3,
    icon: "gear-fill",
    name: "Setting",
    path: "/setting",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="relative lg:py-6 lg:px-9 bg-white h-[100vh]">
      <div className="flex gap-x-5">
        <img src={logo2} alt="Logo" className="w-12" />
        <p className="mt-3 text-xl font-bold">KeyFundMe</p>
      </div>
      {/* Menus */}
      <div className="mt-10">
        <p className="text-gray-300 text-sm mb-3">Main Menus</p>

        {menus.map((m) => (
          <>
            <Link
              key={m.id}
              to={m.path}
              className={`flex gap-3 mb-3 hover:bg-gray-50 p-2 rounded ${
                path === "/fundraising"
                  ? ""
                  : path === m.path && "bg-gray-100 shadow"
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

            {m.sub && (
              <div className="ps-5">
                {/* Pending */}
                <Link
                  to="/fundraising"
                  className={`flex gap-x-1 ${
                    path === "/fundraising" && "bg-gray-100 rounded shadow"
                  } ps-4 pt-2`}
                >
                  <p
                    className={`bi-hourglass-split ${
                      path === "/fundraising" ? "text-black" : "text-gray-500"
                    }`}
                  ></p>
                  <p
                    className={`text-[15px] pt-[1px] mb-2 ${
                      path === "/fundraising" ? "text-black" : "text-gray-500"
                    }`}
                  >
                    Pending
                  </p>
                </Link>
                {/* Approved */}
                <Link
                  to="approved"
                  className={`flex gap-x-1 ${
                    path === "/approved" && "bg-gray-100 rounded shadow"
                  } ps-4 pt-2`}
                >
                  <p
                    className={`bi-check-all ${
                      path === "/approved" ? "text-black" : "text-gray-500"
                    }`}
                  ></p>
                  <p
                    className={`text-[15px] pt-[1px] mb-2 ${
                      path === "/approved" ? "text-black" : "text-gray-500"
                    }`}
                  >
                    Approved
                  </p>
                </Link>
                {/* Declined */}
                <Link
                  to="declined"
                  className={`flex gap-x-1 ${
                    path === "/declined" && "bg-gray-100 rounded shadow"
                  } ps-4 pt-2`}
                >
                  <p
                    className={`bi-x ${
                      path === "/declined" ? "text-black" : "text-gray-500"
                    }`}
                  ></p>
                  <p
                    className={`text-[15px] pt-[1px] mb-2 ${
                      path === "/declined" ? "text-black" : "text-gray-500"
                    }`}
                  >
                    Declined
                  </p>
                </Link>
              </div>
            )}
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

export default Sidebar;

import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../../assets";
import { fund, menus } from "../../services/sidebar";
import useSidebar from "../../store/useSidebarStore";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const { fundraising, setFundraising } = useSidebar();

  // Helper function to determine active class
  const getActiveClass = (isActive: boolean) =>
    isActive ? "text-black" : "text-gray-500";

  return (
    <div className="sticky top-0 lg:py-6 md:py-6 lg:px-9 md:px-5 bg-white h-[100vh]">
      <div className="flex gap-x-5">
        <img src={logo2} alt="Logo" className="w-12" />
        <p className="mt-3 text-xl font-bold">KeyFundMe</p>
      </div>

      {/* Menus */}
      <div className="mt-10">
        <p className="text-gray-300 text-sm mb-3">Main Menus</p>

        {menus.map((m) => (
          <div key={m.id}>
            {m.path === "/fundraising" ? (
              <div
                onClick={() => setFundraising(!fundraising)}
                className={`flex gap-3 mb-3 p-2 rounded hover:bg-gray-50 cursor-pointer`}
              >
                <p
                  className={`bi-${m.icon} ${getActiveClass(fundraising)}`}
                ></p>
                <p
                  className={`font-bold text-[15px] pt-[1px] ${getActiveClass(
                    fundraising
                  )}`}
                >
                  {m.name}

                  <span
                    className={`bi-chevron-${
                      fundraising ? "up" : "down"
                    } ${getActiveClass(fundraising)} ms-2`}
                  ></span>
                </p>
              </div>
            ) : (
              <Link
                to={m.path}
                className={`flex gap-3 mb-2 hover:bg-gray-50 p-2 rounded ${
                  path === m.path && "bg-gray-100 shadow"
                }`}
              >
                <p
                  className={`bi-${m.icon} ${
                    path === m.path ? "text-black" : "text-gray-500"
                  }`}
                ></p>
                <p
                  className={`font-bold text-[15px] pt-[1px] ${
                    path === m.path ? "text-black" : "text-gray-500"
                  }`}
                >
                  {m.name}
                </p>
              </Link>
            )}

            {/* Fundraising Dropdowns */}
            {m.sub && fundraising && (
              <div className="ps-5 mb-2">
                {fund.map((f) => (
                  <Link
                    key={f.id}
                    to={f.path}
                    className={`flex gap-3 mb-2 hover:bg-gray-50 p-1 ps-3 rounded ${
                      path === f.path && "bg-gray-100 shadow"
                    }`}
                  >
                    <p
                      className={`bi-${f.icon} ${
                        path === f.path ? "text-black" : "text-gray-500"
                      }`}
                    ></p>
                    <p
                      className={`text-[14px] pt-[1px] ${
                        path === f.path ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {f.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
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

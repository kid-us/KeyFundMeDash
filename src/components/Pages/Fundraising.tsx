import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useLocation } from "react-router-dom";
import Pending from "../Fundraising/Pending";
import Approved from "../Fundraising/Approved";
import Declined from "../Fundraising/Declined";

const Fundraising = () => {
  const [title] = useState<string>("Fundraising");
  useDocumentTitle(title);

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="relative lg:grid md:grid lg:grid-cols-15 md:grid-cols-12 lg:bg-[#F8F8F8] md:bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="lg:col-span-3 md:col-span-3 lg:block md:block hidden w-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-12 md:col-span-9 lg:px-8 lg:py-9 p-3">
        <Navbar />

        <div className="flex justify-between mt-3">
          {/* Pending */}
          {path === "/pending" && <Pending />}
          {/* Approved */}
          {path === "/approved" && <Approved />}
          {/* Declined */}
          {path === "/declined" && <Declined />}
        </div>
      </div>
    </div>
  );
};

export default Fundraising;

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

// const taps = ["pending, approved, declined"];

const Fundraising = () => {
  const [title] = useState<string>("Fundraising");
  useDocumentTitle(title);

  //   const [active, setActive] = useState<string>("pending");

  return (
    <div className="relative lg:grid md:grid grid-cols-11 lg:bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="lg:col-span-2 lg:block hidden w-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 md:col-span-10 lg:px-8 lg:py-9 p-3">
        <Navbar />

        <div className="flex justify-between mt-3">
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;

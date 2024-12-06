import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [title] = useState("KeyFundMe | Dashboard");
  useDocumentTitle(title);

  return (
    <div className="relative lg:grid md:grid lg:grid-cols-15 md:grid-cols-12 lg:bg-[#F8F8F8] md:bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="lg:col-span-3 md:col-span-3 lg:block md:block hidden w-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-12 md:col-span-9 lg:px-8 lg:py-9 p-3">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;

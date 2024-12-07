import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ServiceFee from "../Home/ServiceFee";

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

        <p className="text-gray-500 font-poppins mt-8 mb-2">Analytics</p>
        <div className="lg:grid grid-cols-3 gap-5">
          {/* Total Fundraising's */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              Total Created Fundraising's
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                100
              </p>
              <p className="font-poppins bi-database-fill text-2xl text-blue-600"></p>
            </div>
          </div>
          {/* Total Approved Fundraising's */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              Total Approved Fundraising's
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                100
              </p>
              <p className="font-poppins bi-database-fill text-2xl text-blue-600"></p>
            </div>
          </div>

          {/* Total Declined Fundraising's */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              Total Declined Fundraising's
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                100
              </p>
              <p className="font-poppins bi-database-fill text-2xl text-blue-600"></p>
            </div>
          </div>

          {/* Total Pending Fundraising's */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              Total Pending Fundraising's
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                100
              </p>
              <p className="font-poppins bi-database-fill text-2xl text-blue-600"></p>
            </div>
          </div>

          {/* All Time Donations */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              All time Donations
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                10000 <span className="text-sm text-gray-500">ETB</span> | 10000{" "}
                <span className="text-sm text-gray-500">$</span>
              </p>
              <p className="font-poppins bi-box2-heart-fill text-2xl text-blue-600"></p>
            </div>
          </div>

          {/* Total Fundraisers */}
          <div className="bg-white w-full p-4 rounded-lg shadow shadow-zinc-300 lg:mb-0 mb-5">
            <p className="font-poppins text-gray-400 text-sm">
              Total Fundraisers
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-black font-poppins font-extrabold text-3xl">
                1000
              </p>
              <p className="font-poppins bi-person-fill text-3xl text-blue-600"></p>
            </div>
          </div>
        </div>

        {/* Service Fee */}
        <ServiceFee />
      </div>
    </div>
  );
};

export default Home;

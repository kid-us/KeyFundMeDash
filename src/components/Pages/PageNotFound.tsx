import { Link } from "react-router-dom";
import { notFound } from "../../assets";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Sidebar from "../Sidebar/Sidebar";

const PageNotFound = () => {
  const [title] = useState("404 | Page not Found");
  useDocumentTitle(title);

  return (
    <div>
      <div className="relative lg:grid md:grid grid-cols-11 lg:bg-[#F8F8F8]">
        {/* Sidebar */}
        <div className="lg:col-span-2 lg:block hidden w-full">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 md:col-span-10 lg:px-8 lg:py-9 p-3">
          <div className="lg:flex items-center justify-center h-full lg:px-0 px-2 lg:mt-0 mt-10">
            <div className="w-full lg:p-8 px-3 py-8">
              <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-5">
                <img src={notFound} alt="" className="w-96" />
                <div className="flex items-center h-full">
                  <div>
                    <p className="lg:text-3xl text-xl font-bold">Oops!</p>
                    <p className="my-4 text-gray-500 lg:text-xl text-md">
                      We couldn't find the page you were looking for
                    </p>
                    <Link to={"/"}>
                      <p className="bg-black text-sm rounded-full text-white text-center w-40 p-2">
                        <span className="bi-arrow-left mx-2"></span>Go Home
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

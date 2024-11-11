import { Link } from "react-router-dom";
import { notFound } from "../../assets";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Navbar from "../Navbar/Navbar";

const PageNotFound = () => {
  const [title] = useState("404 | Page not Found");
  useDocumentTitle(title);

  return (
    <div>
      <Navbar />
      <div className="lg:h-[100dvh]">
        <div className="lg:flex items-center justify-center h-full lg:px-0 px-2 mt-14">
          <div className="bg-white lg:w-[70%] h-auto rounded-lg lg:p-8 px-3 py-8">
            <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-5">
              <img src={notFound} alt="" />
              <div className="flex items-center h-full">
                <div>
                  <p className="lg:text-5xl text-3xl font-bold">Oops!</p>
                  <p className="my-4 text-gray-500 lg:text-2xl text-lg">
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
  );
};

export default PageNotFound;

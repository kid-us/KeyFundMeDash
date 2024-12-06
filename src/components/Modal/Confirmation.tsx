import { useState } from "react";
import Loader from "../Loader/Loader";

interface Props {
  onDelete: (value: boolean) => void;
  name: string;
  id: string;
}

const Confirmation = ({ onDelete, name }: Props) => {
  const [confirmed, setConfirmed] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);

  //   Handle Delete/Approve
  const handleConfirm = () => {
    setLoader(true);
    setConfirmed(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 bg-neutral-700/50 w-full h-full z-50 "></div>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="py-6 px-8 rounded lg:w-[30%] lg:mx-0 mx-3 bg-white">
            {!confirmed ? (
              <>
                <h1 className="text-black">{name} Fundraising</h1>
                <p className="text-sm text-gray-500 mt-2 mb-5 font-poppins">
                  {name === "Delete"
                    ? "Are you sure you want to delete fundraising and fundraiser? This action cannot be undone. Do you want to proceed?"
                    : "Are you sure you want to approve fundraising and fundraiser? Do you want to proceed?"}
                </p>
                <div className="flex justify-between gap-x-10">
                  {!loader && (
                    <button
                      onClick={() => onDelete(false)}
                      className="w-full bg-sky-600 rounded-lg shadow shadow-zinc-900 text-white h-12 font-poppins"
                    >
                      Cancel
                    </button>
                  )}

                  {loader ? (
                    <div className="flex justify-center w-full">
                      <Loader style="bg-red-500 h-12 rounded-lg" />
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConfirm()}
                      className={`w-full ${
                        name === "Delete" ? "bg-red-500" : "bg-green-600"
                      } text-white rounded-lg h-12 font-poppins shadow shadow-zinc-900`}
                    >
                      {name === "Delete" ? "Delete" : "Approve"}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-4">
                <p className=" text-center text-green-500  mb-1 bi-check-circle-fill me-2 text-4xl"></p>
                <p className="text-green-500 text-xl text-center">Well Done</p>
                <p className="text-black mt-5 font-poppins first-letter:uppercase text-center">
                  {name === "Delete" &&
                    "Fundraising and Fundraiser delete successfully!"}
                  {name === "Approve" && "Fundraising approved successfully!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;

import { useState } from "react";
import Loader from "../Loader/Loader";

interface Props {
  onClose: (value: boolean) => void;
  name: string;
  id: string;
}

const Confirmation = ({ onClose, name, id }: Props) => {
  const [confirmed, setConfirmed] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);

  //   Handle Delete/Approve
  const handleConfirm = () => {
    setLoader(true);
    setConfirmed(true);
    console.log(id);
  };

  return (
    <>
      <div className="fixed top-0 left-0 bg-neutral-700/50 w-full h-full z-50 "></div>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="py-6 lg:px-8 px-5 rounded lg:w-[30%] lg:mx-0 mx-3 bg-white">
            {!confirmed ? (
              <>
                <h1 className="text-black font-bold text-lg">
                  {name} Fundraising
                </h1>
                <p className="text-sm text-gray-500 mt-2 mb-5 font-poppins">
                  {name === "Delete"
                    ? "Are you sure you want to delete fundraising and fundraiser? This action cannot be undone. Do you want to proceed?"
                    : name === "Approve"
                    ? "Are you sure you want to approve fundraising and fundraiser? Do you want to proceed?"
                    : name === "Deactivate"
                    ? "Are you sure you want to deactivate fundraising? Do you want to proceed?"
                    : "Are you sure you want to close fundraising? This action cannot be undone. Do you want to proceed"}
                </p>
                <div className="flex justify-between gap-x-10">
                  {!loader && (
                    <button
                      onClick={() => onClose(false)}
                      className="w-full text-sm bg-sky-600 rounded-lg shadow shadow-zinc-900 text-white h-11 font-poppins"
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
                        name === "Delete"
                          ? "bg-red-500"
                          : name === "Complete" || name === "Approve"
                          ? "bg-green-600"
                          : "bg-yellow-500"
                      } text-white rounded-lg text-sm h-11 font-poppins shadow shadow-zinc-900`}
                    >
                      {name}
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
                  {name === "Deactivate" &&
                    "Fundraising deactivated successfully!"}
                  {name === "Complete" && "Fundraising closed successfully!"}
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

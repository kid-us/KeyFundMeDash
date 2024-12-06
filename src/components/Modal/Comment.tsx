import { useState } from "react";
import Loader from "../Loader/Loader";

interface Props {
  onClose: (value: boolean) => void;
  id: string;
}

const Comment = ({ onClose, id }: Props) => {
  const [confirmed, setConfirmed] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);

  const [comment, setComment] = useState<string>("");
  const [commentError, setCommentError] = useState<boolean>(false);

  //   Handle Delete/Approve
  const handleSubmitComment = () => {
    if (comment.length < 10) {
      setCommentError(true);
      return;
    }

    setCommentError(false);

    console.log(id);

    setLoader(true);
    setConfirmed(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 bg-neutral-700/50 w-full h-full z-50 "></div>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="py-6 lg:px-8 px-5 rounded lg:w-[50%] lg:mx-0 mx-3 bg-white">
            {!confirmed ? (
              <>
                <h1 className="text-black font-bold text-lg">
                  Decline Fundraising
                </h1>
                <p className="text-sm text-gray-500 mt-2 mb-5 font-poppins">
                  Write the reason why the fundraising and fundraiser got
                  declined.
                </p>
                {/* Comment */}
                <textarea
                  className="h-32 w-full p-2 placeholder:text-sm placeholder:italic focus:outline-none resize-none shadow border border-gray-400 rounded-lg"
                  value={comment}
                  onChange={(e) => setComment(e.currentTarget.value)}
                  placeholder="Write decline reason here"
                ></textarea>

                {commentError && (
                  <p className="text-xs text-red-500">
                    Comment required and must be greater than 10 chars.
                  </p>
                )}

                <div className="flex justify-between gap-x-10 mt-6">
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
                      onClick={() => handleSubmitComment()}
                      className={`w-full text-sm bg-green-600 text-white rounded-lg h-11 font-poppins shadow shadow-zinc-900`}
                    >
                      Decline
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-4">
                <p className=" text-center text-green-500  mb-1 bi-check-circle-fill me-2 text-4xl"></p>
                <p className="text-green-500 text-xl text-center">Well Done</p>
                <p className="text-black mt-5 font-poppins first-letter:uppercase text-center">
                  Fundraising and Fundraiser declined successfully with comment!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;

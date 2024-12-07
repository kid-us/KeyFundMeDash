import { useState } from "react";
import Loader from "../Loader/Loader";

const ServiceFee = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [fee, setFee] = useState<number>(1);
  const [feeError, setFeeError] = useState<boolean>(false);

  const handleServiceFee = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fee || fee < 1) {
      setFeeError(true);
      return;
    }
    setFeeError(false);

    setLoader(true);
  };

  return (
    <div>
      <p className="text-black font-poppins mt-8">Service Fee</p>
      <p className="text-gray-700 font-poppins text-xs">
        Let's create Service Fee
      </p>

      <form onSubmit={handleServiceFee}>
        <div className="grid lg:grid-cols-2 gap-x-5 rounded mt-5">
          {/* Fee Input */}
          <div>
            <label htmlFor="fee" className="sr-only">
              Service Fee
            </label>
            <input
              id="fee"
              type="number"
              name="fee"
              className="w-full shadow rounded-lg h-12 font-poppins font-bold px-4 focus:outline-none border border-gray-300"
              value={fee}
              onChange={(e) => setFee(Number(e.currentTarget.value))}
              min={1}
            />
            {feeError && (
              <p className="text-xs font-poppins text-red-500">
                Service fee required and it must be greater than 1.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            {loader ? (
              <Loader style="bg-black w-full h-12 lg:mt-0 mt-4" />
            ) : (
              <button
                className="text-white bg-black w-full rounded font-poppins shadow shadow-zinc-950 h-12 lg:mt-0 mt-4 text-sm"
                disabled={loader}
              >
                Change Service Fee
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceFee;

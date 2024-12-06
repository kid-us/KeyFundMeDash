import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../services/request";
import { AllCampaigns } from "../Pages/Fundraising";
import Loading from "../Loading/Loading";
import useToken from "../../store/useToken";
import Confirmation from "../Modal/Confirmation";
import Comment from "../Modal/Comment";

const Pending = () => {
  const [title] = useState<string>("Pending Fundraising");
  useDocumentTitle(title);

  const { access_token } = useToken();

  const [onDelete, setOnDelete] = useState<boolean>(false);
  const [onApprove, setOnApprove] = useState<boolean>(false);
  const [onDecline, setOnDecline] = useState<boolean>(false);
  const [fundraisingId, setFundraisingId] = useState<string>("");

  const { data: campaign, isLoading } = useQuery({
    queryKey: ["campaign"],
    queryFn: () =>
      axios
        .get<AllCampaigns>(`${baseUrl}fundraisers`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => res.data.campaigns),
  });

  return (
    <>
      {/* Delete  */}
      {onDelete && (
        <Confirmation
          id={fundraisingId}
          name="Delete"
          onClose={() => {
            setOnDelete(false);
            setFundraisingId("");
          }}
        />
      )}

      {/* Approve */}
      {onApprove && (
        <Confirmation
          id={fundraisingId}
          name="Approve"
          onClose={() => {
            setOnApprove(false);
            setFundraisingId("");
          }}
        />
      )}

      {/* Decline */}
      {onDecline && (
        <Comment onClose={() => setOnDecline(false)} id={fundraisingId} />
      )}

      <div className="mt-10">
        {isLoading && <Loading />}
        <div>
          {campaign && campaign.length > 0 ? (
            campaign.map((c) => (
              <div key={c.fid} className="grid grid-cols-2 gap-x-5 mb-4">
                <div className="grid grid-cols-1 gap-2 transition-transform hover:-translate-y-0.5 hover:shadow rounded-2xl">
                  {/* Fundraising Info */}
                  <p className="mb-3 text-sm font-bold text-gray-500">
                    Fundraising Info
                  </p>
                  <div className="rounded-2xl p-2 border border-gray-400/50 overflow-hidden">
                    <img
                      src={c.main_image}
                      alt="Cover Image"
                      className="lg:h-64 h-52 w-full object-cover rounded-2xl"
                    />
                    <div className="py-3 px-2">
                      <h1 className="font-bold lg:text-lg">
                        {c.campaign_title}
                      </h1>

                      <div className="lg:mt-3 flex justify-between">
                        <div className="">
                          <p className="text-[15px] font-semibold text-gray-600">
                            Raised in Birr :{" "}
                            <span className="text-black">{c.raised_birr}</span>{" "}
                            Birr
                          </p>
                          <p className="text-[15px] font-semibold text-gray-600">
                            Raised in Birr :{" "}
                            <span className="text-black">{c.raised_usd}</span>{" "}
                            USD
                          </p>

                          <p className="text-sm font-semibold text-gray-600">
                            Target Amount:{" "}
                            <span className="text-black">
                              {c.target_amount}
                            </span>{" "}
                            birr.
                          </p>
                        </div>

                        <div
                          className="relative flex items-center justify-center shadow-lg ms-5"
                          style={{
                            width: 40,
                            height: 40,
                            background: `conic-gradient(#00adee ${Math.min(
                              (c.total_raised_amount_in_birr /
                                c.target_amount) *
                                100,
                              100
                            )}%, #334155 0%)`,
                            borderRadius: "50%",
                          }}
                        >
                          {/* Inner text */}
                          <span className="absolute text-xs font-semibold text-white">
                            {Math.min(
                              (c.total_raised_amount_in_birr /
                                c.target_amount) *
                                100,
                              100
                            ).toFixed(0)}
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fundraiser Info */}
                <div>
                  <p className="mb-3 text-sm font-bold text-gray-500">
                    Fundraiser Info
                  </p>
                  <p className="font-bold mb-1">
                    <span className="bi-person-fill me-2"></span>
                    {c.first_name} {c.last_name}
                  </p>
                  <p className="font-poppins text-sm mb-1">
                    <span className="bi-phone-fill me-2"></span>
                    {c.phone_number}
                  </p>
                  <p className="font-poppins text-sm mb-1">
                    <span className="bi-phone-fill me-2"></span>
                    {c.id_type}
                  </p>
                  {/* Id Images */}
                  <div className="grid grid-cols-2 gap-x-3 mt-5">
                    <div>
                      <p className="text-xs mb-2 text-gray-500">Front ID</p>
                      <div className="image-container">
                        <img
                          src={c.id_front}
                          alt="Front ID"
                          className="h-40 w-full rounded object-contain"
                        />
                      </div>
                    </div>
                    {c.id_back && (
                      <div>
                        <p className="text-xs mb-2 text-gray-500">Back ID</p>
                        <div className="image-container">
                          <img
                            src={c.id_back}
                            alt="Back ID"
                            className="h-40 w-full rounded object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-span-2 space-x-10 mt-5">
                  {/* Delete */}
                  <button
                    onClick={() => {
                      setOnDelete(true);
                      setFundraisingId(c.fid);
                    }}
                  >
                    Delete
                  </button>
                  {/* Approve */}
                  <button
                    onClick={() => {
                      setOnApprove(true);
                      setFundraisingId(c.fid);
                    }}
                  >
                    Approve
                  </button>
                  {/* Comment */}
                  <button
                    onClick={() => {
                      setOnDecline(true);
                      setFundraisingId(c.fid);
                    }}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <p>
                There are no active pending campaigns at the moment. When
                available, they will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pending;

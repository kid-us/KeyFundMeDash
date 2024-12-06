import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Campaigns } from "../Pages/Fundraising";
import Confirmation from "../Modal/Confirmation";
import Comment from "../Modal/Comment";
import Description from "../Modal/Description";
import useSidebar from "../../store/useSidebarStore";

interface Props {
  campaigns: Campaigns[];
  status: string;
}

interface Btns {
  id: number;
  name: string;
  bg: string;
  type: string;
}

const Campaign = ({ campaigns, status }: Props) => {
  const [title] = useState<string>("Pending Fundraising");
  useDocumentTitle(title);

  const { setFundraising } = useSidebar();

  const [statusButtons, setStatusButtons] = useState<Btns[]>([]);

  useEffect(() => {
    setFundraising(true);

    if (status === "pending") {
      setStatusButtons([
        { id: 1, type: "confirmation", name: "Approve", bg: "bg-green-500" },
        { id: 2, type: "comment", name: "Decline", bg: "bg-yellow-500" },
        { id: 3, type: "confirmation", name: "Delete", bg: "bg-red-500" },
      ]);
    } else if (status === "approved") {
      setStatusButtons([
        { id: 1, type: "confirmation", name: "Deactivate", bg: "bg-blue-500" },
        { id: 2, type: "confirmation", name: "Complete", bg: "bg-green-500" },
      ]);
    } else if (status === "declined") {
      setStatusButtons([
        { id: 1, type: "confirmation", name: "Approve", bg: "bg-green-500" },
        { id: 2, type: "confirmation", name: "Delete", bg: "bg-red-500" },
      ]);
    } else if (status === "deactivate") {
      setStatusButtons([
        { id: 1, type: "confirmation", name: "Complete", bg: "bg-green-500" },
        { id: 2, type: "confirmation", name: "Delete", bg: "bg-red-500" },
        { id: 3, type: "confirmation", name: "Activate", bg: "bg-green-500" },
      ]);
    }
  }, [status]);

  const [onConfirmation, setOnConfirmation] = useState({
    isConfirm: false,
    type: "",
  });
  const [onDecline, setOnDecline] = useState<boolean>(false);
  const [fundraisingId, setFundraisingId] = useState<string>("");

  const [description, setDescription] = useState({
    desc: "",
    title: "",
  });

  // Get Date
  const getDate = (timestamp: string) => {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <>
      {/* Delete  */}
      {onConfirmation.isConfirm && (
        <Confirmation
          id={fundraisingId}
          name={onConfirmation.type}
          onClose={() => {
            setOnConfirmation({ isConfirm: false, type: "" });
            setFundraisingId("");
          }}
        />
      )}

      {/* Decline */}
      {onDecline && (
        <Comment onClose={() => setOnDecline(false)} id={fundraisingId} />
      )}

      {/* Description */}
      {description.desc !== "" && (
        <Description
          title={description.title}
          description={description.desc}
          onClose={() => setDescription({ desc: "", title: "" })}
        />
      )}

      {/* Campaigns */}
      <div>
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((c) => (
            <div
              key={c.fid}
              className="grid grid-cols-4 gap-x-10 mb-4 bg-white rounded-xl shadow p-5"
            >
              <div className="col-span-2 grid grid-cols-1">
                {/* Fundraising Info */}
                <p className="mb-3 text-sm font-bold text-gray-500">
                  Fundraising Info
                </p>

                <div className="rounded-2xl p-2 border border-gray-400/50 overflow-hidden">
                  {/* Main Image */}
                  <img
                    src={c.main_image}
                    alt="Cover Image"
                    className="lg:h-64 h-52 w-full object-cover rounded-2xl"
                  />
                  <div className="py-3 px-2">
                    {/* Title */}
                    <h1 className="font-bold lg:text-lg">{c.campaign_title}</h1>
                    {/* Infos */}
                    <div className="lg:mt-3 flex justify-between">
                      <div className="">
                        {(status === "approved" || status === "completed") && (
                          <>
                            <p className="text-[15px] font-semibold text-gray-600">
                              Raised :{" "}
                              <span className="text-black">
                                {c.raised_birr}
                              </span>{" "}
                              Birr
                            </p>
                            <p className="text-[15px] font-semibold text-gray-600">
                              Raised :{" "}
                              <span className="text-black">{c.raised_usd}</span>{" "}
                              USD
                            </p>
                          </>
                        )}

                        <p className="text-sm font-semibold text-gray-600">
                          Target:{" "}
                          <span className="text-black">{c.target_amount}</span>{" "}
                          birr.
                        </p>

                        <p className="text-sm font-semibold text-gray-600">
                          Category:{" "}
                          <span className="text-black">{c.category}</span>{" "}
                        </p>

                        <p className="text-sm font-semibold text-gray-600">
                          For: <span className="text-black">{c.for_who}</span>{" "}
                        </p>
                        <p
                          onClick={() =>
                            setDescription({
                              desc: c.campaign_description,
                              title: c.campaign_title,
                            })
                          }
                          className="text-sm font-semibold text-blue-500 cursor-pointer"
                        >
                          View description
                        </p>
                      </div>

                      {/* Progress */}
                      <div
                        className="relative flex items-center justify-center shadow-lg ms-5"
                        style={{
                          width: 40,
                          height: 40,
                          background: `conic-gradient(#00adee ${Math.min(
                            (c.total_raised_amount_in_birr / c.target_amount) *
                              100,
                            100
                          )}%, #334155 0%)`,
                          borderRadius: "50%",
                        }}
                      >
                        {/* Inner text */}
                        <span className="absolute text-xs font-semibold text-white">
                          {Math.min(
                            (c.total_raised_amount_in_birr / c.target_amount) *
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
              <div className="col-span-2">
                <div className="flex justify-between">
                  <p className="mb-3 text-sm font-bold text-gray-500">
                    Fundraiser Info
                  </p>
                  {/* Created At */}
                  <p className="text-gray-500 text-sm">
                    <span className="bi-calendar me-2"></span>{" "}
                    {getDate(c.created_at)}
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-bold mb-1">
                      <span className="bi-person-fill me-2"></span>
                      {c.first_name} {c.last_name}
                    </p>
                    <p className="text-sm mb-1">
                      <span className="bi-phone-fill me-2"></span>
                      {c.phone_number}
                    </p>
                    <p className="text-sm mb-1">
                      <span className="bi-bank me-2"></span>
                      {c.bank_name}
                    </p>
                    <p className="text-sm mb-1">
                      <span className="bi-123 me-2"></span>
                      {c.account_number}
                    </p>
                  </div>
                  {/* Photo */}
                  <div>
                    <p className="text-sm mb-1">
                      <span className="bi-person-bounding-box me-2"></span>
                      Photo
                    </p>
                    <img
                      src={c.photo}
                      alt="user-photo"
                      className="w-32 h-32 object-cover rounded border border-gray-300"
                    />
                  </div>
                </div>

                <p className="text-sm mb-1">
                  <span className="bi-passport-fill me-2"></span>
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
                        className="h-40 w-full rounded object-cover border border-gray-300"
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
                          className="h-40 w-full rounded object-cover border border-gray-300"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="col-span-2 space-x-5 mt-5">
                  {statusButtons.map((btn) => (
                    <button
                      key={btn.id}
                      className={`${btn.bg} rounded shadow shadow-zinc-600 text-sm text-white px-3 py-2`}
                      onClick={() => {
                        btn.type === "confirmation"
                          ? setOnConfirmation({
                              isConfirm: true,
                              type: btn.name,
                            })
                          : setOnDecline(true);
                        setFundraisingId(c.fid);
                      }}
                    >
                      {btn.name}
                    </button>
                  ))}
                </div>
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
    </>
  );
};

export default Campaign;

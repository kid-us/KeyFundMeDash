import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import baseUrl from "../../services/request";
import { AllCampaigns } from "../Pages/Fundraising";
import Loading from "../Loading/Loading";
import useToken from "../../store/useToken";
import Campaign from "../Campaign/Campaigns";

const Pending = () => {
  const [title] = useState<string>("Pending Fundraising");
  useDocumentTitle(title);

  const { access_token } = useToken();

  // Get Campaign
  const { data: campaign, isLoading } = useQuery({
    queryKey: ["campaign"],
    queryFn: () =>
      axios
        .get<AllCampaigns>(`${baseUrl}fundraisers?status=pending`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => res.data.campaigns),
  });

  return (
    <>
      <div className="mt-10">
        {isLoading && <Loading />}
        <div>
          {campaign && campaign.length > 0 ? (
            <Campaign campaigns={campaign} status="pending" />
          ) : (
            <div className=" bg-white shadow p-6 rounded-xl">
              <p className="text-center">
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

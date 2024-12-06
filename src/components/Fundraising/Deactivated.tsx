import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useToken from "../../store/useToken";
import { useQuery } from "@tanstack/react-query";
import baseUrl from "../../services/request";
import axios from "axios";
import { AllCampaigns } from "../Pages/Fundraising";
import Campaign from "../Campaign/Campaigns";
import Loading from "../Loading/Loading";

const Deactivated = () => {
  const [title] = useState<string>("Deactivated Fundraising");
  useDocumentTitle(title);

  const { access_token } = useToken();

  // Get Campaign
  const { data: campaign, isLoading } = useQuery({
    queryKey: ["campaign"],
    queryFn: () =>
      axios
        .get<AllCampaigns>(`${baseUrl}fundraisers?status=deactivated`, {
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
            <Campaign campaigns={campaign} status="deactivated" />
          ) : (
            <div className=" bg-white shadow p-6 rounded-xl">
              <p className="text-center">
                There are no active deactivated campaigns at the moment. When
                available, they will be displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Deactivated;

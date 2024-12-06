import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Pending from "../Fundraising/Pending";
import Approved from "../Fundraising/Approved";
import Declined from "../Fundraising/Declined";

export interface Campaigns {
  fid: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  id_type: string;
  id_front: string;
  id_back: string;
  photo: string;
  bank_name: string;
  account_number: string;
  created_at: string;
  _created_at: string;

  withdrawal_approved: boolean;
  withdrawal_requested: boolean;
  phone_number_approved: boolean;

  id: string;
  for_who: string;
  campaign_title: string;
  main_image: string;
  target_amount: number;
  campaign_description: string;
  category: string;
  raised_amount_in_birr: number;
  raised_amount_in_usd: number;
  total_donations: number;
  qr_code: string;
  is_active: boolean;

  approved_at: string;

  total_raised_amount_in_birr: number;
  raised_birr: number;
  raised_usd: number;

  is_approved: boolean;
}

export interface AllCampaigns {
  campaigns: Campaigns[];
  next_cursor: string;
  prev_cursor: string;
  has_next: boolean;
  has_prev: boolean;
}

const Fundraising = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="relative lg:grid md:grid lg:grid-cols-15 md:grid-cols-12 lg:bg-[#F8F8F8] md:bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="lg:col-span-3 md:col-span-3 lg:block md:block hidden w-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-12 md:col-span-9 lg:px-8 lg:py-9 p-3">
        <Navbar />

        <div className="mt-3">
          {/* Pending */}
          {path === "/pending" && <Pending />}
          {/* Approved */}
          {path === "/approved" && <Approved />}
          {/* Declined */}
          {path === "/declined" && <Declined />}
        </div>
      </div>
    </div>
  );
};

export default Fundraising;

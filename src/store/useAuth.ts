import { create } from "zustand";

export interface UserState {
  fid: string | null;
  first_name: string | null;
  last_name: string | null;
  phone_number: string | null;
  account_number: string | null;
  photo: string | null;
  bank_name: string | null;
  goverment_issue_id: string | null;
  phone_number_approved: boolean;
  withdrawal_approved: boolean;
  withdrawal_requested: boolean;
  is_approved: boolean;
  is_active: boolean;

  login: (
    fid: string | null,
    first_name: string | null,
    last_name: string | null,
    phone_number: string | null,
    account_number: string | null,
    photo: string | null,
    bank_name: string | null,
    goverment_issue_id: string | null,
    phone_number_approved: boolean,
    withdrawal_approved: boolean,
    withdrawal_requested: boolean,
    is_approved: boolean,
    is_active: boolean
  ) => void;

  logout: () => void;
}

const useAuth = create<UserState>((set) => ({
  fid: null,
  first_name: null,
  last_name: null,
  phone_number: null,
  account_number: null,
  photo: null,
  bank_name: null,
  goverment_issue_id: null,
  phone_number_approved: false,
  withdrawal_approved: false,
  withdrawal_requested: false,
  is_approved: false,
  is_active: false,

  login: (
    fid,
    first_name,
    last_name,
    phone_number,
    account_number,
    photo,
    bank_name,
    goverment_issue_id,
    phone_number_approved,
    withdrawal_approved,
    withdrawal_requested,
    is_approved,
    is_active
  ) =>
    set({
      fid,
      first_name,
      last_name,
      phone_number,
      account_number,
      photo,
      bank_name,
      goverment_issue_id,
      phone_number_approved,
      withdrawal_approved,
      withdrawal_requested,
      is_approved,
      is_active,
    }),

  logout: () => {
    set({
      fid: null,
      first_name: null,
      last_name: null,
      phone_number: null,
      account_number: null,
      photo: null,
      bank_name: null,
      goverment_issue_id: null,
      phone_number_approved: false,
      withdrawal_approved: false,
      withdrawal_requested: false,
      is_approved: false,
      is_active: false,
    });
    localStorage.removeItem("token");
  },
}));

export default useAuth;

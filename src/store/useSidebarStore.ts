import { create } from "zustand";

interface State {
  fundraising: boolean;

  setFundraising: (fundraising: boolean | false) => void;
}

const useSidebar = create<State>((set) => ({
  fundraising: false,

  setFundraising: (fundraising) =>
    set({
      fundraising,
    }),
}));

export default useSidebar;

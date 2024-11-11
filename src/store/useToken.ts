import { create } from "zustand";

interface Token {
  access_token: string | null;
  setAccessToken: (token: string | null) => void;
}

const useToken = create<Token>((set) => ({
  access_token: localStorage.getItem("token"),
  setAccessToken: (token) => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");

    set({ access_token: token });
  },
}));

export default useToken;

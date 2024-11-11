import { create } from "zustand";

interface Token {
  access_token: string | null;
  setAccessToken: (token: string | null) => void;
}

const useToken = create<Token>((set) => ({
  access_token: localStorage.getItem("auth_token"),
  setAccessToken: (token) => {
    token
      ? localStorage.setItem("auth_token", token)
      : localStorage.removeItem("auth_token");

    set({ access_token: token });
  },
}));

export default useToken;

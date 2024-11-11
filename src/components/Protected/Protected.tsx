import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../services/request";
import useAuth from "../../store/useAuth";
import { UserState } from "../../store/useAuth";
import useToken from "../../store/useToken";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { access_token } = useToken();

  useEffect(() => {
    if (access_token) {
      axios
        .get<UserState>(`${baseUrl}auth/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => {
          login(
            response.data.fid,
            response.data.first_name,
            response.data.last_name,
            response.data.phone_number,
            response.data.account_number,
            response.data.photo,
            response.data.bank_name,
            response.data.goverment_issue_id,
            response.data.phone_number_approved,
            response.data.withdrawal_approved,
            response.data.withdrawal_requested,
            response.data.is_approved,
            response.data.is_active
          );
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem("auth_token");
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [access_token, navigate, login]);

  return <>{children}</>;
};

export default Protected;

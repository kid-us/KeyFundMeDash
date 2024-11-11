import axios from "axios";
import { useEffect, useState } from "react";
import useToken from "../../store/useToken";
import baseUrl from "../../services/request";

const Fundraiser = () => {
  const [fundraiser, setFundraiser] = useState();
  const { access_token } = useToken();

  useEffect(() => {
    axios
      .get(`${baseUrl}fundraisers`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>Fundraiser</div>;
};

export default Fundraiser;

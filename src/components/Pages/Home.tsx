import { useState } from "react";
import Fundraiser from "../Home/Fundraiser";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const [title] = useState("KeyFundMe | Dashboard");
  useDocumentTitle(title);

  return (
    <div>
      <p>Welcome</p>
      <Fundraiser />
    </div>
  );
};

export default Home;

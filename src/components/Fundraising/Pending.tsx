import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Pending = () => {
  const [title] = useState<string>("Pending Fundraising");
  useDocumentTitle(title);

  return <div>Pending</div>;
};

export default Pending;

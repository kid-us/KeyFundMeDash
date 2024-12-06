import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Declined = () => {
  const [title] = useState<string>("Declined Fundraising");
  useDocumentTitle(title);

  return <div>Declined</div>;
};

export default Declined;

import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Approved = () => {
  const [title] = useState<string>("Approved Fundraising");
  useDocumentTitle(title);
  
  return (
    <div>Approved</div>
  )
}

export default Approved
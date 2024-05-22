import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RefreshData = () => {
  const router = useRouter();
  const handleClick = async () => {
    const confirmed = confirm("Are you Sure!");
    if (confirmed) {
      await axios.post(
        "https://red-lakshy18s-projects.vercel.app/refreshAllData"
      );
      router.refresh();
    }
  };
  return (
    <>
      <button onClick={handleClick}>Refresh & add demo data</button>
    </>
  );
};

export default RefreshData;

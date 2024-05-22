import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteAllData = () => {
  const router = useRouter();
  const handleClick = async () => {
    const confirmed = confirm("Are you Sure!");
    if (confirmed) {
      await axios.delete(
        "https://red-lakshy18s-projects.vercel.app/deleteAlldata"
      );
      router.refresh();
    }
  };
  return (
    <>
      <button onClick={handleClick}>Delete All Data</button>
    </>
  );
};

export default DeleteAllData;

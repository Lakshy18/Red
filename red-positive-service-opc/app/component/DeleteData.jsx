"use client";
import axios from "axios";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation"; 

const DeleteData = ({ id }) => {
  const router = useRouter();
  const handleClick = async () => {
    const confirmed = confirm("Are you Sure!");
    if (confirmed) {
      await axios.delete(`http://localhost:4000/delTableData/${id}`);
      router.refresh();
    }
  };
  return (
    <>
      <button onClick={handleClick}>
        <FiTrash2 className="text-red-600" size={20} />
      </button>
    </>
  );
};

export default DeleteData;

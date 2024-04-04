"use client";
import React, { useState } from "react";
import Forms from "./Forms";

const AddButton = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="mb-5">
      <button
        onClick={() => setModal(true)}
        className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 w-full rounded"
      >
        Add New +
      </button>
      <Forms isVisible={modal} isClose={() => setModal(false)} />
    </div>
  );
};

export default AddButton;

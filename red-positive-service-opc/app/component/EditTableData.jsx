import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import UpdateForm from "./UpdateForms";

const EditTableData = ({ id }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}>
        <FiEdit className="text-blue-800" size={20} />
      </button>
      <UpdateForm isVisible={modal} isClose={() => setModal(false)} id={id}/>
    </>
  );
};

export default EditTableData;

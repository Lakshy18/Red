"use client";
import axios from "axios";
import React, { useState } from "react";
import { GoXCircleFill } from "react-icons/go";
import { useRouter } from "next/navigation";

const Forms = ({ isVisible, isClose }) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");
  const router = useRouter();
  // const [postData, setPostdata] = useState();

  if (!isVisible) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let currPostData = {
    //   name: name,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   hobbies: hobbies,
    // };
    // let jsonPostData = JSON.stringify(currPostData)
    // setPostdata(JSON.stringify(currPostData));
    await axios
      .post("http://localhost:4000/postData", {
        name: name,
        mobileNumber: mobileNumber,
        email: email,
        hobbies: hobbies,
      })
      .then((res) => {
        console.log(res);
        alert("data added");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
    setName("");
    setMobileNumber("");
    setEmail("");
    setHobbies("");
    isClose();
    router.refresh();
  };
  const handleClose = (e) => {
    e.target.id === "wrapper" && isClose();
  };

  return (
    <>
      <div
        id="wrapper"
        onClick={handleClose}
        className="fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="px-5 py-5 bg-white border rounded drop-shadow-2xl">
          <div className="flex justify-end">
            <button onClick={() => isClose()}>
              <GoXCircleFill size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Name
              </label>
              <input
                className="border rounded py-2 px-3 text-grey-darkest"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Phone Number
              </label>
              <input
                className="border rounded py-2 px-3 text-grey-darkest"
                type="text"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email
              </label>
              <input
                className="border rounded py-2 px-3 text-grey-darkest"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Hobbies
              </label>
              <input
                className="border rounded py-2 px-3 text-grey-darkest"
                type="text"
                onChange={(e) => setHobbies(e.target.value)}
                value={hobbies}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forms;

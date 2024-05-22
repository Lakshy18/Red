"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteData from "./DeleteData";
import EditTableData from "./EditTableData";
import SendItems from "./SendItems";
// import { useRouter } from "next/navigation";

const Tables = () => {
  const [tData, setTData] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);
  // const asyncFunction = async () => {
  //   const data = await axios.get("http://localhost:4000/tableData")
  //   setTData(data.data);
  // };
  // asyncFunction();
  useEffect(() => {
    //   // axios.get("http://localhost:4000/tableData").then((data) => {
    //   //   let nData = JSON.parse(data);
    //   //   setTData(nData);
    //   // });
    //   // console.log(tData);
    const asyncFunction = async () => {
      const data = await axios.get("https://red-lakshy18s-projects.vercel.app/tableData");
      setTData(data.data);
      return;
    };
    return () => {
      asyncFunction();
    };
  });
  // console.log(tData);
  const handelCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValues((pre) => [...pre, value]);
    } else {
      setCheckedValues((pre) => {
        return [...pre.filter((skills) => skills === value)];
      });
    }
  };
  

  return (
    <div>
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border m-2 p-2 ">
              <input type="checkbox" />
            </th>
            <th className="border m-2 p-2 ">ID</th>
            <th className="border m-2 p-2 ">Name</th>
            <th className="border m-2 p-2 ">Phone Number</th>
            <th className="border m-2 p-2 ">Emails</th>
            <th className="border m-2 p-2 ">Hobbies</th>
            <th className="border m-2 p-2 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((data, index) => {
            return (
              <tr key={`${data.name + index}`}>
                <td className="border m-2 p-2">
                  <input
                    type="checkbox"
                    value={`ID: ${index + 1}, Name: ${
                      data.name
                    }, Mobile Number: ${data.mobileNumber}, Email: ${
                      data.email
                    }, Hobbies: ${data.hobbies}`}
                    onChange={handelCheck}
                  />
                </td>
                <td className="border  m-2 p-2">{index + 1}</td>
                <td className="border m-2 p-2">{data.name}</td>
                <td className="border m-2 p-2">{data.mobileNumber}</td>
                <td className="border m-2 p-2">{data.email}</td>
                <td className="border m-2 p-2">{data.hobbies}</td>
                <td className="border m-2 p-2 ">
                  <div className="flex justify-evenly">
                    <EditTableData id={data._id} />
                    <DeleteData id={data._id} />
                  </div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td className="border m-2 p-2">
              <input type="checkbox" />
            </td>
            <td className="border  m-2 p-2">11</td>
            <td className="border m-2 p-2">kkkkkkkkkkkkkkkkkkkkkkkkkk</td>
            <td className="border m-2 p-2">1234566778</td>
            <td className="border m-2 p-2">aaa@bbb.com</td>
            <td className="border m-2 p-2">kkakakkakkaka</td>
            <td className="border m-2 p-2 ">
              <div className="flex justify-evenly">
                <button>
                  <FiEdit className="text-blue-800" size={20} />
                </button>
                <button>
                  <FiTrash2 className="text-red-600" size={20} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border m-2 p-2">
              <input type="checkbox" />
            </td>
            <td className="border m-2 p-2">11</td>
            <td className="border m-2 p-2">kkkk</td>
            <td className="border m-2 p-2">1234566778</td>
            <td className="border m-2 p-2">aaa@bbb.com</td>
            <td className="border m-2 p-2">kkakakkakkaka</td>
            <td className="border m-2 p-2 ">
              <div className="flex justify-evenly">
                <button>
                  <FiEdit className="text-blue-800" size={20} />
                </button>
                <button>
                  <FiTrash2 className="text-red-600" size={20} />
                </button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
      <SendItems value={checkedValues}/>
      
    </div>
  );
};

export default Tables;

import Tables from "@/app/component/Tables";
import AddButton from "./component/AddButton";

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className=" w-4/5">
          <AddButton />
          <Tables />
        </div>
      </div>
    </>
  );
};

export default page;

"use client";
import DeleteAllData from "../about/DeleteAllData";
import RefreshData from "../about/RefreshData";

const Navbar = () => {
  return (
     <div className="flex justify-between mb-2 pt-5 pb-5 bg-slate-800 text-slate-400"> 
      <div>logo</div>
      <RefreshData/>
      <DeleteAllData/>
      <div>About</div>
    </div>
  );
};

export default Navbar;

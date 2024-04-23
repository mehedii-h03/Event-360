import Sidebar from "@/pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

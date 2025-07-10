import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-1 p-4 my-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

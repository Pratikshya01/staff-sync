import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">StaffSync</h1>
      <nav className="flex gap-4">
        <Link
          to="/add"
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive("/add")
              ? "bg-white text-black"
              : "text-white hover:text-white hover:bg-gray-700"
          }`}
        >
          Add Employee
        </Link>
        <Link
          to="/list"
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive("/list")
              ? "bg-white text-black"
              : "text-white hover:text-white hover:bg-gray-700"
          }`}
        >
          Employee List
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

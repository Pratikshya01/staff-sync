import { useState, useEffect } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import type { ColDef } from "ag-grid-community";
import type { Employee } from "@/types/employee";
import { LocalStorageService } from "@/services/localStorage";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeList = () => {
  const [rowData, setRowData] = useState<Employee[]>([]);
  const [colDefs] = useState<ColDef<Employee>[]>([
    { field: "name", headerName: "Name", sortable: true, filter: true },
    { field: "email", headerName: "Email", sortable: true, filter: true },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      sortable: true,
      filter: true,
    },
    { field: "role", headerName: "Role", sortable: true, filter: true },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      sortable: true,
      filter: true,
    },
  ]);

  useEffect(() => {
    // Load employee data using LocalStorageService
    const employees = LocalStorageService.getAllEmployees();
    setRowData(employees);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="w-full h-[400px]">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          className="ag-theme-alpine w-full h-full"
        />
      </div>
    </div>
  );
};

export default EmployeeList;

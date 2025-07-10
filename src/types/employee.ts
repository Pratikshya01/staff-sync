export interface Employee {
  id?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  role: "Developer" | "Designer" | "Manager";
  joiningDate: string;
}

export type EmployeeFormData = Omit<Employee, "id">;

export type EmployeeRole = Employee["role"];

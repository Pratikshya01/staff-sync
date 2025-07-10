import type { Employee, EmployeeFormData } from "@/types/employee";

const EMPLOYEES_STORAGE_KEY = "staff-data";

export class LocalStorageService {
  private static getEmployeesFromStorage(): Employee[] {
    try {
      const stored = localStorage.getItem(EMPLOYEES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading employees from localStorage:", error);
      return [];
    }
  }

  private static saveEmployeesToStorage(employees: Employee[]): void {
    try {
      localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(employees));
    } catch (error) {
      console.error("Error saving employees to localStorage:", error);
    }
  }

  static getAllEmployees(): Employee[] {
    return this.getEmployeesFromStorage();
  }

  static addEmployee(employeeData: EmployeeFormData): Employee {
    const employees = this.getEmployeesFromStorage();
    const newEmployee: Employee = {
      ...employeeData,
      id: Date.now().toString(),
    };

    employees.push(newEmployee);
    this.saveEmployeesToStorage(employees);

    return newEmployee;
  }

  static clearAllEmployees(): void {
    try {
      localStorage.removeItem(EMPLOYEES_STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing employees from localStorage:", error);
    }
  }
}

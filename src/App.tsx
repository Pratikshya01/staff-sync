import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/" element={<Navigate to="/add" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

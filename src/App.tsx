import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import { Toaster } from "react-hot-toast";
import { SignInPage, SignUpPage } from "./pages/public";
import { AddEmployee, EmployeeList } from "./pages/protected";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={true} />
      <Routes>
        {/* Protected Routes - Require Authentication */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/" element={<Navigate to="/add" />} />
        </Route>

        {/* Public Routes - Redirect authenticated users */}
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

        {/* Catch all route - redirect to signin */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

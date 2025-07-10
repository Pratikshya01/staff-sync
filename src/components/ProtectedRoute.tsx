import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading while Clerk is initializing
  if (!isLoaded) return <LoadingSpinner />;

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) return <Navigate to="/signin" replace />;

  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;

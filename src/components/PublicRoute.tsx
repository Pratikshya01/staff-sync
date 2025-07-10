import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading while Clerk is initializing
  if (!isLoaded) return <LoadingSpinner />;

  // Redirect to dashboard if already authenticated
  if (isSignedIn) return <Navigate to="/" replace />;

  // Render children if not authenticated
  return <>{children}</>;
};

export default PublicRoute;

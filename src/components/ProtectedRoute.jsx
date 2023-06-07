import { Navigate } from "react-router-dom";

function ProtectedRoute({ token, redirectPath, children }) {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectedRoute;

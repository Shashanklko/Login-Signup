import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./ProtectedRoute.css";

// Protects routes — redirects to login if not authenticated
export const ProtectedRoute = ({ children }) => {
    const { isAuth, loading } = useAuth();

    // Show spinner while verifying token
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner" />
                <p>Verifying session...</p>
            </div>
        );
    }

    // Redirect unauthenticated users to login
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />;
};
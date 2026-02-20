import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

// Auth context — provides user state and auth functions to the entire app
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    // On mount, verify stored token by calling GET /auth/me
    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await api.get("/auth/me");
                setUser(response.data.user);
                setIsAuth(true);
            } catch (error) {
                // Token invalid or expired — clear stored data
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, []);

    // Login — sends credentials, stores token, updates state
    const login = async (email, password) => {
        try {
            const response = await api.post("/auth/login", { email, password });
            const { token, user: userData } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            setUser(userData);
            setIsAuth(true);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || "Login failed" };
        }
    };

    // Logout — clears token and resets state
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuth, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
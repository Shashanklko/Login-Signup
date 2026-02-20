import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authprotected";
import { ProtectedRoute } from "./Component/protected";
import Login from "./Component/login";
import Signup from "./Component/signup";
import './App.css';

// Dashboard — shown after successful login
const Home = () => {
  const { user, logout } = useAuth();

  // Get first letter of username for avatar
  const initial = user?.username?.charAt(0).toUpperCase() || "U";

  return (
    <>
      <div className="auth-bg" />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-avatar">{initial}</div>
          <h1>Hello, {user?.username || "User"}!</h1>
          <p className="welcome-text">Welcome to your dashboard</p>
          <p className="user-email">{user?.email}</p>
          <button onClick={logout} className="logout-btn">Sign Out</button>
        </div>
      </div>
    </>
  );
};

// App root — sets up routing and auth provider
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg">
        🧩 Planify
      </Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <span className="text-sm">Hi, {user.email}</span>
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-50 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

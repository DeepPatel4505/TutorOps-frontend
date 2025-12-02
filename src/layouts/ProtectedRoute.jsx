import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "@/components/Loading";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loadingUser } = useSelector((s) => s.auth);

    if (loadingUser) return <Loading />;

    if (!isAuthenticated) return <Navigate to="/login" />;

    return children;
}

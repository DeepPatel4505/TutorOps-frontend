import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { logoutUser } from '@/features/auth/authThunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const DashboardPage = () => {
    const { isAuthenticated, user, loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        const result = dispatch(logoutUser());

        if (logoutUser.fulfilled === result.type) {
            navigate('/login');
        }
    };

    const toastCheck = () => {
        toast.custom((t) => (
            <div className="cursor-pointer select-none backdrop-blur-xl bg-background/70 border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="text-primary text-2xl animate-pulse">✨</div>
                <div>
                    <p className="font-semibold text-foreground">Action Completed</p>
                    <p className="text-sm text-muted-foreground">Everything looks good!</p>
                </div>
            </div>
        ));

        if (error) {
            console.error('Error:', error);
        }
    };
    if (!isAuthenticated) {
        navigate('/login');
        // return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-background p-8">
            <h1 className="font text-primary text-3xl font-bold mb-4">Dashboard Page</h1>
            {user && (
                <div className="bg-accent text-secondary-foreground p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2>Welcome, {user.username}!</h2>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
            )}
            <Button
                className="mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl border-none"
                variant="default"
                onClick={handleLogout}
            >
                Log Out
            </Button>
            <Button
                className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl border-none"
                variant="default"
                onClick={toastCheck}
            >
                Show Toast
            </Button>
        </div>
    );
};

export default DashboardPage;

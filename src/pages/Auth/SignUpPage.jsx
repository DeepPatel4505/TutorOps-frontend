import { registerUser } from '@/features/auth/authThunk';
import SignUp from '@components/Auth/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated && user) {
            console.log('Sign up successful, redirecting…', user);
            // Navigate to dashboard or another page
            navigate('/dashboard');
        }
    }, [isAuthenticated, user]);

    const handleSignUp = () => {
        // TODO: Implement sign up logic
        dispatch(
            registerUser({
                email: 'teacher1@example.com',
                password: 'Pass@123',
                username: 'teacher1',
                role: 'TEACHER',
            })
        );
    };
    const handleGoogleSignIn = () => {
        // TODO: Implement Google sign in logic
    };

    return (
        <>
            <SignUp handleSignUp={handleSignUp} handleGoogleSignIn={handleGoogleSignIn} />
        </>
    );
};

export default SignUpPage;

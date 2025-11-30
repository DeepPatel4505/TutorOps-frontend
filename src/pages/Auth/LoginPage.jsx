import Login from '@components/Auth/Login';

const LoginPage = () => {
    const handleLogin = () => {
        // Implement login logic here
    }
    const handleGoogleSignIn = () => {
        // Implement Google sign-in logic here
    }    

    return (
        <>
            <Login 
                handleLogin={handleLogin} 
                handleGoogleSignIn={handleGoogleSignIn} 
            />
        </>
    );
};

export default LoginPage;

import SignUp from "@components/Auth/SignUp";

const SignUpPage = () => {
    const handleSignUp = () => {
        // TODO: Implement sign up logic
    };
    const handleGoogleSignIn = () => {
        // TODO: Implement Google sign in logic
    };

    return (
        <>
            <SignUp
                handleSignUp={handleSignUp}
                handleGoogleSignIn={handleGoogleSignIn}
            />
        </>
    );
};

export default SignUpPage;

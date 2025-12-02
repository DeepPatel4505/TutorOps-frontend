import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { GoogleIcon } from '@components/icons/GoogleIcon';
import { useShowPassword } from '@hooks/useShowPassword';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@components/ThemeToggle';

const Login = ({ handleLogin, handleGoogleSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { showPassword, toggleShowPassword } = useShowPassword();

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <div className="min-h-dvh bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground relative overflow-hidden">
            {/* Background accents to match Homepage */}
            <div className="-z-50 absolute inset-0 animated-gradient opacity-20"></div>
            <div className="z-0 absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="z-0 absolute -bottom-10 -right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            {/* Header with logo left and theme toggle right */}
            <div className="fixed top-4 left-4 z-50 flex items-center gap-2 select-none">
                <div className="text-xl font-bold text-primary">
                    <Link to="/">TutorOps</Link>
                </div>
            </div>

            {/* Theme toggle */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* Centered login card */}
            <div className="flex min-h-dvh items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="bg-secondary/40 rounded-2xl p-6 sm:p-8 border border-border/100 shadow-2xl shadow-foreground/5">
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold tracking-tight gradient-text h-10 flex items-center justify-center">
                                {/* Here signin g is trimmed from bottom i need to fix it */}
                                Sign in
                            </h1>
                            <p className="text-sm text-muted-foreground mt-2">
                                Welcome back. Please enter your details.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@example.com"
                                    className="w-full rounded-[calc(var(--radius)-2px)] bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/70 border border-input focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] transition-shadow"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="w-full rounded-[calc(var(--radius)-2px)] bg-background pl-3 pr-10 py-2 text-sm outline-none placeholder:text-muted-foreground/70 border border-input focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] transition-shadow"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleShowPassword}
                                        aria-label={
                                            showPassword ? 'Hide password' : 'Show password'
                                        }
                                        className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <Button
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                                onClick={onSubmit}
                            >
                                Sign in
                            </Button>

                            <div className="relative text-center">
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div className="w-full border-t border-border/50" />
                                </div>
                                <div className="relative inline-block bg-background px-3 text-xs text-muted-foreground">
                                    Or continue with
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="w-full inline-flex items-center justify-center gap-2 border border-border rounded-[calc(var(--radius)-2px)] px-4 py-2 text-sm hover:border-primary/50 hover:bg-primary/5 transition-colors"
                            >
                                <GoogleIcon />
                                <span>Sign in with Google</span>
                            </button>

                            <div className="text-center text-sm text-muted-foreground">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    className="text-primary hover:underline underline-offset-4"
                                    onClick={() => navigate('/register')}
                                >
                                    Create one
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-muted-foreground">
                        By continuing, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

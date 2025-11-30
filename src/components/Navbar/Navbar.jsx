import { ThemeToggle } from "../ThemeToggle";

const Navbar = ({ scrollToFeatures, scrollToPhases }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
                        TutorOps
                    </div>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={scrollToFeatures}
                            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                        >
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button
                            onClick={scrollToPhases}
                            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                        >
                            Roadmap
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

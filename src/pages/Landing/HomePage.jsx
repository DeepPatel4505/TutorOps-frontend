import React, { useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import { Button } from '@components/ui/button';

// Enhanced Animated Section Component with Parallax
function AnimatedSection({ children, className = "", delay = 0, parallax = false, speed = 0.5 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [offsetY, setOffsetY] = React.useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (parallax) {
            const handleScroll = () => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -speed;
                    setOffsetY(rate);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [parallax, speed]);

    return (
        <div
            ref={ref}
            className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''} ${className}`}
            style={{ 
                transitionDelay: `${delay}ms`,
                transform: parallax ? `translateY(${offsetY}px)` : undefined
            }}
        >
            {children}
        </div>
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description, delay = 0 }) {
    return (
        <AnimatedSection delay={delay}>
            <div className="group glass rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 float">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}

// Enhanced Phase Timeline Component with Visual Elements
function PhaseTimeline({ phase, title, description, features, delay = 0, isActive = false }) {
    return (
        <AnimatedSection delay={delay}>
            <div className="relative group">
                <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0 relative">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                            isActive 
                                ? 'bg-primary/20 border-primary shadow-lg shadow-primary/25' 
                                : 'bg-primary/10 border-primary/20 group-hover:border-primary/40'
                        }`}>
                            <span className="text-primary font-bold text-xl">{phase}</span>
                        </div>
                        {/* Connecting Line */}
                        {phase !== "3" && (
                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

// Tech Badge Component
function TechBadge({ name, delay = 0 }) {
    return (
        <AnimatedSection delay={delay}>
            <div className="bg-secondary/50 border border-border/50 rounded-full px-6 py-3 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
        </AnimatedSection>
    );
}

export default function Homepage() {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = React.useState(0);
    const [showScrollTop, setShowScrollTop] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Simulate loading completion
        const timer = setTimeout(() => setIsLoaded(true), 100);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPhases = () => {
        document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading TutorOps...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <Navbar scrollToFeatures={scrollToFeatures} scrollToPhases={scrollToPhases} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 animated-gradient opacity-30"></div>
                <AnimatedSection parallax={true} speed={0.3}>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float"></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.2}>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
                </AnimatedSection>
                
                {/* Floating Particles */}
                <AnimatedSection parallax={true} speed={0.4}>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full float" style={{ animationDelay: '1s' }}></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.6}>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full float" style={{ animationDelay: '3s' }}></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.5}>
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full float" style={{ animationDelay: '2.5s' }}></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.3}>
                    <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full float" style={{ animationDelay: '4s' }}></div>
                </AnimatedSection>
                
                <div className="relative max-w-7xl mx-auto z-10">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 gradient-text">
                                AI-Powered Learning Platform
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                                Empower teachers with flexible assignment creation and grading tools. 
                                Give students a personalized, interactive practice experience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-primary text-primary-foreground px-6 py-6 rounded-xl text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 pulse-slow"
                                onClick={()=>{navigate('/login')}}
                                >
                                    Get Started
                                </Button>
                                <Button
                                    className="border border-border px-6 py-6 rounded-xl text-lg font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                                    onClick={scrollToFeatures}
                                    variant="outline"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="min-h-screen flex items-center px-6 bg-secondary/20 relative overflow-hidden">
                {/* Parallax Background Elements */}
                <AnimatedSection parallax={true} speed={0.1}>
                    <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.15}>
                    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-2xl"></div>
                </AnimatedSection>
                
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose TutorOps?</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                A comprehensive platform designed to revolutionize math education with AI assistance
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="👨‍🏫"
                            title="Teacher Control"
                            description="Full authority over assignments, grading, and content. AI assists but never overrides your decisions."
                            delay={100}
                        />
                        <FeatureCard
                            icon="🤖"
                            title="AI Co-pilot"
                            description="AI-generated problems, explanations, and grading suggestions to enhance your teaching workflow."
                            delay={200}
                        />
                        <FeatureCard
                            icon="📊"
                            title="Smart Analytics"
                            description="Comprehensive reports and insights to track student progress and identify learning gaps."
                            delay={300}
                        />
                        <FeatureCard
                            icon="🎯"
                            title="Personalized Learning"
                            description="Adaptive difficulty and personalized practice sets tailored to each student's needs."
                            delay={400}
                        />
                        <FeatureCard
                            icon="⚡"
                            title="Instant Feedback"
                            description="Real-time grading and immediate feedback to keep students engaged and motivated."
                            delay={500}
                        />
                        <FeatureCard
                            icon="🔧"
                            title="Flexible Platform"
                            description="Scalable, modular architecture that grows with your educational institution's needs."
                            delay={600}
                        />
                    </div>
                </div>
            </section>

            {/* Project Phases Section */}
            <section id="phases" className="min-h-screen flex items-center px-6 relative overflow-hidden">
                {/* Background Visual Elements */}
                <AnimatedSection parallax={true} speed={0.2}>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.3}>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
                </AnimatedSection>
                
                {/* Floating Icons */}
                <AnimatedSection parallax={true} speed={0.4}>
                    <div className="absolute top-1/3 right-1/6 text-6xl opacity-10">🚀</div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.5}>
                    <div className="absolute bottom-1/3 left-1/6 text-5xl opacity-10">⚡</div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.3}>
                    <div className="absolute top-2/3 right-1/3 text-4xl opacity-10">🎯</div>
                </AnimatedSection>
                
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Content */}
                        <div>
                            <AnimatedSection>
                                <div className="mb-12">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Development Roadmap</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Our phased approach ensures a stable foundation while building toward advanced AI features
                                    </p>
                                </div>
                            </AnimatedSection>

                            <div className="space-y-16">
                                <PhaseTimeline
                                    phase="1"
                                    title="Teacher-Driven MVP"
                                    description="Foundation phase with core functionality and teacher authority"
                                    features={[
                                        "Classes, assignments, and problem templates",
                                        "Parameter randomization for varied practice",
                                        "Auto-grading with teacher override capabilities",
                                        "Comprehensive reports and analytics"
                                    ]}
                                    delay={100}
                                    isActive={true}
                                />
                                <PhaseTimeline
                                    phase="2"
                                    title="AI-Assisted Features"
                                    description="AI integration while maintaining teacher control"
                                    features={[
                                        "AI-generated practice problems (teacher review required)",
                                        "Step-by-step explanations and hints",
                                        "AI-assisted grading suggestions",
                                        "Personalized practice recommendations"
                                    ]}
                                    delay={200}
                                />
                                <PhaseTimeline
                                    phase="3"
                                    title="Full Ecosystem Expansion"
                                    description="Complete learning ecosystem with advanced features"
                                    features={[
                                        "Gamified learning with badges and leaderboards",
                                        "Adaptive testing with difficulty scaling",
                                        "Collaborative problem solving",
                                        "Advanced analytics and shared problem banks"
                                    ]}
                                    delay={300}
                                />
                            </div>
                        </div>

                        {/* Right Side - Visual Timeline */}
                        <div className="relative">
                            <AnimatedSection delay={150}>
                                <div className="relative">
                                    {/* Central Timeline Line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full"></div>
                                    
                                    {/* Timeline Nodes */}
                                    <div className="space-y-32">
                                        <AnimatedSection delay={200} parallax={true} speed={0.1}>
                                            <div className="relative flex items-center">
                                                <div className="w-16 h-16 bg-primary/20 border-4 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                                                    <span className="text-2xl">📚</span>
                                                </div>
                                                <div className="ml-8 p-6 glass rounded-2xl">
                                                    <h4 className="text-lg font-semibold text-primary mb-2">Foundation</h4>
                                                    <p className="text-sm text-muted-foreground">Core platform with teacher control</p>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                        
                                        <AnimatedSection delay={300} parallax={true} speed={0.15}>
                                            <div className="relative flex items-center">
                                                <div className="w-16 h-16 bg-accent/20 border-4 border-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
                                                    <span className="text-2xl">🤖</span>
                                                </div>
                                                <div className="ml-8 p-6 glass rounded-2xl">
                                                    <h4 className="text-lg font-semibold text-accent mb-2">AI Integration</h4>
                                                    <p className="text-sm text-muted-foreground">Smart features with human oversight</p>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                        
                                        <AnimatedSection delay={400} parallax={true} speed={0.2}>
                                            <div className="relative flex items-center">
                                                <div className="w-16 h-16 bg-primary/20 border-4 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25">
                                                    <span className="text-2xl">🌟</span>
                                                </div>
                                                <div className="ml-8 p-6 glass rounded-2xl">
                                                    <h4 className="text-lg font-semibold text-primary mb-2">Ecosystem</h4>
                                                    <p className="text-sm text-muted-foreground">Complete learning environment</p>
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="min-h-screen flex items-center px-6 bg-secondary/20 relative overflow-hidden">
                {/* Parallax Background Elements */}
                <AnimatedSection parallax={true} speed={0.1}>
                    <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.2}>
                    <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                </AnimatedSection>
                
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built with Modern Technology</h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Leveraging cutting-edge tools for performance, scalability, and developer experience
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        <TechBadge name="React" delay={100} />
                        <TechBadge name="Vite" delay={150} />
                        <TechBadge name="Node.js" delay={200} />
                        <TechBadge name="Express" delay={250} />
                        <TechBadge name="Prisma" delay={300} />
                        <TechBadge name="PostgreSQL" delay={350} />
                        <TechBadge name="Tailwind CSS" delay={400} />
                        <TechBadge name="ES6+" delay={450} />
                        <TechBadge name="Babel" delay={500} />
                        <TechBadge name="Nodemon" delay={550} />
                        <TechBadge name="ESLint" delay={600} />
                        <TechBadge name="Prettier" delay={650} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 animated-gradient opacity-20"></div>
                <AnimatedSection parallax={true} speed={0.2}>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float"></div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.3}>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
                </AnimatedSection>
                
                {/* Floating Elements */}
                <AnimatedSection parallax={true} speed={0.4}>
                    <div className="absolute top-1/3 right-1/3 text-8xl opacity-5">🎓</div>
                </AnimatedSection>
                <AnimatedSection parallax={true} speed={0.5}>
                    <div className="absolute bottom-1/3 left-1/3 text-6xl opacity-5">📚</div>
                </AnimatedSection>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Ready to Transform Math Education?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join the future of interactive learning. Start with our MVP and grow with our AI-powered features.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 pulse-slow">
                                Start Free Trial
                            </button>
                            <button className="border border-border px-10 py-5 rounded-xl text-lg font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105">
                                View Documentation
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-border/50 bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-2xl font-bold text-primary mb-4">TutorOps</div>
                    <p className="text-muted-foreground mb-6">
                        AI-Powered Learning Platform for Modern Education
                    </p>
                    <div className="text-sm text-muted-foreground">
                        © 2024 TutorOps. MIT License – Free for personal and educational use.
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}

            {/* Scroll Indicator */}
            <div className="fixed top-0 left-0 w-full h-1 bg-secondary/20 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                    style={{ 
                        width: `${Math.min(scrollProgress * 100, 100)}%` 
                    }}
                ></div>
            </div>
        </div>
    );
}

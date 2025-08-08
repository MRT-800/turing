const Footer = () => {
    return (
        <footer className="bg-background/50 backdrop-blur-sm border-t border-border/40 py-6 mt-auto">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Turing and Research Development. All rights reserved.
                </p>
                <div className="text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 animate-in fade-in duration-700">
        <h1 className="text-7xl md:text-8xl font-bold text-primary glow-text">404</h1>
        <p className="text-xl text-muted-foreground">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Path:</span> <code>{location.pathname}</code>
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group smooth-transition mt-4"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

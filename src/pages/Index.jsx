import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 animate-in fade-in duration-700">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground glow-text">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          This website showcases my experience, skills, and creative journey as a designer and developer.
        </p>

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group smooth-transition"
          >
            <Link to="/home" className="flex items-center gap-2">
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

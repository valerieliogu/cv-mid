import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary glow-border">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
              <span className="text-6xl font-bold text-primary">VL</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground glow-text">
            Valerie Liogu
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium">
            Graphic Designer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating stunning visual experiences through innovative design and creative storytelling
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border smooth-transition group"
          >
            <a href="#" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition group"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">3+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Projects Done</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

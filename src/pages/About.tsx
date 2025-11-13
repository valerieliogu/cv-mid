import { profileData } from "@/data/mockData";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground glow-text">
              About Me
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              {profileData.title}
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              {profileData.about}
            </p>

            {/* Contact Info */}
            <div className="pt-6 space-y-4 border-t border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{profileData.email}</span>
                </div>
                
                <div className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{profileData.phone}</span>
                </div>
                
                <div className="flex items-center gap-3 text-foreground md:col-span-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values or Skills Highlight */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-2 hover:glow-border smooth-transition">
              <h3 className="text-xl font-semibold text-primary">Creative</h3>
              <p className="text-muted-foreground">
                Thinking outside the box to deliver unique design solutions
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 space-y-2 hover:glow-border smooth-transition">
              <h3 className="text-xl font-semibold text-primary">Professional</h3>
              <p className="text-muted-foreground">
                Delivering high-quality work within deadlines
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 space-y-2 hover:glow-border smooth-transition">
              <h3 className="text-xl font-semibold text-primary">Collaborative</h3>
              <p className="text-muted-foreground">
                Working seamlessly with teams and clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

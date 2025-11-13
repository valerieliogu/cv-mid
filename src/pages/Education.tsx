import { educationData } from "@/data/mockData";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground glow-text">
              Education
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-card border border-border rounded-2xl p-8 hover:glow-border smooth-transition"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-2xl font-semibold text-primary">
                        {edu.school}
                      </h3>
                      <span className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                        {edu.year}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium text-foreground">
                      {edu.degree}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

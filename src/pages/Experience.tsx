import { experienceData } from "@/data/mockData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground glow-text">
              Work Experience
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className="md:ml-16 bg-card border border-border rounded-2xl p-8 hover:glow-border smooth-transition">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-2xl font-semibold text-primary">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-medium text-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {exp.year}
                        </span>
                      </div>
                      
                      <p className="text-lg font-medium text-foreground">
                        {exp.company}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
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

export default Experience;

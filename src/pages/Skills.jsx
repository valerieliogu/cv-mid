import { skillsData } from "@/data/mockData";

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-in fade-in duration-700">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground glow-text">
              Skills & Expertise
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical and creative skills developed through years of experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div
                key={skill.id}
                className="bg-card border border-border rounded-xl p-6 hover:glow-border smooth-transition"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full smooth-transition"
                      style={{
                        width: `${skill.percentage}%`,
                        animation: `slideIn 1s ease-out ${index * 100}ms forwards`
                      }}
                    ></div>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-sm text-muted-foreground">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;

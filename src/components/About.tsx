import {
  Zap,          // Represents energy, efficiency
  BrainCircuit, // Represents AI, intelligence
  Target,       // Represents mission, focus
  BookOpen,     // Represents learning
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me 🧑‍💻</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* --- NARRATIVE COLUMN --- */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-8 h-full">
              {/* --- IMPROVED: AI-centric narrative --- */}
              <p className="text-lg mb-4">
                Hello! I’m Petro Joseph Gati, a senior full-stack engineer specializing in building intelligent, automated systems. I bridge the gap between robust software architecture and modern AI to turn complex challenges into highly efficient solutions.
              </p>
              <p className="text-lg mb-4">
                My approach is twofold: First, I build a rock-solid foundation with clean, scalable, and resilient code. Then, I leverage <b>AI and automation</b>  to make those systems smarter. My goal is to create applications that not only function flawlessly but also actively reduce manual effort, streamline processes, and unlock data-driven insights.
              </p>
              <p className="text-lg mb-4">
                I am deeply motivated to apply these skills to projects that create tangible value. The potential for AI-driven automation to boost productivity and drive economic progress is immense, and I am passionate about building technology that empowers businesses and communities in this way.
              </p>
              <p className="text-lg">
                When I'm not architecting systems, I'm exploring the frontiers of technology and philosophy, practicing meditation, and staying active to keep my mind sharp and my perspective clear.
              </p>
            </div>
          </div>

          {/* --- PRINCIPLES & STRENGTHS COLUMN --- */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Guiding Principles</h3>
              <div className="space-y-6">
                {/* --- IMPROVED: Principles now reflect the AI focus --- */}
                <InfoItem
                  icon={<Zap size={20} />}
                  title="Engineering Philosophy"
                  text="Build it right, then make it smart. Combine scalable architecture with intelligent automation."
                />
                <InfoItem
                  icon={<BrainCircuit size={20} />}
                  title="Core Strengths"
                  text="Process Automation, AI Integration, System Architecture, and End-to-End Development."
                />
                <InfoItem
                  icon={<Target size={20} />}
                  title="Professional Mission"
                  text="To build efficient and impactful technology that drives progress and economic empowerment."
                />
                <InfoItem
                  icon={<BookOpen size={20} />}
                  title="Continuous Growth"
                  text="Exploring the frontiers of AI, new development paradigms, and personal development."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-primary">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-foreground/70">{text}</p>
      </div>
    </div>
  );
}
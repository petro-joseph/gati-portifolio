import {
  Code,
  Database,
  Server,
  Globe,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  Waves,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me 🧑‍💻</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-8 h-full">
              <p className="text-lg mb-4">
                Hi, I’m Petro Joseph Gati — a Senior Full Stack Engineer from Tanzania with 3+ years of building clean, scalable apps using React, NestJS, TypeScript, python and Laravel.
              </p>
              <p className="text-lg mb-4">
                I specialize in API development, microservices, and DevOps. I'm also passionate about data analysis and automation,  anything that makes life easier and decisions smarter.
              </p>
              <p className="text-lg mb-4">
                When I’m not coding, you’ll catch me reading Marcus Aurelius, meditating, hitting the gym, or swimming at sunset.   to stay  grounded and focused.
              </p>
              <p className="text-lg mb-4">
                I'm especially driven to work on projects that make a difference in Africa — socially or economically. Whether it’s shipping robust solutions or contributing to open source, I love building things that matter.
              </p>
              <p className="text-lg mt-4">
                Let’s build something meaningful together! 🚀
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">More About Me</h3>

              <div className="space-y-6">
                <InfoItem icon={<Server />} title="Tech Stack" text="React, NestJS, Node.js, TypeScript, Laravel, FastAPI" />
                <InfoItem icon={<Database />} title="Databases" text="PostgreSQL, MongoDB, Oracle" />
                <InfoItem icon={<Code />} title="DevOps & AI" text="Docker, Kubernetes, AWS, CI/CD, RAG, LangChain, Crew AI, n8n" />
                <InfoItem icon={<BookOpen />} title="Current Interests" text="Stoicism, meditation, learning French 🇫🇷" />
                <InfoItem icon={<Waves />} title="Active Life" text="Swimming, exercise, mental basket ball" />

                <div>
                  <h4 className="font-medium">Fun Fact</h4>
                  <p className="text-sm text-foreground/70">
                    I’m a total bookworm — from Stoic philosophy and self-help to tech docs and business books. Curiosity is my superpower!
                  </p>
                </div>
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

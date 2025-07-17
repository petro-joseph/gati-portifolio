import { Award, Calendar, ExternalLink } from "lucide-react";

// --- UPDATED array with new AI certs prioritized at the top ---
const certifications = [
  {
    // --- NEW ---
    name: "Multi AI Agent Systems with crewAI",
    issuer: "DeepLearning.AI",
    // NOTE: Please update with the correct date
    date: "Mar 2024",
    // NOTE: Link can be added here once available
    link: null,
    description:
      "Learned to build sophisticated, multi-agent AI systems using the crewAI framework. Focused on creating autonomous agents that collaborate to solve complex tasks."
  },
  {
    // --- NEW ---
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    // NOTE: Please update with the correct date
    date: "Mar 2025",
    link: "https://learn.deeplearning.ai/accomplishments/a15d6ee8-375e-41de-bc3a-709c9bb53c21?usp=sharing",
    description:
      "Mastered advanced prompt engineering techniques to build reliable and powerful applications using Large Language Models like GPT."
  },
  {
    name: "Data Analytics on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/7fd18ec4cf89434b93078fd0ccd0ca33",
    description:
      "Built modern data analytics solutions using AWS services like Lambda, S3, Glue, and Athena for big data processing and visualization."
  },
  {
    name: "Linux Fundamentals",
    issuer: "The Linux Foundation",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/c22ad610a2854f96bcf761f98f2ad3af",
    description:
      "Gained foundational skills in Linux system navigation, shell scripting, and user/network administration in command-line environments."
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/e90b8baa27464986bf90c48fd3f1e41e",
    description:
      "Learned Python basics and libraries such as Pandas and NumPy for data-driven projects using real-world datasets in Jupyter."
  },
  {
    name: "Exercising Leadership: Foundational Principles",
    issuer: "HarvardX",
    date: "Apr 2022",
    link: "https://courses.edx.org/certificates/ab0347ddf6e340d1855051f31466f26f",
    description:
      "Studied adaptive leadership to lead organizational change, manage conflict, and engage stakeholders with purpose and clarity."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Certifications & Learning</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass rounded-2xl p-6 animate-fade-in flex flex-col h-full shadow-lg hover:shadow-primary/10 transition-shadow"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex-grow">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-lg">{cert.name}</h3>
                </div>

                <div className="pl-8">
                  <p className="text-foreground/70 text-sm mb-1 font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{cert.description}</p>
                </div>
              </div>

              {/* --- IMPROVEMENT: Conditionally render the link if it exists --- */}
              {cert.link && (
                <div className="mt-6 pt-4 border-t border-primary/10">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Verify Credential</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
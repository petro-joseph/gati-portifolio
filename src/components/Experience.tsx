import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    company: "UBX Tanzania Ltd",
    role: "Software Developer",
    period: "Jun 2022 - Present",
    location: "Mikocheni, Dar es Salaam, Tanzania",
    description: "Responsible for designing, developing, and deploying enterprise-grade payment systems for government authorities and financial institutions in Zanzibar.",
    achievements: [
      "Architected a tax system for Zanzibar Revenue Authority (ZRA) handling over 100,000 daily transactions",
      "Integrated the system with multiple banks and payment gateways",
      "Migrated critical databases from MySQL to Oracle with zero downtime",
      "Implemented security protocols reducing fraud attempts by 90%",
      "Built a workflow automation engine reducing approval time by 60%",
      "Developed a digital banking system (SACCOSX) for cooperative societies with Umoja Switch and mobile integrations",
      "Enabled 24/7 banking access and real-time transaction monitoring for SACCOs members",
      "Built digital platforms for Zanzibar Road Transport Authority (ZIBS), Commission of Land (COLA), and Zanzibar Port Corporation (ZPC)"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Oracle"]
  },
  {
    company: "THPS",
    role: "Software Developer",
    period: "2018 - 2021",
    description: "Worked on backend development of healthcare data systems, focusing on APIs, data pipelines, and cloud deployment.",
    achievements: [
      "Developed and maintained RESTful APIs for healthcare systems",
      "Built data pipelines for reporting and analytics",
      "Implemented Redis caching to improve performance",
      "Deployed backend systems to Azure and maintained uptime"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Azure"]
  },
  {
    company: "Northern College of Health",
    role: "Junior Developer",
    period: "2016 - 2018",
    description: "Built internal software solutions to support academic planning and administrative operations.",
    achievements: [
      "Developed student management and academic planning tools",
      "Managed and optimized MySQL databases",
      "Created internal dashboards using PHP, jQuery, and Bootstrap"
    ],
    technologies: ["JavaScript","Wordpress", "PHP", "MySQL", "jQuery", "Bootstrap"]
  }
];


export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="experience-card animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="font-medium text-lg">{exp.role}</p>
                </div>

                <div className="md:w-2/3">
                  <p className="text-sm text-foreground/80 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-foreground/80">
                    {exp.achievements.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

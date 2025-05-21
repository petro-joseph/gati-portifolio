import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Data Analytics on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/7fd18ec4cf89434b93078fd0ccd0ca33",
    description:
      "Learned how to build modern data analytics solutions using AWS services like Lambda, S3, Glue, and Athena. Covered big data processing, visualization, and storage in scalable architectures."
  },
  {
    name: "Linux Fundamentals",
    issuer: "The Linux Foundation",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/c22ad610a2854f96bcf761f98f2ad3af",
    description:
      "Gained foundational skills in Linux system navigation, shell scripting, and user/network administration. Developed confidence using the CLI and managing Linux-based environments."
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/e90b8baa27464986bf90c48fd3f1e41e",
    description:
      "Learned Python basics, data structures, and libraries such as Pandas and NumPy. Practiced building data-driven projects in Jupyter Notebook with a focus on real-world datasets."
  },
  {
    name: "Designing Data Lakes on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2024",
    link: "https://courses.edx.org/certificates/8fa0fb3e81944c258c1f081ffdf9f169",
    description:
      "Understood the design principles of scalable, cost-effective data lakes on AWS. Focused on ingestion, cataloging, security, and analytics using Lake Formation and Glue."
  },
  {
    name: "Exercising Leadership: Foundational Principles",
    issuer: "HarvardX",
    date: "Apr 2022",
    link: "https://courses.edx.org/certificates/ab0347ddf6e340d1855051f31466f26f",
    description:
      "Studied the theory and practice of adaptive leadership. Gained tools to lead organizational change, manage conflict, and engage stakeholders with purpose and clarity."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass rounded-2xl p-6 animate-fade-in shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">{cert.name}</h3>
              </div>

              <p className="text-foreground/70 text-sm mb-1">{cert.issuer}</p>

              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                <Calendar className="h-4 w-4" />
                <span>{cert.date}</span>
              </div>


              <p className="text-sm text-foreground/80 mb-4">{cert.description}</p>

              <hr className="py-4" />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Verify</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Send, Mail, Linkedin, Github, CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Contact info array for cleaner code
const contactMethods = [
  {
    icon: Mail,
    href: "mailto:petergati360@gmail.com",
    text: "petergati360@gmail.com",
    ariaLabel: "Email Petro Gati"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/petergaty",
    text: "linkedin.com/in/petergaty",
    ariaLabel: "View Petro Gati's LinkedIn profile"
  },
  {
    icon: Github,
    href: "https://github.com/petro-joseph",
    text: "github.com/petrogati",
    ariaLabel: "View Petro Gati's GitHub profile"
  },
  {
    icon: CalendarCheck,
    href: "https://calendly.com/petergaty", // Replace with your Calendly link
    text: "Schedule a meeting",
    ariaLabel: "Schedule a meeting with Petro Gati"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Corrected state update logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with a real form submission API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    toast({
      title: "Message sent! ✨",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 text-foreground/70">
                I'm currently available for freelance projects and open to discussing new opportunities. Feel free to reach out.
              </p>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.href}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={method.ariaLabel}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <method.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{method.text}</span>
                  </a>
                ))}
              </div>
              <p className="mt-8 text-sm text-foreground/60">
                Prefer a more direct chat? My WhatsApp is available upon request.
              </p>
              <div className="flex-grow" />
              <p className="mt-8 text-foreground/70">
                Based in Dar es Salaam, Tanzania. Available for remote work worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <fieldset disabled={isSubmitting} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-colors resize-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-background/50 border-t-background rounded-full" />
                  ) : (
                    <> <Send className="h-4 w-4" /> Send Message </>
                  )}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
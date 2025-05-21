import { useState } from "react";
import { Send, Mail, Linkedin, Github, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-6 text-foreground/70">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:petergati360@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>petergati360@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/petrogati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/petrogati</span>
                </a>

                <a
                  href="https://github.com/petrogati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/petrogati</span>
                </a>

                <a
                  href="https://wa.me/255657824541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span>+255 657 824 541 (WhatsApp)</span>
                </a>
              </div>

              <p className="text-foreground/70">
                Based in Dar es Salaam, Tanzania. Available for remote work worldwide.
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Prefer chatting directly?{" "}
                <a href="https://wa.me/255657824541" className="underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                  Message me on WhatsApp.
                </a>
              </h4>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-primary/50 border-t-primary/100 rounded-full" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

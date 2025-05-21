import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);
  const { theme } = useTheme(); // Get the current theme from ThemeProvider

  const imageSrc = theme === "dark" ? "/petergati.webp" : "/petergati-light.webp";

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-medium mb-4">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Petro Joseph Gati
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Senior Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              Building robust and scalable digital solutions from Tanzania.
              Specialized in crafting efficient APIs and microservices that power modern applications.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="tag">Laravel</div>
              <div className="tag">NestJS</div>
              <div className="tag">FastAPI</div>
              <div className="tag">AI</div>
              <div className="tag">LangChain</div>
              <div className="tag">Docker</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
                <a
                  href="#projects"
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                ></a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 opacity-20 animate-float"></div>
              <div className="absolute inset-2 rounded-full glass-card overflow-hidden">
                {!imageLoadError ? (
                  <img
                    src={imageSrc}
                    alt="Peter Gati"
                    className="w-50 h-50 object-cover"
                    onError={() => setImageLoadError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center text-4xl font-bold">
                    PG
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="animate-bounce p-2 rounded-full glass text-primary"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
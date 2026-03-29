import { motion } from "framer-motion";
import projectCalc from "@/assets/project-calculator.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectLogin from "@/assets/project-login.jpg";

const projects = [
  {
    title: "Calculator Web App",
    description: "A functional calculator built using HTML, CSS, and JavaScript that performs basic arithmetic operations with a clean user interface.",
    image: projectCalc,
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website designed using HTML & CSS to showcase skills, projects, and professional information.",
    image: projectPortfolio,
  },
  {
    title: "Login & Registration System",
    description: "A user authentication system developed using HTML, CSS, and JavaScript with basic user validation and form handling.",
    image: projectLogin,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative overflow-hidden">
    <div className="blob-purple -top-40 right-0 opacity-50" />
    <div className="container max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl card-glow overflow-hidden group"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

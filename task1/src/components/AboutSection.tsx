import { motion } from "framer-motion";
import { Code, Rocket, Users } from "lucide-react";
import harshiniPhoto from "@/assets/harshini-photo.jpeg";

const highlights = [
  { icon: Code, label: "Clean Code Enthusiast" },
  { icon: Rocket, label: "Fast Learner" },
  { icon: Users, label: "Team Player" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="blob-pink -top-20 -right-20 opacity-20" />
    <div className="container max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Photo with decorative ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative shrink-0"
        >
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_50px_-10px_hsl(270_80%_65%/0.35)]">
            <img
              src={harshiniPhoto}
              alt="Harshini Penmetsa"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative orbit ring */}
          <div className="absolute inset-[-12px] rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
        </motion.div>

        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="rounded-2xl p-6 md:p-8 card-glow">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hey there! I'm{" "}
              <span className="text-foreground font-semibold">Harshini Penmetsa</span>, a
              Computer Science student who loves turning complex problems into simple, beautiful
              code. My journey into tech started with a curiosity about how things work behind the
              screen, and today, I'm building web apps like calculators and login systems from
              scratch.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
              Beyond just coding, I'm a quick learner who enjoys collaborating in teams and taking
              part in hackathons. I'm currently focused on mastering{" "}
              <span className="text-primary font-medium">Web Development</span> and exploring
              the world of{" "}
              <span className="text-accent font-medium">Cloud Computing</span>. When I'm not
              debugging or learning new stacks, I'm usually looking for the next big challenge to
              solve!
            </p>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {highlights.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                >
                  <h.icon size={14} /> {h.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

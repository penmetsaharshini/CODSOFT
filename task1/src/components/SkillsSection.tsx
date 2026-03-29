import { motion } from "framer-motion";
import { Code, Globe, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    skills: [
      { name: "C", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
      { name: "Java", color: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
      { name: "Python", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" },
      { name: "SQL", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
      { name: "Data Structures", color: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    skills: [
      { name: "HTML", color: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
      { name: "CSS", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
      { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30" },
    ],
  },
  {
    title: "Tools & Soft Skills",
    icon: Wrench,
    color: "from-violet-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
    skills: [
      { name: "VS Code", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
      { name: "Problem Solving", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
      { name: "Communication", color: "bg-pink-500/15 text-pink-300 border-pink-500/30" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.15, duration: 0.5 }}
            className={`rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.borderColor} backdrop-blur-sm`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-card ${cat.iconColor}`}>
                <cat.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.15 + i * 0.07, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-4 py-2 rounded-full border text-sm font-medium cursor-default transition-shadow duration-300 hover:shadow-[0_0_15px_-3px_hsl(270_80%_65%/0.4)] ${skill.color}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, EyeOff } from "lucide-react";
import resumeImage from "@/assets/resume-image.jpeg";

const ResumeSection = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="container max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          Resume
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-8"
        >
          Interested in working together? View or download my resume to learn more about my education,
          skills, and experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => setShowResume(!showResume)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl btn-gradient text-primary-foreground font-medium text-base"
            >
              {showResume ? <EyeOff size={18} /> : <Eye size={18} />}
              {showResume ? "Hide Resume" : "View Resume"}
            </button>
            <a
              href="/resume.pdf"
              download="Harshini_Penmetsa_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary/40 text-primary font-medium text-base hover:bg-primary/10 transition-colors"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>

          <AnimatePresence>
            {showResume && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full mt-6 rounded-2xl overflow-hidden card-glow"
              >
                <img
                  src={resumeImage}
                  alt="Harshini Penmetsa Resume"
                  className="w-full rounded-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;

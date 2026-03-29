import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2, Sparkles, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contacts = [
  { icon: Mail, label: "penmetsaharshini@gmail.com", href: "https://mail.google.com/mail/u/0/#inbox" },
  { icon: Phone, label: "+91 70750 15154", href: "tel:+917075015154" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/harshini-penmetsa-792683372" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/penmetsaHarshini" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Failed to send message", description: "Please try emailing me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="blob-purple -top-40 left-1/4 opacity-40" />
      <div className="blob-pink bottom-0 right-1/4 opacity-30" />
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Sparkles size={18} />
            <span className="text-sm font-medium tracking-wider uppercase">Let's Connect</span>
            <Sparkles size={18} />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'd love to hear from you! Whether it's a project idea, collaboration, or just a hello — drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/40 hover:border-primary/40 hover:bg-card/80 transition-all group"
              >
                <span className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <c.icon size={20} />
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm md:text-base">
                  {c.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 card-glow rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">Send a Message</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-border focus:border-primary/50"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-border focus:border-primary/50"
              maxLength={255}
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary/50 border-border focus:border-primary/50 min-h-[130px]"
              maxLength={1000}
            />
            <Button type="submit" disabled={sending} className="btn-gradient border-0 text-primary-foreground gap-2 mt-2 h-12 text-base">
              {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

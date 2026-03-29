import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/harshini-penmetsa-792683372", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/penmetsaHarshini", label: "GitHub" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border/50 bg-background">
    <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 <span className="text-foreground font-medium">Harshini Penmetsa</span>. All Rights Reserved.
      </p>
      <div className="flex items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={s.label}
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

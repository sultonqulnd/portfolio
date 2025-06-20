
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' }
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container-width section-padding">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold gradient-text">
            Alex Johnson
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Alex Johnson. Made with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

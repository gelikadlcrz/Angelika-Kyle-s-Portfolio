import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-mono mb-4">
              Portfolio<span className="text-[#7ee787]">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Creating innovative digital experiences through clean code and creative
              design.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/gelikadlcrz", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/gelikadlcrz/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:2241338@slu.edu.ph", label: "Email" },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#7ee787] hover:bg-[#7ee787]/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/works", label: "Projects" },
                { to: "/about", label: "About Me" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block text-gray-400 hover:text-[#7ee787] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: 2241338@slu.edu.ph</p>
              <p>Location: Baguio City, Philippines</p>
              <p>Open to freelance projects and actively seeking internship opportunities (willing to relocate).</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Portfolio. Made with
            <Heart className="w-4 h-4 text-[#7ee787]" fill="#7ee787" />
            by Angelika Kyle Dela Cruz
          </p>
          {/* <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#7ee787] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#7ee787] transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

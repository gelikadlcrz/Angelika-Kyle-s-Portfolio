import { motion } from "motion/react";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2241338@slu.edu.ph",
      href: "mailto:2241338@slu.edu.ph",
      description: "Send me an email anytime!",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gelikadlcrz",
      href: "https://github.com/gelikadlcrz",
      description: "Check out my repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/angelika-kyle-dela-cruz-57a720384",
      href: "https://linkedin.com/in/angelika-kyle-dela-cruz-57a720384/",
      description: "Let's connect professionally",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: "#",
      description: "Available for remote opportunities",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/gelikadlcrz", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/angelika-kyle-dela-cruz-57a720384/", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl lg:text-6xl mb-4">
            <span className="text-[#7ee787]">/</span>contacts
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            I'm interested in freelance opportunities and collaborative projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-start gap-4 p-6 bg-[#1a1a24] rounded-xl border border-white/5 hover:border-[#7ee787]/30 transition-all group cursor-pointer"
                  >
                    <div className="p-3 bg-[#7ee787]/10 rounded-lg group-hover:bg-[#7ee787]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#7ee787]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                      <div className="text-white mb-2 break-all">{info.value}</div>
                      <div className="text-gray-500 text-sm">{info.description}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#7ee787] hover:bg-[#7ee787]/10 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#1a1a24] p-8 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#7ee787]/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#7ee787]" />
                </div>
                <h2 className="text-2xl">Send Me a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:border-[#7ee787] focus:outline-none transition-colors text-white resize-none placeholder:text-gray-600"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-[#7ee787] text-black font-medium rounded-lg hover:bg-[#6dd777] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/5">
            <div className="p-3 bg-[#7ee787]/10 rounded-lg w-fit mb-4">
              <Clock className="w-6 h-6 text-[#7ee787]" />
            </div>
            <h3 className="text-lg mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">
              I typically respond within 24-48 hours during weekdays.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/5">
            <div className="p-3 bg-[#79c0ff]/10 rounded-lg w-fit mb-4">
              <MessageCircle className="w-6 h-6 text-[#79c0ff]" />
            </div>
            <h3 className="text-lg mb-2">Collaboration</h3>
            <p className="text-gray-400 text-sm">
              Open to exciting projects and team collaborations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] p-6 rounded-xl border border-white/5">
            <div className="p-3 bg-[#d2a8ff]/10 rounded-lg w-fit mb-4">
              <MapPin className="w-6 h-6 text-[#d2a8ff]" />
            </div>
            <h3 className="text-lg mb-2">Remote Work</h3>
            <p className="text-gray-400 text-sm">
              Available for remote opportunities worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

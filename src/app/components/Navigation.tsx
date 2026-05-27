import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-mono"
          >
            <NavLink to="/">
              Portfolio<span className="text-[#7ee787]">.</span>
            </NavLink>
          </motion.div>

          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              end
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection("home");
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7ee787] relative"
                  : "text-gray-400 hover:text-white transition-colors relative"
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#7ee787]"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/works"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection("works");
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7ee787] relative"
                  : "text-gray-400 hover:text-white transition-colors relative"
              }
            >
              {({ isActive }) => (
                <>
                  Works
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#7ee787]"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection("about");
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7ee787] relative"
                  : "text-gray-400 hover:text-white transition-colors relative"
              }
            >
              {({ isActive }) => (
                <>
                  About Me
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#7ee787]"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection("contact");
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7ee787] relative"
                  : "text-gray-400 hover:text-white transition-colors relative"
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#7ee787]"
                    />
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

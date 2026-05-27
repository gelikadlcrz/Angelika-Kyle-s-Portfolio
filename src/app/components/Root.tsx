import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
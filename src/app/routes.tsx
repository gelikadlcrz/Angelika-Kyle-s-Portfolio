import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Works } from "./components/Works";
import { AboutMe } from "./components/AboutMe";
import { Contacts } from "./components/Contacts";
import { ProjectDetail } from "./components/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "works", Component: Works },
      { path: "works/:id", Component: ProjectDetail },
      { path: "about", Component: AboutMe },
      { path: "contact", Component: Contacts },
    ],
  },
]);
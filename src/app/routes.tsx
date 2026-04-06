import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { QuoteCalculator } from "./components/QuoteCalculator";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "quote", Component: QuoteCalculator },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);

import type { PageRouterConfig } from "innerscope";
import LandingPage from "./pages/index.ts";
import AboutPage from "./pages/about.ts";

export const page_routes: PageRouterConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            component: LandingPage,
        },
        {
            path: "/about",
            component: AboutPage,
        },
    ],
};
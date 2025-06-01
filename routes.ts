import type { PageRouterConfig } from "viewkit-ui";
import LandingPage from "./src/pages/index.ts";
import AboutPage from "./src/pages/about.ts";

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
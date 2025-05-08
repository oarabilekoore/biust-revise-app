import type { PageRouterConfig } from "innerscope";
import { Application } from "innerscope";

import LandingPage from "./pages/index.ts";
import AboutPage from "./pages/about.ts";

const page_routes: PageRouterConfig = {
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

export const app = new Application({
    title: "Template App",
    scrollbarvisibility: "hidden",
    statusbarcolor: "#252526",
    allowzoom: false,
    routes: page_routes,
});

app.onStart(LandingPage);

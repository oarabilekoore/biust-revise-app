import type { PageRouterConfig } from "viewkit-ui";
import MainPage from "./src/pages/main.ts";
import AboutPage from "./src/pages/about.ts";

export const page_routes: PageRouterConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            component: MainPage,
        },
        {
            path: "/about",
            component: AboutPage,
        },
    ],
};
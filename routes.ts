import type { PageRouterConfig } from "viewkit-ui";
import MainPage from "./src/pages/main.ts";
import AboutPage from "./src/pages/about.ts";
import LibraryPage from "./src/pages/library.ts";
import Dashboard from "./src/pages/dashboard.ts";

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
        {
            path: "/dashboard",
            component: Dashboard,
        },
        {
            path: "/library",
            component: LibraryPage,
        },
    ],
};

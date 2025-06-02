import type { PageRouterConfig } from "viewkit-ui";
import AboutPage from "./src/pages/about.ts";
import LibraryPage from "./src/pages/documents.ts";
import Dashboard from "./src/pages/dashboard.ts";
import ClassesPage from "./src/pages/classes.ts";
import CalendarPage from "./src/pages/calendar.ts";

export const page_routes: PageRouterConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            component: Dashboard,
        },
        {
            path: "/about",
            component: AboutPage,
        },
        {
            path: "/library",
            component: LibraryPage,
        },
        {
            path: "/classes",
            component: ClassesPage,
        },
        {
            path: "/calendar",
            component: CalendarPage,
        },
    ],
};

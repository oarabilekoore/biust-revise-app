import AboutPage from "./src/pages/about.ts";
import LibraryPage from "./src/pages/documents.ts";
import Dashboard from "./src/pages/dashboard.ts";
import ClassesPage from "./src/pages/classes.ts";
import CalendarPage from "./src/pages/calendar.ts";

export const page_routes = [
    {
        title: "BIUSTRevise",
        path: "/",
        component: Dashboard,
    },
    {
        title: "About BIUSTRevise",
        path: "/about",
        component: () => import("./src/pages/about.ts").then((m) => m.default),
    },
    {
        title: "Biust Document Library",
        path: "/library",
        component: () => import("./src/pages/documents.ts").then((m) => m.default),
    },
    {
        title: "Your Classes",
        path: "/classes",
        component: () => import("./src/pages/classes.ts").then((m) => m.default),
    },
    {
        title: "Your Schedule",
        path: "/calendar",
        component: () => import("./src/pages/calendar.ts").then((m) => m.default),
    },
];

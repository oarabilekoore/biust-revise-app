import { Application } from "innerscope";
import LandingPage from "./pages/index.ts";
import { page_routes } from "./routes.ts";

export const app = new Application({
    title: "Template App",
    scrollbarvisibility: "hidden",
    statusbarcolor: "#252526",
    allowzoom: false,
    routes: page_routes,
});

app.onStart(LandingPage);

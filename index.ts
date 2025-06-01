import LandingPage from "./src/pages/index.ts";
import { page_routes } from "./routes.ts";
import { Application } from "viewkit-ui";

export const app = new Application({
    title: "BIUSTREVISE App",
    scrollbarvisibility: "hidden",
    statusbarcolor: "#252526",
    allowzoom: false,
    routes: page_routes,
});

app.onStart(LandingPage);

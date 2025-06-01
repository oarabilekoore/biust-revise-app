import { Application, Widget } from "viewkit-ui";
import { page_routes } from "./routes.ts";
import { splash_icon } from "./public/constants.ts"


export const app = new Application({
    title: "BIUSTREVISE App",
    statusbarcolor: "#252526",
    allowzoom: false,
    routes: page_routes,
    scrollbarvisibility: "hidden",
    icon: "./images/biustrevise.png",
});

app.openRoute("/")
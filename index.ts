import { Application, Widget } from "viewkit-ui";
import { page_routes } from "./routes.ts";
import { SideBar } from "./src/components/sidebar.ts";

export const app = new Application({
    title: "BIUSTREVISE App",
    statusbarcolor: "#252526",
    allowzoom: false,
    routes: page_routes,
    scrollbarvisibility: "hidden",
    icon: "./images/biustrevise.png",
});

const page = Widget.LinearLayout(app.root);
page.ParentFill = "FILLXY";
page.ScrollBarVisibility = "HIDDEN";
page.LayoutDirection = "LEFT_TO_RIGHT";

SideBar(page);

const page_handler = Widget.LinearLayout(page);
page_handler.ParentFill = "FILLXY";
page_handler.ElementAlignment = "CENTER";
page_handler.LayoutDirection = "TOP_TO_BOTTOM";
app.setRouteView(page_handler);

app.openRoute("/");

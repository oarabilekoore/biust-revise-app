import { widget } from "viewkit-ui";
import { page_routes } from "./routes.ts";
import { SideBar } from "./src/components/sidebar.ts";
import { Router } from "./src/router.ts";
//@ts-ignore
const root = document.querySelector("body");

const page = widget.LinearLayout(root);
page.ParentFill = "FILLXY";
page.ScrollBarVisibility = "HIDDEN";
page.LayoutDirection = "LEFT_TO_RIGHT";

SideBar(page);

const page_handler = widget.LinearLayout(page);
page_handler.ParentFill = "FILLXY";
page_handler.ElementAlignment = "CENTER";
page_handler.LayoutDirection = "TOP_TO_BOTTOM";

export const router = new Router(page_routes, page_handler.DomElement);
router.openRoute("/");

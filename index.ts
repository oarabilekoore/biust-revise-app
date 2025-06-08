import { html, css, Router } from "viewkit-ui";
import { page_routes } from "./routes.ts";
import { SideBar } from "./src/components/sidebar.ts";

const root = document.querySelector("body") as HTMLElement;

const page = html.Div(root);
page.classList.add(
    css({
        display: "flex",
        flexDirection: "row",
        width: "100vw !important",
        height: "100vh !important",
        overflowX: "hidden !important",
        overflowY: "hidden !important",
        scrollBehavior: "none !important",
    })
);

SideBar(page);

const page_handler = html.Div(page);
page_handler.classList.add(
    css({
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    })
);

export const router = new Router(page_routes, page_handler);
router.open("/");

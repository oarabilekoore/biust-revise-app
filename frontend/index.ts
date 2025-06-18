import { html, css, Router } from "viewkit-ui";
import { page_routes } from "./routes.ts";
import { SideBar } from "./src/components/sidebar.ts";

const root = document.querySelector("body") as HTMLElement;

const page = html.div(root);
page.classList.add(
    css({
        display: "flex",
        flexDirection: "row",
        width: "100vw !important",
        height: "100vh !important",
        overflowX: "hidden !important",
        overflowY: "hidden !important",
        scrollBehavior: "none !important",

        "@(max-width: 1250px)": {
            flexDirection: "column-reverse",
            paddingBottom: "0",
            // height: "100vh",
        },
    })
);

SideBar(page);
const page_handler = html.div(page);
page_handler.classList.add(
    css({
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        "@(max-width: 1250px)": {
            width: "100%",
            flexGrow: 1,
            overflowX: "hidden !important",
            scrollBehavior: "none !important",
        },
    })
);

export const router = new Router(page_routes, page_handler);
router.open("/");

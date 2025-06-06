import { widget, css, LayoutConstructor } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { stl_def, gen_def } from "../components/+definition";
import { LinkButton } from "../components/button";
import { ChatBox } from "../components/chatbox";
import { HeaderMemo } from "../components/header";

export default function Dashboard(page: Parent) {
    const dashboard_page = new LayoutConstructor(null, "linear");
    dashboard_page.ParentFill = "INHERIT";
    dashboard_page.ScrollDirection = "VERTICAL";
    dashboard_page.ElementAlignment = "CENTER";
    dashboard_page.ScrollBarVisibility = "HIDDEN";
    dashboard_page.LayoutDirection = "TOP_TO_BOTTOM";
    dashboard_page.DomElement.style.gap = `${gen_def.general.space[4]}`;
    dashboard_page.DomElement.style.backgroundColor = stl_def.schemes["light-high-contrast"].background;

    HeaderMemo(dashboard_page, {
        title: "Hello Welcome To The BIUSTREVISE App",
        icon: "⚝",
    });

    const button_row = widget.LinearLayout(dashboard_page);
    button_row.ElementAlignment = "CENTER";
    button_row.LayoutDirection = "LEFT_TO_RIGHT";
    button_row.DomElement.style.gap = `${gen_def.general.space[3]}`;

    LinkButton(button_row, {
        label: "Summarize School Notes",
        href: "",
        icon: "stylus_note",
    });

    LinkButton(button_row, {
        label: "Create FlashCards",
        href: "",
        icon: "stacks",
    });

    LinkButton(button_row, {
        label: "Revise a Test Paper",
        href: "",
        icon: "source_notes",
    });

    LinkButton(button_row, {
        label: "Create Notes From A Recording",
        href: "",
        icon: "transcribe",
    });

    ChatBox(dashboard_page);

    // Dont Edit That, Its For Use With The RouteView
    return dashboard_page.DomElement;
}

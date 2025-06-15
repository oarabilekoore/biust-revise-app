import { html, css } from "viewkit-ui";
import { gen_def } from "../components/+definition";
import { FilledButton } from "../components/button";
import { ChatBox } from "../components/chatbox";
import { HeaderMemo } from "../components/header";

export default function Dashboard() {
    const dashboard_page = html.div();
    dashboard_page.classList.add(
        css({
            display: "flex",
            width: "inherit",
            height: "inherit",
            flexGrow: 1,
            flexDirection: "column",
            alignContent: "center",
            padding: `${gen_def.general.space[4]}`,
            gap: `${gen_def.general.space[4]}`,
        })
    );
    //dashboard_page.DomElement.style.backgroundColor = stl_def.schemes["light-high-contrast"].background;

    HeaderMemo(dashboard_page, {
        title: "Hello Welcome To The BIUSTREVISE App",
        icon: "⚝",
    });

    const bottom_area = html.div(dashboard_page);
    bottom_area.classList.add(
        css({
            width: "100%",
            flexGrow: 0.95,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
        })
    );

    ChatBox(bottom_area);

    const button_row = html.div(bottom_area);
    button_row.classList.add(
        css({
            display: "flex",
            gap: `${gen_def.general.space[3]}`,
            padding: `${gen_def.general.space[3]}`,
        })
    );

    FilledButton(button_row, {
        label: "Summarize School Notes",
        href: "",
        icon: "stylus_note",
    });

    FilledButton(button_row, {
        label: "Create FlashCards",
        href: "",
        icon: "stacks",
    });

    FilledButton(button_row, {
        label: "Revise a Test Paper",
        href: "",
        icon: "source_notes",
    });

    FilledButton(button_row, {
        label: "Create Notes From A Recording",
        href: "",
        icon: "transcribe",
    });

    // Dont Edit That, Its For Use With The RouteView
    return dashboard_page;
}

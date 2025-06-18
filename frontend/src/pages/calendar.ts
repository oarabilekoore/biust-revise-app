import { css, html } from "viewkit-ui";

export default function CalendarPage() {
    const calendar_page = html.div();
    calendar_page.classList.add(
        css({
            width: "inherit",
            height: "inherit",
            display: "flex",
            justifyContent: "center",
        })
    );

    html.h1(calendar_page, "Calendar Page");
    return calendar_page;
}

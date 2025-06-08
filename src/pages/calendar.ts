import { css, html } from "viewkit-ui";

export default function CalendarPage() {
    const calendar_page = html.Div();
    calendar_page.classList.add(
        css({
            width: "inherit",
            height: "inherit",
            display: "flex",
            justifyContent: "center",
        })
    );

    html.Heading1(calendar_page, "Calendar Page");
    return calendar_page;
}

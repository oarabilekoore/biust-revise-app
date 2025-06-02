import { Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function CalendarPage(parent: Parent) {
    const calendar_page = Widget.LinearLayout(parent);
    calendar_page.ParentFill = "INHERIT";
    calendar_page.ElementAlignment = "CENTER";

    Widget.Heading1(calendar_page, "Calendar Page");
    return calendar_page.DomElement;
}

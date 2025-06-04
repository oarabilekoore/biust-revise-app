import { widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function CalendarPage(parent: Parent) {
    const calendar_page = widget.LinearLayout(parent);
    calendar_page.ParentFill = "INHERIT";
    calendar_page.ElementAlignment = "CENTER";

    widget.Heading1(calendar_page, "Calendar Page");
    return calendar_page.DomElement;
}

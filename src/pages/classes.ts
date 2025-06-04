import { widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function ClassesPage(parent: Parent) {
    const classes_page = widget.LinearLayout(parent);
    classes_page.ParentFill = "INHERIT";
    classes_page.ElementAlignment = "CENTER";

    widget.Heading1(classes_page, "Classes Page");
    return classes_page.DomElement;
}

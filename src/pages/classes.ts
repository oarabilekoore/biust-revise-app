import { Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function ClassesPage(parent: Parent) {
    const classes_page = Widget.LinearLayout(parent);
    classes_page.ParentFill = "INHERIT";
    classes_page.ElementAlignment = "CENTER";

    Widget.Heading1(classes_page, "Classes Page");
    return classes_page.DomElement;
}

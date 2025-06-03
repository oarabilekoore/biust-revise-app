import { Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
export default function AboutPage(parent: Parent) {
    const page = Widget.LinearLayout(parent);
    page.ElementAlignment = "CENTER";
    page.ParentFill = "FILLXY";
    Widget.Paragraph(`You Are On The About Page`, page);

    return page.DomElement;
}

import { widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
export default function AboutPage(parent: Parent) {
    const page = widget.LinearLayout();
    page.ElementAlignment = "CENTER";
    page.ParentFill = "FILLXY";
    widget.Paragraph(`You Are On The About Page`, page);

    return page.DomElement;
}

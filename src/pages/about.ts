import { Widget } from "viewkit-ui";
import { app } from "../../index.ts";

export default function AboutPage() {
    const page = Widget.LinearLayout(app.root);
    page.ElementAlignment = "CENTER";
    page.ParentFill = "FILLXY";
    Widget.Paragraph(`You Are On The About Page`, page);

    return page.DomElement;
}

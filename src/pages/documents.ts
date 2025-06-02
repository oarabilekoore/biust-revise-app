import { Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function LibraryPage(parent: Parent) {
    const library_page = Widget.LinearLayout(parent);
    library_page.ParentFill = "INHERIT";
    library_page.ElementAlignment = "CENTER";

    Widget.Heading1(library_page, "Documents Page");
    return library_page.DomElement;
}

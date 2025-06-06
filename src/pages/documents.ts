import { widget, css } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function LibraryPage(parent: Parent) {
    const library_page = widget.LinearLayout();
    library_page.ParentFill = "INHERIT";
    library_page.ElementAlignment = "CENTER";

    return library_page.DomElement;
}

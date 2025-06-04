import { widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";

export default function LibraryPage(parent: Parent) {
    const library_page = widget.LinearLayout(parent);
    library_page.ParentFill = "INHERIT";
    library_page.ElementAlignment = "CENTER";

    widget.Heading1(library_page, "Documents Page");
    return library_page.DomElement;
}

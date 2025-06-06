import { widget, css } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { HeaderMemo } from "../components/header";
import { LinkButton, SubjectLinkButton } from "../components/button";

export default function LibraryPage(parent: Parent) {
    const library_page = widget.LinearLayout();
    library_page.ParentFill = "INHERIT";
    library_page.ElementAlignment = "VCENTER";
    library_page.LayoutDirection = "TOP_TO_BOTTOM";

    HeaderMemo(library_page, {
        title: "BIUSTREVISE Document Library.",
        icon: "📄",
    });

    const courses_grid = widget.GridLayout(library_page);
    const grid_style = css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",

        "@media (max-width: 768px)": {
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            padding: "1rem",
        },

        "@media (max-width: 480px)": {
            gridTemplateColumns: "1fr",
            gap: "0.75rem",
            padding: "0.75rem",
        },
    });
    courses_grid.DomElement.classList.add(grid_style);

    SubjectLinkButton(courses_grid, {
        label: "Phsyics101",
        icon: "physics",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "Chemistry101",
        icon: "flask",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "Math101",
        icon: "calculator-simple",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "Comp101",
        icon: "display-code",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "ALSS101",
        icon: "dialogue-exchange",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "Stats101",
        icon: "chart-histogram",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "CETG101",
        icon: "tools",
        href: "",
    });

    return library_page.DomElement;
}

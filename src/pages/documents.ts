import { html, css } from "viewkit-ui";
import { HeaderMemo } from "../components/header";
import { SubjectLinkButton } from "../components/button";

export default function LibraryPage(): HTMLElement {
    const library_page = html.Div();
    library_page.classList.add(
        css({
            width: "inherit",
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
        })
    );

    HeaderMemo(library_page, {
        title: "BIUSTREVISE Document Library.",
        icon: "📄",
    });

    const courses_grid = html.Div(library_page);
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
    courses_grid.classList.add(grid_style);

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

    SubjectLinkButton(courses_grid, {
        label: "CETG122",
        icon: "tools",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "CETG121",
        icon: "tools",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "MATH102",
        icon: "calculator-simple",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "MATH201",
        icon: "calculator-simple",
        href: "",
    });

    SubjectLinkButton(courses_grid, {
        label: "MATH202",
        icon: "calculator-simple",
        href: "",
    }).onclick = () => {
        SubjectContentView(library_page, "math202");
    };

    return library_page;
}

function SubjectContentView(root: HTMLElement, subject: string) {
    const subject_view = html.Dialog(root);
    subject_view.closedBy = "any";

    const subject_view_style = css(
        {
            border: "none !important",
            borderColor: "none !important",
            boxShadow: "0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#f0f0f0",
            width: "calc(100% - 30%)",
            height: "auto",
        },
        "dialog"
    );
    subject_view.classList.add("dialog");
    subject_view.className = "animate__animated animate__bounceIn";

    html.Heading2(subject_view, subject);
    subject_view.showModal();
    return library_page;
}

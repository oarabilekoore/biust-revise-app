import { html, css } from "viewkit-ui";

export default function ClassesPage() {
    const classes_page = html.div();
    classes_page.classList.add(
        css({
            width: "inherit",
            height: "inherit",
            display: "flex",
            justifyContent: "center",
        })
    );

    html.h1(classes_page, "Classes Page");
    return classes_page;
}

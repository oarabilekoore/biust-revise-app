import { html, css } from "viewkit-ui";

export default function ClassesPage() {
    const classes_page = html.Div();
    classes_page.classList.add(
        css({
            width: "inherit",
            height: "inherit",
            display: "flex",
            justifyContent: "center",
        })
    );

    html.Heading1(classes_page, "Classes Page");
    return classes_page;
}

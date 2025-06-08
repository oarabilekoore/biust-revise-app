import { html, css } from "viewkit-ui";

export default function AboutPage() {
    const page = html.Div();
    page.classList.add(
        css({
            display: "flex",
            width: "inherit",
            height: "inherit",
            justifyContent: "center",
        })
    );
    html.Paragraph(`You Are On The About Page`, page);

    return page;
}

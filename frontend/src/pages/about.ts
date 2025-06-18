import { html, css } from "viewkit-ui";

export default function AboutPage() {
    const page = html.div();
    page.classList.add(
        css({
            display: "flex",
            width: "inherit",
            height: "inherit",
            justifyContent: "center",
        })
    );
    html.p(`You Are On The About Page`, page);

    return page;
}

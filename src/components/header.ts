import { widget, css, type Parent } from "viewkit-ui";
import { stl_def } from "./+definition";
export type HeaderProps = {
    title: string;
    icon: string;
};

export function HeaderMemo(root: Parent, headerprops: HeaderProps) {
    const { title, icon } = headerprops;
    const heading_style = css({
        fontFamily: `"WDXL Lubrifont TC", sans-serif`,
        fontSize: "2.8rem",
        color: stl_def.schemes["light-high-contrast"].secondary,
        textAlign: "center",
    });

    const heading_text = widget.Heading1(root, title);
    heading_text.classList.add(heading_style);

    const heading_star_style = css({
        fontSize: "5.6rem",
    });

    const heading_star = widget.Span(heading_text, ` ${icon} `);
    heading_star.classList.add(heading_style, heading_star_style);
}

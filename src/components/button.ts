import type { Parent } from "viewkit-ui";
import { widget, css } from "viewkit-ui";
import { gen_def, stl_def } from "./+definition";

type ButtonProps = {
    label: string;
    icon?: string;
    href?: string;
};

export function LinkButton(parent: Parent, props: ButtonProps) {
    const { label, icon, href } = props;
    const button = widget.Anchor(parent, label);
    button.setAttribute("href", href);
    if (icon) {
        add_icon_to_button();
    }

    css(
        {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: gen_def.general.space[1],
            backgroundColor: stl_def.schemes["dark-medium-contrast"].secondary,
            color: stl_def.schemes["light-high-contrast"].secondary,
            fontFamily: `"Lexend", sans-serif`,
            fontWeight: 400,
            textAlign: "center",
            borderRadius: "4px",
            cursor: "pointer",
            padding: gen_def.general.space[2],
            margin: "auto",
            height: "auto",
            boxShadow: "none",
            boxSizing: "border-box",
            textDecoration: "none",
            "&:hover": {
                opacity: 0.8,
            },
        },
        "link_button"
    );
    button.classList.add("link_button");

    function add_icon_to_button() {
        //@ts-ignore
        const iconElement = widget.Span(button, icon);
        iconElement.classList.add("material-symbols-outlined");
        button.prepend(iconElement);
    }

    return button;
}

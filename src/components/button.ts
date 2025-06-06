import type { Parent } from "viewkit-ui";
import { widget, css } from "viewkit-ui";
import { gen_def, stl_def } from "./+definition";

type ButtonProps = {
    label: string;
    icon?: string;
    href?: string | undefined;
};

export function LinkButton(parent: Parent, props: ButtonProps) {
    const { label, icon, href } = props;
    const button = widget.Anchor(parent, label);

    href ? button.setAttribute("href", href) : console.info("Href Attribute Of The Link Button Is Null");
    if (icon) {
        add_icon_to_button();
    }

    const link_button = css({
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
    });
    button.classList.add(link_button);

    function add_icon_to_button() {
        //@ts-ignore
        const iconElement = widget.Span(button, icon);
        iconElement.classList.add("material-symbols-outlined");
        button.prepend(iconElement);
    }

    return button;
}

type SubjectLinkProps = {
    label: string;
    icon: string;
    href: string;
};

export function SubjectLinkButton(root: Parent, props: SubjectLinkProps) {
    const { label, icon, href } = props;
    const button = widget.LinearLayout(root);
    button.ElementAlignment = "VCENTER";
    button.LayoutDirection = "LEFT_TO_RIGHT";

    const icon_ = widget.Span(button);
    icon_.classList.add("fi", `fi-rr-${icon}`);

    const label_ = widget.Anchor(button);
    label_.textContent = label.toUpperCase();

    const button_css = css({
        backdropFilter: "blur(8px)",
        fontFamily: `"Lexend", sans-serif`,
        fontWeight: 400,
        textAlign: "center",
        alignItems: "space-between",
        border: `1px solid ${stl_def.schemes.light.outlineVariant}`,
        borderRadius: `${gen_def.radius.sm}`,
        boxShadow: "none",
        padding: `${gen_def.general.space[4]}`,
        gap: `${gen_def.general.space[4]}`,
        cursor: "pointer",
        "&:hover": {
            border: `1px solid ${stl_def.schemes.light.outline}`,
        },
    });
    button.DomElement.classList.add(button_css);
    return button.DomElement;
}

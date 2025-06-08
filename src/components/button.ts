import { html, css, signal } from "viewkit-ui";
import { gen_def, stl_def } from "./+definition";

const general_button_styles = css({
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: gen_def.general.space[1],
});

type ButtonProps = {
    label: string;
    icon?: string;
    iconposition?: "left" | "right";
    href?: string | undefined;
};

export function FilledButton(parent: HTMLElement, props: ButtonProps) {
    const { label, icon, href, iconposition } = props;
    const button = html.Anchor(parent, label);

    href ? button.setAttribute("href", href) : console.info("Href Attribute Of The Link Button Is Null");
    if (icon) {
        add_icon_to_button();
    }

    const filled_button_styles = css({
        backgroundColor: stl_def.schemes["dark-medium-contrast"].secondary,
        color: stl_def.schemes["light-high-contrast"].secondary,
        "&:hover": {
            opacity: 0.8,
        },
    });
    button.classList.add(general_button_styles, filled_button_styles);

    function add_icon_to_button() {
        const iconElement = html.Span(button, icon);
        iconElement.classList.add("material-symbols-outlined");
        if (iconposition === "right") {
            button.append(iconElement);
        } else button.prepend(iconElement);
    }

    return button;
}

type ToggleButtonProps = {
    label: string;
    icon?: string;
    iconposition?: "left" | "right";
    ontoggle?: Function;
};

export function ToggleButton(parent: HTMLElement, props: ToggleButtonProps) {
    const { label, icon, iconposition, ontoggle } = props;
    const button = html.Anchor(parent, label);
    const togglestate = signal(false);

    if (icon) add_icon_to_button();

    const toggle_button_styles = css({
        color: stl_def.schemes["light-high-contrast"].secondary,
        backgroundColor: "inherit",
        "&:hover": {
            opacity: 0.8,
            color: "#1157ce",
        },
    });
    button.classList.add(general_button_styles, toggle_button_styles);

    function add_icon_to_button() {
        const iconElement = html.Span(button, icon);
        iconElement.classList.add("material-symbols-outlined");

        if (iconposition === "right") button.append(iconElement);
        else button.prepend(iconElement);
    }
    const toggledclass = css({
        color: "#1157ce",
    });

    button.onclick = function () {
        if (togglestate.get() === true) {
            togglestate.set(false);
            ontoggle ? ontoggle() : null;
            button.classList.remove(toggledclass);
        } else {
            togglestate.set(true);
            ontoggle ? ontoggle() : null;
            button.classList.add(toggledclass);
        }
    };
    return { button, togglestate };
}

export function MenuButton(parent: HTMLElement, label: string) {
    const button = html.Anchor(parent, label);

    const menu_button_styles = css({
        backgroundColor: "inherit",
        color: stl_def.schemes["light-high-contrast"].secondary,
        "&:hover": {
            backgroundColor: stl_def.schemes["dark-medium-contrast"].secondary,
        },
    });
    button.classList.add(general_button_styles, menu_button_styles);

    const iconElement = html.Span(button, "arrow_drop_down");
    iconElement.classList.add("material-symbols-outlined");
    button.append(iconElement);

    return button;
}

type SubjectLinkProps = {
    label: string;
    icon: string;
    href: string;
};

export function SubjectLinkButton(root: HTMLElement, props: SubjectLinkProps) {
    const { label, icon, href } = props;
    const button = html.Div(root);

    const subject_link_button_container_styles = css({
        display: "flex",
        alignContent: "center",
        flexDirection: "flex-left",
    });
    button.classList.add(subject_link_button_container_styles);

    const icon_ = html.Span(button);
    icon_.classList.add("fi", `fi-rr-${icon}`);

    const label_ = html.Anchor(button);
    label_.textContent = label.toUpperCase();
    label_.setAttribute("href", href); // Add href to the anchor tag

    const subject_link_button_styles = css({
        backdropFilter: "blur(8px)",
        border: `1px solid ${stl_def.schemes.light.outlineVariant}`,
        borderRadius: `${gen_def.radius.sm}`,
        padding: `${gen_def.general.space[4]}`,
        gap: `${gen_def.general.space[4]}`,
        "&:hover": {
            border: `1px solid ${stl_def.schemes.light.outline}`,
        },
    });

    button.classList.add(general_button_styles, subject_link_button_styles);
    return button;
}

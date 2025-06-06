import { LayoutConstructor, widget, css } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";
import { router } from "../..";

const side_bar_style = css({
    backgroundColor: stl_def.schemes.light.secondaryContainer,
    padding: gen_def.general.space[3],
    rowGap: gen_def.general.space[2],
    zIndex: 2000,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "64px",
});

const tooltip_style = css({
    fontFamily: "Lexend, sans-serif",
    fontWeight: 400,
    position: "absolute",
    left: "calc(100% + 10px)",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: stl_def.schemes["light-high-contrast"].onSurface,
    color: stl_def.schemes["light-high-contrast"].surface,
    padding: "8px 12px",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
    pointerEvents: "none",
    zIndex: 2001,
    "&::before": {
        content: "",
        position: "absolute",
        right: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        border: "5px solid transparent",
        borderRightColor: stl_def.schemes["light-high-contrast"].onSurface,
    },
});

const side_bar_item_style = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "calc(100% - 4px)",
    minHeight: "64px",
    padding: `${gen_def.general.space[3]} ${gen_def.general.space[1]}`,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "color 0.2s ease",
    color: stl_def.schemes["light-medium-contrast"].secondary,
    position: "relative",

    "&:hover": {
        color: stl_def.schemes["light-high-contrast"].onSurface,
    },

    [`&:hover .${tooltip_style}`]: {
        opacity: 1,
        visibility: "visible",
    },

    "&:focus-visible": {
        outline: `2px solid ${stl_def.schemes["light-medium-contrast"].onSurface}`,
        outlineOffset: "2px",
    },
});

const icon_element_style = css({
    fontSize: "28px",
    marginBottom: gen_def.general.space[1],
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.1)",
    },
});

function SideBarIcon(parent: Parent, icon: string, hint: string, onClick?: () => void) {
    const item = new LayoutConstructor(parent, "linear", [side_bar_item_style]);
    item.ElementAlignment = "CENTER";
    item.LayoutDirection = "TOP_TO_BOTTOM";

    const icon_view = widget.Span(item);
    icon_view.textContent = icon;
    icon_view.classList.add("material-symbols-outlined", icon_element_style);

    // Tooltip element
    const tooltip_text = widget.Span(item);
    tooltip_text.textContent = hint;
    tooltip_text.classList.add(tooltip_style);

    if (onClick && item.DomElement) {
        item.DomElement.addEventListener("click", onClick);
    }
}

export function SideBar(parent: Parent | null) {
    const side_bar = new LayoutConstructor(parent, "linear", [side_bar_style]);

    side_bar.LayoutDirection = "TOP_TO_BOTTOM";
    side_bar.ElementAlignment = "VCENTER";
    side_bar.ParentFill = "FILLY";
    side_bar.DomElement.tabIndex = 0;

    // --- Top Section ---
    const topSection = new LayoutConstructor(side_bar, "linear");
    topSection.LayoutDirection = "TOP_TO_BOTTOM";
    topSection.ElementAlignment = "CENTER";

    // Main navigation
    SideBarIcon(topSection, "dashboard", "Dashboard", () => {
        router.open("/");
    });
    SideBarIcon(topSection, "amp_stories", "Classes", () => {
        router.open("/classes");
    });
    SideBarIcon(topSection, "calendar_month", "Schedule", () => {
        router.open("/calendar");
    });
    SideBarIcon(topSection, "archive", "Document Library", () => {
        router.open("/library");
    });

    // --- Bottom Section ---
    const bottomSection = new LayoutConstructor(side_bar, "linear");
    bottomSection.LayoutDirection = "TOP_TO_BOTTOM";
    bottomSection.ElementAlignment = "CENTER";

    const settingsSpacer = widget.Div(bottomSection);
    settingsSpacer.style.flexGrow = "1";

    SideBarIcon(bottomSection, "settings", "Settings");
    return side_bar.DomElement;
}

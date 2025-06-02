import { LayoutConstructor, Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";
import { css } from "@stitches/core";

const side_bar_style = css({
    backgroundColor: stl_def.schemes.light.secondaryContainer,
    padding: gen_def.general.space[3],
    rowGap: gen_def.general.space[2],
    zIndex: 2000,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "width 0.3s ease-in-out",
});

const side_bar_item_style = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "calc(100% - 4px)",
    minHeight: "64px",
    padding: `${gen_def.general.space[2]} ${gen_def.general.space[1]}`,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "color 0.2s ease",
    color: stl_def.schemes["light-medium-contrast"].secondary,

    "&:hover": {
        color: stl_def.schemes["light-high-contrast"].onSurface,
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

    [`${side_bar_item_style.selector}:hover &`]: {
        transform: "scale(1.1)",
    },
});

const side_bar_hint_style = css({
    fontFamily: `"Lexend", sans-serif`,
    fontOpticalSizing: "auto",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "11px",
    textAlign: "center",
    lineHeight: "1.3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

const expanded_class = css({
    width: "420px",
});

const collapsed_class = css({
    width: "64px",
    overflow: "hidden",

    [`${side_bar_hint_style.selector}`]: {
        display: "none",
    },
});

// --- COMPONENTS ---

function SideBarIcon(parent: Parent, icon: string, hint: string, onClick?: () => void) {
    const item = new LayoutConstructor(parent, "linear", [side_bar_item_style()]);
    item.ElementAlignment = "VCENTER";
    item.LayoutDirection = "LEFT_TO_RIGHT";

    const icon_view = Widget.Span(item);
    icon_view.textContent = icon;
    icon_view.classList.add("material-symbols-outlined", icon_element_style());

    const hint_text = Widget.Span(item);
    hint_text.textContent = hint;
    hint_text.classList.add(side_bar_hint_style());

    if (onClick && item.DomElement) {
        item.DomElement.addEventListener("click", onClick);
    }
}

export function SideBar(parent: Parent) {
    const side_bar = new LayoutConstructor(parent, "linear", [
        side_bar_style(),
        collapsed_class(), // Default to collapsed
    ]);

    side_bar.LayoutDirection = "TOP_TO_BOTTOM";
    side_bar.ElementAlignment = "VCENTER";
    side_bar.DomElement.style.mainAxisAlignment = "SPACE_BETWEEN";
    side_bar.ParentFill = "FILLY";
    side_bar.DomElement.tabIndex = "0"; // This allows our sidebar to be focusable,
    // remember divs and sections by default arent focusable

    let isExpanded = false;

    // --- Top Section ---
    const topSection = new LayoutConstructor(side_bar, "linear");
    topSection.LayoutDirection = "TOP_TO_BOTTOM";
    topSection.ElementAlignment = "CENTER";

    // Toggle button
    const toggleButton = Widget.Span(topSection);
    toggleButton.textContent = "menu";
    toggleButton.classList.add("material-symbols-outlined");
    toggleButton.style.cursor = "pointer";
    toggleButton.style.marginBottom = "12px";
    toggleButton.style.fontSize = "28px";
    toggleButton.addEventListener("click", () => {
        isExpanded = !isExpanded;
        if (side_bar.DomElement) {
            side_bar.DomElement.classList.remove(isExpanded ? collapsed_class() : expanded_class());
            side_bar.DomElement.classList.add(isExpanded ? expanded_class() : collapsed_class());
        }
    });

    // Also handle the case when the sidebar looses focus;
    side_bar.DomElement.addEventListener("focusout", (event: Event) => {
        //@ts-ignore
        requestAnimationFrame(() => {
            side_bar.DomElement.classList.remove(expanded_class());
            side_bar.DomElement.classList.add(collapsed_class());
        });
    });

    // Main navigation
    SideBarIcon(topSection, "dashboard", "Dashboard");
    SideBarIcon(topSection, "amp_stories", "Classes");
    SideBarIcon(topSection, "calendar_month", "Schedule");

    // --- Bottom Section ---
    const bottomSection = new LayoutConstructor(side_bar, "linear");
    bottomSection.LayoutDirection = "TOP_TO_BOTTOM";
    bottomSection.ElementAlignment = "CENTER";

    // Settings button always last
    const settingsSpacer = Widget.Div(bottomSection);
    settingsSpacer.style.flexGrow = "1"; // Push settings to very bottom

    SideBarIcon(bottomSection, "settings", "Settings");
}

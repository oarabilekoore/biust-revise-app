import { LayoutConstructor, Widget } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { css } from "@stitches/core";

// --- STYLING ---

const stl_def = {
    light_theme: {
        default: "#FFFFFF",
        primary: "#E0E0E0",
        secondary: "#BDBDBD",
        surface: "#F5F5F5",
        primary_subtle: "#E8EAF6",
        text_primary: "#212121",
        text_secondary: "#757575",
        on_primary: "#FFFFFF",
        accent_color: "#3F51B5",
    },
    general: {
        space: [0, "4px", "8px", "12px", "16px", "20px"],
    },
};

// Base sidebar styling
const side_bar_style = css({
    backgroundColor: stl_def.light_theme.surface,
    padding: stl_def.general.space[3],
    rowGap: stl_def.general.space[2],
    zIndex: 2000,
    height: "100%",
    boxShadow: "3px 0 15px rgba(0,0,0,0.07)",
    borderRadius: "0px 12px 12px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "width 0.3s ease-in-out",
});

const expanded_class = css({
    width: "220px",
});

// Sidebar item style
const side_bar_item_style = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "calc(100% - 4px)",
    minHeight: "64px",
    padding: `${stl_def.general.space[2]} ${stl_def.general.space[1]}`,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "color 0.2s ease",
    color: stl_def.light_theme.text_secondary,

    "&:hover": {
        color: stl_def.light_theme.accent_color,
    },

    "&:focus-visible": {
        outline: `2px solid ${stl_def.light_theme.accent_color}`,
        outlineOffset: "2px",
    },
});

const icon_element_style = css({
    fontSize: "28px",
    marginBottom: stl_def.general.space[1],
    transition: "transform 0.2s ease",

    [`${side_bar_item_style.selector}:hover &`]: {
        transform: "scale(1.1)",
    },
});

const side_bar_hint_style = css({
    fontSize: "11px",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: "1.3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

// Dynamic width styles
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
    item.ElementAlignment = "CENTER";
    item.LayoutDirection = "TOP_TO_BOTTOM";

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

// --- SIDEBAR FUNCTION ---

export function SideBar(parent: Parent) {
    const side_bar = new LayoutConstructor(parent, "linear", [
        side_bar_style(),
        collapsed_class(), // Default to collapsed
    ]);

    side_bar.LayoutDirection = "TOP_TO_BOTTOM";
    side_bar.ElementAlignment = "VCENTER";
    side_bar.DomElement.style.mainAxisAlignment = "SPACE_BETWEEN";
    side_bar.ParentFill = "FILLY";

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

    // Main navigation
    SideBarIcon(topSection, "dashboard", "Dashboard");
    SideBarIcon(topSection, "amp_stories", "Classes");
    SideBarIcon(topSection, "calendar_month", "Schedule");

    // --- Bottom Section ---
    const bottomSection = new LayoutConstructor(side_bar, "linear");
    bottomSection.LayoutDirection = "TOP_TO_BOTTOM";
    bottomSection.ElementAlignment = "CENTER";

    // Recents label (only shown when expanded)
    const recentsLabel = Widget.Span(bottomSection);
    recentsLabel.textContent = "Recents";
    recentsLabel.style.fontSize = "10px";
    recentsLabel.style.color = stl_def.light_theme.text_secondary;
    recentsLabel.style.fontWeight = "600";
    recentsLabel.style.marginTop = "8px";
    recentsLabel.style.textTransform = "uppercase";
    recentsLabel.classList.add(side_bar_hint_style());

    // Settings button always last
    const settingsSpacer = Widget.Div(bottomSection);
    settingsSpacer.style.flexGrow = "1"; // Push settings to very bottom

    SideBarIcon(bottomSection, "settings", "Settings");
}

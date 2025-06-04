import { LayoutConstructor, widget, css } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";

css(
    {
        backgroundColor: stl_def.schemes.light.secondaryContainer,
        padding: gen_def.general.space[3],
        rowGap: gen_def.general.space[2],
        zIndex: 2000,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "64px" /* Fixed width */,
    },
    "side_bar_style"
);

css(
    {
        display: "flex",
        flexDirection: "column" /* Changed to column for icon and hint */,
        alignItems: "center",
        justifyContent: "center",
        width: "calc(100% - 4px)",
        minHeight: "64px",
        padding: `${gen_def.general.space[3]} ${gen_def.general.space[1]}`,
        borderRadius: "10px",
        cursor: "pointer",
        transition: "color 0.2s ease",
        color: stl_def.schemes["light-medium-contrast"].secondary,
        position: "relative" /* For tooltip positioning */,

        "&:hover": {
            color: stl_def.schemes["light-high-contrast"].onSurface,
        },

        // Show tooltip on hover of the item
        "&:hover .tooltip_style": {
            opacity: 1,
            visibility: "visible",
        },

        "&:focus-visible": {
            outline: `2px solid ${stl_def.schemes["light-medium-contrast"].onSurface}`,
            outlineOffset: "2px",
        },
    },
    "side_bar_item_style"
);

css(
    {
        fontSize: "28px",
        marginBottom: gen_def.general.space[1],
        transition: "transform 0.2s ease",

        //@ts-ignore
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    "icon_element_style"
);

css(
    {
        fontFamily: `"Lexend", sans-serif`,
        fontOpticalSizing: "auto",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "1rem",
        textAlign: "center",
        lineHeight: "1.3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        display: "none",
    },
    "side_bar_hint_style"
);

const tooltip_style = css({
    fontFamily: `"Lexend", sans-serif`,
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
    pointerEvents: "none" /* Allow clicks to pass through */,
    zIndex: 2001 /* Ensure tooltip is above other elements */,
    // Add a small arrow for better visual connection
    "&::before": {
        content: '""',
        position: "absolute",
        right: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        border: "5px solid transparent",
        borderRightColor: stl_def.schemes["light-high-contrast"].onSurface,
    },
});

function SideBarIcon(parent: Parent, icon: string, hint: string, onClick?: () => void) {
    const item = new LayoutConstructor(parent, "linear", ["side_bar_item_style"]);
    item.ElementAlignment = "CENTER";
    item.LayoutDirection = "TOP_TO_BOTTOM";

    const icon_view = widget.Span(item);
    icon_view.textContent = icon;
    icon_view.classList.add("material-symbols-outlined", "icon_element_style");

    // Tooltip element
    const tooltip_text = widget.Span(item);
    tooltip_text.textContent = hint;
    tooltip_text.classList.add(tooltip_style);

    if (onClick && item.DomElement) {
        item.DomElement.addEventListener("click", onClick);
    }

    // Alternative approach: Add event listeners for more reliable hover behavior
    if (item.DomElement) {
        item.DomElement.addEventListener("mouseenter", () => {
            tooltip_text.style.opacity = "1";
            tooltip_text.style.visibility = "visible";
        });

        item.DomElement.addEventListener("mouseleave", () => {
            tooltip_text.style.opacity = "0";
            tooltip_text.style.visibility = "hidden";
        });
    }
}

export function SideBar(parent: Parent) {
    const side_bar = new LayoutConstructor(parent, "linear", ["side_bar_style"]);

    side_bar.LayoutDirection = "TOP_TO_BOTTOM";
    side_bar.ElementAlignment = "VCENTER";
    side_bar.DomElement.style.mainAxisAlignment = "SPACE_BETWEEN";
    side_bar.ParentFill = "FILLY";
    side_bar.DomElement.tabIndex = "0";

    // --- Top Section ---
    const topSection = new LayoutConstructor(side_bar, "linear");
    topSection.LayoutDirection = "TOP_TO_BOTTOM";
    topSection.ElementAlignment = "CENTER";

    // Main navigation
    SideBarIcon(topSection, "dashboard", "Dashboard", () => {
        // router.openRoute("/");
    });
    SideBarIcon(topSection, "amp_stories", "Classes", () => {
        //router.openRoute("/classes");
    });
    SideBarIcon(topSection, "calendar_month", "Schedule", () => {
        // router.openRoute("/calendar");
    });
    SideBarIcon(topSection, "archive", "Document Library", () => {
        //router.openRoute("/library");
    });

    // --- Bottom Section ---
    const bottomSection = new LayoutConstructor(side_bar, "linear");
    bottomSection.LayoutDirection = "TOP_TO_BOTTOM";
    bottomSection.ElementAlignment = "CENTER";

    const settingsSpacer = widget.Div(bottomSection);
    settingsSpacer.style.flexGrow = "1";

    SideBarIcon(bottomSection, "settings", "Settings");
}

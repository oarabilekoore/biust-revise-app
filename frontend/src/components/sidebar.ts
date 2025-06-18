import { html, css } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";
import { router } from "../..";

const side_bar_style = css({
    backgroundColor: stl_def.schemes.light.secondaryContainer,
    padding: gen_def.general.space[3],
    rowGap: gen_def.general.space[2],
    zIndex: 2000,
    height: "100%", // Default for larger screens
    display: "flex",
    flexDirection: "column", // Default for larger screens
    justifyContent: "space-between",
    width: "64px", // Default for larger screens

    //  query for smaller screens: bottom nav bar
    "@ (max-width: 1250px)": {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: `${gen_def.general.space[2]} ${gen_def.general.space[3]}`, // Adjust padding
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)", // Optional: Add a shadow
    },
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

    //  query for smaller screens: hide tooltips
    "@ (max-width: 1250px)": {
        display: "none",
        opacity: 0,
        visibility: "hidden",
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

    //  query for smaller screens: adjust item styling for bottom nav
    "@ (max-width: 1250px)": {
        width: "auto", // Allow items to take natural width
        minHeight: "auto", // Remove fixed min-height
        padding: `${gen_def.general.space[1]} ${gen_def.general.space[2]}`, // Adjust padding
        flexDirection: "column", // Keep icon and text stacked
        "&:hover": {
            color: stl_def.schemes["light-medium-contrast"].secondary, // Revert hover color for consistency
        },
    },
});

const icon_element_style = css({
    fontSize: "28px",
    marginBottom: gen_def.general.space[1],
    transition: "transform 0.2s ease",
    "&:hover": {
        transform: "scale(1.1)",
    },
    //  query for smaller screens: remove margin-bottom to center icon more
    "@ (max-width: 1250px)": {
        marginBottom: 0,
    },
});

function SideBarIcon(parent: HTMLElement, icon: string, hint: string, onClick?: () => void) {
    const item = html.div(parent);
    item.classList.add(
        side_bar_item_style,
        css({
            display: "flex",
            justifyContent: "center",
            flexDirection: "flex-start",
        })
    );

    const icon_view = html.span(item);
    icon_view.textContent = icon;
    icon_view.classList.add("material-symbols-outlined", icon_element_style);

    // Tooltip element
    const tooltip_text = html.span(item);
    tooltip_text.textContent = hint;
    tooltip_text.classList.add(tooltip_style);

    if (onClick && item) {
        item.addEventListener("click", onClick);
    }
}

export function SideBar(parent: HTMLElement | null) {
    const side_bar = html.div(parent);
    side_bar.classList.add(
        side_bar_style,
        css({
            display: "flex",
            height: "100%",
            flexDirection: "column",
            alignContent: "center",
            //  query for smaller screens: adjust alignment for bottom nav
            "@ (max-width: 1250px)": {
                alignContent: "space-around", // Distribute items evenly
                height: "auto",
                // Ensure sidebar content itself is a flex container for its items
                display: "flex",
                flexDirection: "row", // Items inside sidebar are in a row
                justifyContent: "space-around", // Distribute items evenly
            },
        })
    );

    side_bar.tabIndex = 0;

    // --- Top Section ---
    const topSection = html.div(side_bar);
    topSection.classList.add(
        css({
            display: "flex",
            flexDirection: "column",
            //  query for smaller screens: make top section row for bottom nav
            "@ (max-width: 1250px)": {
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%", // Take full width
            },
        })
    );

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
    const bottomSection = html.div(side_bar);
    bottomSection.classList.add(
        css({
            display: "flex",
            flexDirection: "flex-start",
            justifyContent: "center",
            //  query for smaller screens: make bottom section row for bottom nav
            "@ (max-width: 1250px)": {
                display: "none", // Hide bottom section on smaller screens
            },
        })
    );

    const settingsSpacer = html.div(bottomSection);
    settingsSpacer.style.flexGrow = "1";

    SideBarIcon(bottomSection, "settings", "Settings");
    return side_bar;
}

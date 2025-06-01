// This File Holds All Color, Spacing, and Font Constants — Like main.css in CSS-based projects

const style_definition = {
    light_theme: {
        default: "#FAFAFA", // Main sidebar background
        primary: "#E0E7FF", // Icon background or highlights
        secondary: "#C7D2FE", // Hover state or accent
        textPrimary: "#1F2937", // Main text color
        textSecondary: "#4B5563", // Subtext or hint
        border: "#D1D5DB", // Border and divider lines
        shadow: "rgba(0, 0, 0, 0.1)", // Box shadow color
    },
    dark_theme: {
        default: "#1F2937",
        primary: "#374151",
        secondary: "#4B5563",
        textPrimary: "#F9FAFB",
        textSecondary: "#D1D5DB",
        border: "#4B5563",
        shadow: "rgba(255, 255, 255, 0.1)",
    },
    general: {
        space: {
            0: "0px",
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            8: "32px",
        },
        fontSizes: {
            1: "12px",
            2: "14px",
            3: "16px",
            4: "18px",
            5: "20px",
            6: "24px",
        },
        radius: {
            sm: "4px",
            md: "8px",
            lg: "16px",
            full: "9999px",
        },
        shadow: {
            sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
            md: "0 4px 6px rgba(0, 0, 0, 0.1)",
            lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
        },
    },
};

export const stl_def = style_definition;

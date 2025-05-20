import type { Parent } from "innerscope";
import { Widget } from "innerscope";

const tonal_color_object = {
    background: "#CDCBCB",
    primary: "#CDCBCB",
    secondary: "#9E9C9B",
};

export default function FilledButton(text: string, parent: Parent) {
    const button = Widget.Button(text, parent);
    button.style.backgroundColor = tonal_color_object.background;
    button.style.color = "black";
    button.style.borderRadius = "4px";
    button.style.padding = "8px 16px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s ease";
    button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    button.style.outline = "none";
    button.style.border = "none";
    button.style.margin = "4px";
    button.style.width = "200px";
    button.style.height = "50px";
    button.style.fontWeight = "400";
    button.style.fontSize = "1rem";
    button.style.fontFamily = "Unica One, sans-serif";

    // Recommended You Use Css For Effects Like This
    button.onmouseenter = function () {
        button.style.backgroundColor = "#ffffff";
    };
    button.onmouseleave = function () {
        button.style.backgroundColor = tonal_color_object.background;
    };
    return button;
}

import { widget, css } from "viewkit-ui";
import type { Parent } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";

export function ChatBox(root: Parent) {
    const chat_area = widget.LinearLayout(root);
    chat_area.ElementAlignment = "CENTER";
    chat_area.LayoutDirection = "LEFT_TO_RIGHT";

    const chat_area_style = css({
        width: "calc(100% - 40%)",
        height: "auto",
        margin: "0 auto",
    });

    chat_area.DomElement.classList.add(chat_area_style);

    const input_area = widget.LinearLayout(chat_area);
    input_area.LayoutDirection = "LEFT_TO_RIGHT";
    input_area.ElementAlignment = "VCENTER";

    const input_area_style = css({
        backgroundColor: stl_def.schemes.light.surfaceContainerHigh,
        borderRadius: gen_def.radius.sm,
        padding: gen_def.general.space[3],
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: gen_def.general.space[2],
        border: `1px solid ${stl_def.schemes.light.outlineVariant}`,
        boxShadow: gen_def.shadow.sm,
    });

    input_area.DomElement.classList.add(input_area_style);

    const add_button = widget.Button(input_area);
    const add_button_style = css({
        backgroundColor: "transparent",
        color: stl_def.schemes.light.onSurfaceVariant,
        border: "none",
        borderRadius: gen_def.radius.full,
        width: "32px",
        height: "32px",
        cursor: "pointer",
        fontSize: gen_def.fontSizes[4],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        "&:hover": {
            backgroundColor: stl_def.schemes.light.surfaceContainer,
        },
    });

    add_button.classList.add(add_button_style, "material-symbols-outlined");
    add_button.textContent = "add";

    // Text input
    const input = widget.TextInput(input_area);
    const input_style = css({
        fontFamily: `"Lexend", sans-serif`,
        fontWeight: 400,
        flex: "1",
        backgroundColor: "transparent",
        color: stl_def.schemes.light.onSurface,
        border: "none",
        padding: `${gen_def.general.space[2]} ${gen_def.general.space[3]}`,
        fontSize: gen_def.fontSizes[3],
        outline: "none",
        "&::placeholder": {
            color: stl_def.schemes.light.onSurfaceVariant,
        },
    });

    input.classList.add(input_style);
    input.placeholder = "Type your question here...";

    const attachment_button = widget.Button(input_area);
    const attachment_button_style = css({
        backgroundColor: stl_def.schemes["dark-medium-contrast"].secondary,
        color: stl_def.schemes["light-high-contrast"].secondary,
        border: "none",
        borderRadius: gen_def.radius.full,
        width: "32px",
        height: "32px",
        cursor: "pointer",
        fontSize: gen_def.fontSizes[3],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        "&:hover": {
            backgroundColor: stl_def.schemes["dark-high-contrast"].primary,
        },
    });

    attachment_button.classList.add(attachment_button_style, "material-symbols-outlined");
    attachment_button.textContent = "arrow_upward";

    return chat_area;
}

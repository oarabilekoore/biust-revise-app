import { html, css } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";
import { FilledButton, MenuButton, ToggleButton } from "./button";

// TODO :
// Create a t3Chat Like Styled Input Area

export function ChatBox(root: HTMLElement) {
    const input_area = html.Div(root);
    input_area.classList.add(
        css({
            display: "flex",
            width: "calc(100% - 20%)",
            minHeight: "40px",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundColor: stl_def.schemes.light.surfaceContainerHigh,
            borderRadius: gen_def.radius.sm,
            padding: gen_def.general.space[3],
            alignItems: "baseline",
            gap: gen_def.general.space[2],
            border: `1px solid ${stl_def.schemes.light.outlineVariant}`,
            boxShadow: gen_def.shadow.sm,
        })
    );

    const input = html.TextArea(input_area);
    const input_style = css({
        fontFamily: `"Lexend", sans-serif`,
        fontWeight: 400,
        resize: "none",
        overflowY: "none",
        boxSizing: "border-box",
        width: "-webkit-fill-available",
        maxHeight: "180px",
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
    input.oninput = function () {
        console.log("input");
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";
    };

    const button_row = html.Div(input_area);
    button_row.classList.add(
        css({
            display: "flex",
            width: "-webkit-fill-available",
            flexWrap: "no-wrap",
            justifyContent: "space-between",
        })
    );

    const button_row_left = html.Div(button_row);
    button_row_left.classList.add(
        css({
            display: "flex",
            gap: `${gen_def.general.space[3]}`,
            padding: `${gen_def.general.space[3]}`,
        })
    );

    const change_model_btn = MenuButton(button_row_left, "Change Model");

    const search_btn = ToggleButton(button_row_left, {
        label: "Search",
        href: "",
        icon: "travel_explore",
    });

    const button_row_right = html.Div(button_row);
    button_row_right.classList.add(
        css({
            display: "flex",
            gap: `${gen_def.general.space[3]}`,
            padding: `${gen_def.general.space[3]}`,
        })
    );
    const add_button = html.Button(button_row_right);
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

    const send_button = html.Button(button_row_right);
    const send_button_style = css({
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

    send_button.classList.add(send_button_style, "material-symbols-outlined");
    send_button.textContent = "arrow_upward";

    return input_area;
}

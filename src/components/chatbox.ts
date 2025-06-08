import { html, css } from "viewkit-ui";
import { stl_def, gen_def } from "./+definition";
import { LinkButton } from "./button";

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
        width: "-webkit-fill-available",
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

    const button_row = html.Div(input_area);
    button_row.classList.add(
        css({
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: `${gen_def.general.space[2]}`,
            height: "inherit",
        })
    );

    const change_model_btn = LinkButton(button_row, {
        label: "Change Model",
        href: "",
    });

    const search_btn = LinkButton(button_row, {
        label: "Search",
        href: "",
    });

    const add_button = html.Button(button_row);
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

    const send_button = html.Button(button_row);
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

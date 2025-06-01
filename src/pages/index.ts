import { Widget } from "viewkit-ui";
import { app } from "../..";
import FilledButton from "../components/button";

export default function LandingPage() {
    const page = Widget.LinearLayout(app.root);
    page.ParentFill = "FILLXY";
    page.ScrollDirection = "VERTICAL";
    page.ElementAlignment = "CENTER";
    page.ScrollBarVisibility = "HIDDEN";
    page.LayoutDirection = "TOP_TO_BOTTOM";

    page.style.backgroundColor = "#1e1e1e";
    page.style.color = "#ffffff";
    page.style.minHeight = "100vh";
    page.style.fontFamily = "Arial, sans-serif";

    FilledButton("Hello World !", page).onclick = function () {
        alert("Well, Here is a not so subtle way to say Welcome.");
    };
}

import { LayoutConstructor, Widget } from "viewkit-ui";
import { app } from "../..";
import { stl_def } from "../components/+definition";
import { SideBar } from "../components/sidebar";

export default function MainPage() {
    const page = Widget.LinearLayout(app.root);
    page.ParentFill = "FILLXY";
    page.ScrollBarVisibility = "HIDDEN";
    page.LayoutDirection = "LEFT_TO_RIGHT";

    SideBar(page);

    const content_page = new LayoutConstructor(page, "linear");
    content_page.ParentFill = "FILLXY";
    content_page.ScrollDirection = "VERTICAL";
    content_page.ElementAlignment = "LEFT";
    content_page.ScrollBarVisibility = "HIDDEN";
    content_page.LayoutDirection = "LEFT_TO_RIGHT";
    content_page.DomElement.style.backgroundColor = stl_def.light_theme.default;
}

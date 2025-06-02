import { Widget } from "viewkit-ui";
import { app } from "../..";
import { SideBar } from "../components/sidebar";
import Dashboard from "./dashboard";

export default function MainPage() {
    const page = Widget.LinearLayout(app.root);
    page.ParentFill = "FILLXY";
    page.ScrollBarVisibility = "HIDDEN";
    page.LayoutDirection = "LEFT_TO_RIGHT";

    SideBar(page);

    Dashboard(page);
}

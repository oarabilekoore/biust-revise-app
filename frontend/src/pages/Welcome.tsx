import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function WelcomePage (){
    return (
        <main>
            <div className="flex flex-col w-screen h-screen flex-nowrap justify-between">
                <Button variant="outline" size="sm"><Link to="/login">Login</Link></Button>
            </div>
        </main>
    )
}
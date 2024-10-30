import checklogin from "@/action/checklogin/checklogin";
import Startpage from "@/components/startpage/Startpage";
import { redirect } from "next/navigation";
export default async function() {
    const isLoggedIn = await checklogin();

    if (isLoggedIn) {
        redirect('/dashboard')
    }

    return (
        <>
        <Startpage/>
        </>
        
    );
}
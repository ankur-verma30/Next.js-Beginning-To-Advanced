import Cards from "@/Components/card";
import Link from "next/link";

export default function Notifications(){
    return <Cards>
        <div>Notifications</div>
        <Link href='/complex-dashboard/archived'>Archived</Link>
        </Cards>
}
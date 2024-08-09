import Link from "next/link"
import Cards from "@/Components/card"
export default function ArchivedNotifications(){
    return (
        <Cards>
            <div>Archived Notifications</div>
            <Link href='/complex-dashboard'>Default</Link>
        </Cards>
    )
}
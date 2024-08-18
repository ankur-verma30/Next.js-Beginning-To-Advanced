"use client"

import { useTheme } from "../../Components/theme-provider"
import { clientSideFunction } from "@/utils/client-utils"

export default function ClientSideComponentPage() {
    const theme=useTheme()
    const result=clientSideFunction()
    console.log("Client Route Rendered")
    // const result = serverSideFunction()
    return <>
        <h1 style={{ color: theme.colors.primary }}>
            Client Side Component Page
            {result}
        </h1>
       
    </>
}
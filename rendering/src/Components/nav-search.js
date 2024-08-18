"use client"
import { useState } from "react"
export default function NavSearch(){
    console.log("NavSearch Rendered")
    const [search,setSearch]=useState("")
    return (
        <div>
            Searching from the navbar
        </div>
    )
}
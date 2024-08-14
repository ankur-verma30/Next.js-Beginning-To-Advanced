"use client"

import { useState } from "react"

export default function Dashboard(){
    const [name,setName]=useState("")
    console.log("Dashboard Client component")
    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Name : {name}</p>
        </div>
    )
}
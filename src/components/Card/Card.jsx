import React from "react"
import "./index.js"



export default function Card(children, className, style, ...rest){
    const mergedClass=`card-component ${className || ""}`
    return(
        <div>
            {children}
        </div>
    )
}
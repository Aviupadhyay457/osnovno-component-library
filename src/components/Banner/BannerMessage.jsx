import "./index.css"
import React from "react"
import { StatusContext } from "./Banner"
export default function BannerMessage({children,className, style, ...rest}){
    const statusItem=React.useContext(StatusContext)
    let classMerger=`banner-message ${className || ""} `
    return(
        <p className={classMerger} style={{color:`${statusItem.messageColor}`, ...style}} {...rest}>
            {children}
        </p>
    )
}
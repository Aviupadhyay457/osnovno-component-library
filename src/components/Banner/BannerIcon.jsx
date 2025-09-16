import "./index.css"
import React from "react"
import { StatusContext } from "./Banner"
export default function BannerIcon({children,className, style, ...rest}){

    const statusItem=React.useContext(StatusContext)

    let classMerger=`banner-icon ${className || ""} `
    return(
        <div className={classMerger} style={{color:`${statusItem.iconColor}`,...style}} {...rest}>
            {children}
        </div>
    )
}
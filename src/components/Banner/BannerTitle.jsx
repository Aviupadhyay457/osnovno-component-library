import "./index.css"
import React from "react"
import { StatusContext } from "./Banner"
export default function BannerTitle({children,className, style, ...rest}){
    const statusItem=React.useContext(StatusContext)
    let classMerger=`banner-title ${className || ""} `
    return(
        <h1 className={classMerger} style={{color:`${statusItem.titleColor}`,...style}} {...rest}>
            {children}
        </h1>
    )
}
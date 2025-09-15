import {badgeColors} from "./assets/badgeData"
import "./index.css"
export default function Badge({children, theme, shape, className,style, ...rest}){
    let bgColor=""
    let fontColor=""

    let chosenBadge=badgeColors.find(ele=>ele.theme===theme)
    bgColor=chosenBadge.bgColor
    fontColor=chosenBadge.fontColor

    let BadgeStyle={
        backgroundColor:bgColor,
        color:fontColor,
        ...style,
    }
    console.log(BadgeStyle)
    let shapeClass=shape==="pill"?"pill-shape":shape==="curve"?"curve-shape":""
    let badgeClass=`badge ${shapeClass} ${className?className:""}`

    return <div style={BadgeStyle} className={badgeClass} {...rest}>{children}</div>
}
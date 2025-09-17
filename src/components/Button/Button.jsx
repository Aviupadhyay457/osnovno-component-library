import "./index.css"
import clsx from 'clsx';
import React from "react"


import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { MdSkipPrevious } from "react-icons/md";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

export default function Button({children, className,style,action="submit",color="primary",variant="filled", shape="rectangle",icon=true,size="md",iconPosition="top" ,...rest}){


    let restObj={...rest}
    console.log(restObj.disabled)
    action=["delete","cancel","edit","save","upload","download","submit","next","previous","play","pause"].includes(action)?action:"submit"
    color=["primary","secondary","success","danger","warning","info","light","dark"].includes(color)?color:"dark"
    shape=["pill","circle","round","rectangle"].includes(shape)?shape:"rectangle"
    variant=["filled","outline","ghost"].includes(variant)?variant:"filled"
    size=["sm","md","lg"].includes(size)?size:"md"
    iconPosition=["top","bottom","left","right"].includes(iconPosition)?iconPosition:"top"

    if(variant==="outline"){
        variant=`outline-${color}`   
    }
    if(variant==="ghost"){
        variant=`ghost-${color}`
        
    }
    
    const iconSizeStyle={
        fontSize:size==="sm"?"1rem":size==="lg"?"1.5rem":"1.25rem"
    }
    console.log(style)
    const BtnClass=clsx("btn",action,color,shape,variant, size, `iconPosition-${iconPosition}`, className, restObj.disabled &&"disabled")
    return(
        <button className={BtnClass} style={style} {...rest}>
            {
                icon && (
                (action==="delete" && <FaTrashCan style={iconSizeStyle} />)
                ||
                (action==="cancel" && <MdCancel style={iconSizeStyle}/>)
                ||
                (action==="edit" && <FaEdit style={iconSizeStyle}/>)
                ||
                (action==="save" && <FaSave style={iconSizeStyle}/>)
                ||
                (action==="upload" && <FaCloudUploadAlt style={iconSizeStyle}/>)
                ||
                (action==="download" && <FaCloudDownloadAlt style={iconSizeStyle}/>)
                ||
                (action==="submit" && <IoSendSharp style={iconSizeStyle}/>)
                ||
                (action==="next" && <GiNextButton style={iconSizeStyle}/>)
                ||
                (action==="previous" && <MdSkipPrevious style={iconSizeStyle}/>)
                ||
                (action==="play" && <FaPlay style={iconSizeStyle}/>)
                ||
                (action==="pause" && <FaRegPauseCircle style={iconSizeStyle}/>)
                ||
                <IoSendSharp/>
                )
                
            }
            {children}
        </button>
    )
}
import "./index.css"
import { statusData } from "./assets/BannerData"
import React from "react"
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import BannerIcon from "./BannerIcon";



let StatusContext=React.createContext()



export default function Banner({status,children,style, className, iconStyle, ...rest}){


    let statusItem=statusData.find(ele=>ele.statusName===status)||statusData[3] 
    if(status!=="neutral" && statusItem.statusName==="neutral"){
        console.warn('Use a valid status name. Default:"neutral"')
    }

    let customIcon=true
    const ele=React.Children.toArray(children).some(child=>React.isValidElement(child) && child.type===BannerIcon)


    customIcon=!ele
    let classMerger=`banner ${className || ""} `
    
    return (
        <>
            <div className={classMerger} style={{backgroundColor:`${statusItem.bgColor}`,...style}}  {...rest}>

             {customIcon &&
               <div className="banner-icon" style={{color:`${statusItem.iconColor}`,...iconStyle,display:"flex"}}>
                    {statusItem.statusName==="success"
                    && <FaCheckCircle/>
                    }
                    {statusItem.statusName==="error"
                        && <FaCircleXmark/>
                    }
                    {statusItem.statusName==="warning"
                        && <IoIosWarning/>
                    }
                    {statusItem.statusName==="neutral"
                        && <FaInfoCircle/>
                    }
                </div>  }


                <StatusContext.Provider value={statusItem}>
                    {children}
                </StatusContext.Provider>


            </div>       
        </> 
    )
}
export {StatusContext}
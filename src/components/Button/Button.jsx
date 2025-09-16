import "./index.css"
import clsx from 'clsx';
import React from "react"


import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { MdSkipPrevious } from "react-icons/md";
import { FaRegPauseCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function Button({children, className,style,action, variant, shape, ...rest}){

    const actionItems = {
        delete: "danger",
        cancel: "danger",
        edit: "warning",
        save: "primary",
        upload: "primary",
        download: "success",
        submit: "success",
        next: "secondary",
        previous: "secondary",
        play: "info",
    }
    let actionElement=actionItems[action]||"primary"
    const variantItems={
        filled:actionElement,
        outline:`outline-${actionElement}`
    }
    shape=["pill","circle","round","rectangle"].includes(shape)?shape:"rectangle"
    
    const BtnClass=clsx("btn",shape,actionElement,variantItems[variant], className)
    return(
        <button className={BtnClass}>
            {children}
        </button>
    )
}
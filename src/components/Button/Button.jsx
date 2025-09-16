import React from "react"
import "./index.css"

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


export default function Button({children, className,style, variant, ...rest}){
    return(
        <button>
            {children}
        </button>
    )
}
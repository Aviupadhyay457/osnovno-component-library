import Badge from "./components/Badge/Badge.jsx"
import BannerIcon from "./components/Banner/BannerIcon.jsx"
import {Banner} from "./components/Banner/index.js"
import { IoIosWarning } from "react-icons/io";
export default function App(){
  return(
    <Banner>
      <Banner.icon><IoIosWarning/></Banner.icon>
      <Banner.title>congratulations</Banner.title>
      <Banner.message>this is a custom message, i dont know what i am writing.</Banner.message>
    </Banner>
  )
}


  // <div style={{display:"flex", gap:"20px"}}>
  //   <Badge theme="pin" shape="pill" style={{display:"block"}}>Hello</Badge>
  //   <Badge theme="light-pink" shape="curve">Hello</Badge>
  //   <Badge theme="indigo" onClick={()=>console.log("hello")}>Hello</Badge>
  //   <Badge theme="pink" style={{fontSize:"16px" }} shape="32edsa">Hello</Badge>
  // </div>
import {Banner} from "./components/Banner/index.js"
import Button from "./components/Button/Button.jsx";
import { FaCircleXmark } from "react-icons/fa6";

export default function App(){
  return(
    <Button>Upload</Button>
  )
}

  


























  //for badge:

  // <div style={{display:"flex", gap:"20px"}}>
  //   <Badge theme="pin" shape="pill" style={{display:"block"}}>Hello</Badge>
  //   <Badge theme="light-pink" shape="curve">Hello</Badge>
  //   <Badge theme="indigo" onClick={()=>console.log("hello")}>Hello</Badge>
  //   <Badge theme="pink" style={{fontSize:"16px" }} shape="32edsa">Hello</Badge>
  // </div>

  // for Banner:

    // <div style={{display:"flex", flexDirection:"column", gap:"20px", margin:"20px 40px"}}>
    //   <Banner status="success">
    //     <Banner.title>Congratulations!</Banner.title>
    //     <Banner.icon><FaCircleXmark style={{color:"red"}}/></Banner.icon>
    //     <Banner.message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Banner.message>
    //   </Banner>
    //   <Banner status="warning">
    //     <Banner.title>Attention</Banner.title>
    //     {/* <Banner.icon></Banner.icon> */}
    //     <Banner.message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Banner.message>
    //   </Banner>
    //   <Banner status="error">    
    //     <Banner.title>There is a problem with your application</Banner.title>
    //     <Banner.message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Banner.message>
    //   </Banner>
    //   <Banner status="neutral">
    //     <Banner.title >Update available</Banner.title>
    //     <Banner.message >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Banner.message>
    //   </Banner>
    //   <Banner status="warn">
    //     <Banner.title>Congratulations!</Banner.title>
    //     <Banner.message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Banner.message>
    //   </Banner>
    // </div>
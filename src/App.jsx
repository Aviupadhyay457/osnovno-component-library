import {Banner} from "./components/Banner/index.js"
import {Button} from "./components/Button/index.js";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import ButtonIcon from "./components/Button/ButtonIcon.jsx";
export default function App(){
  return(
    <div style={{display:"flex", gap:"10px", padding:"100px", flexDirection:"row", flexWrap:"wrap", background:"lightBlue"}}>
      <Button  shape="pill" action="delete" color="danger" icon={false} size="lg" iconPosition="left" >
        <Button.icon><FaCloudUploadAlt/></Button.icon>
        <Button.text>Delete</Button.text>
      </Button>
      <Button  shape="pill" action="cancel" color="danger" variant="outline" size="sm" iconPosition="bottom">
        <Button.text>Cancel</Button.text>
        <Button.icon><MdCancel/></Button.icon>
      </Button>
      <Button  shape="round" action="edit" color="warning" variant="ghost" iconPosition="right">
        <Button.text>delete</Button.text>
      </Button>
      <Button  shape="circle" action="save" color="success" variant="filled">
       <Button.text>save</Button.text>
      </Button>
      <Button  shape="pill" action="upload" color="dark" variant="ghost"></Button>
      <Button  shape="rectangle" action="download" color="primary" variant="filled">
        <Button.text>download</Button.text>
      </Button>
      <Button  shape="round" action="submit" color="info" variant="outline" size="sm">
        <Button.text>Send Mail</Button.text>
      </Button>
      <Button  shape="pill" action="next"  color="dark"  variant="outline" size="lg">
        <Button.text>Explore</Button.text>
      </Button>
      <Button  shape="rectangle" action="previous"  color="info"  variant="ghost"></Button>
      <Button  shape="rectangle" action="play" color="light" variant="outline" icon={false}>
        <Button.text>Resume</Button.text>
      </Button>
      <Button  shape="pill" action="pause" color="danger" variant="filled">
        <Button.text>Pause</Button.text>
      </Button>
      <Button shape="round" size="md">
      </Button>
      <Button shape="round" size="lg" action="upload" color="primary" variant="filled" style={{padding:"13px 10px", }}></Button>
    </div>
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
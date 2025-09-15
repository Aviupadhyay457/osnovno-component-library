import Badge from "./components/Badge/Badge.jsx"

export default function App(){
  return(
  <div style={{display:"flex", gap:"20px"}}>
    <Badge theme="pin" shape="pill" style={{display:"block"}}>Hello</Badge>
    <Badge theme="light-pink" shape="curve">Hello</Badge>
    <Badge theme="indigo" onClick={()=>console.log("hello")}>Hello</Badge>
    <Badge theme="pink" style={{fontSize:"16px" }} shape="32edsa">Hello</Badge>
  </div>
  )
}
import { useState } from "react";
import { Door } from "../components/Door";
import { Gift } from "../components/Gift";
import ModelDoor from "../model/door";


export default function Home() {
  const [door, setDoor] = useState( new ModelDoor(1))
  
  return (
    <div style={{display: "flex"}}>
  {/* <Gift /> */}
  

  <Door value={door} onChange={newDoor => setDoor(newDoor)} /> 
 
  </div>
  )
}

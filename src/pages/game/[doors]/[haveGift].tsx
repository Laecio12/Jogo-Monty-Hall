import React, { useEffect, useState } from "react";
import { Door } from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/createDoors";
import  Link  from 'next/link';
import styles from "./styles.module.scss";
import { useRouter} from 'next/router';


export default function Game() {

  const router = useRouter()

  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    setDoors(createDoors(doors, haveGift))

  }, [router?.query])

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} 
      onChange={newDoor => setDoors(updateDoors(doors, newDoor))} /> 
    })
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.doors}>
        {renderDoors()}
        
      </div> 

      
        <Link href="/"> 
          <button type="submit">Reiniciar jogo</button>
        </Link>

     
    </div>
  )

}
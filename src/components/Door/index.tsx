import { FormEvent } from 'react';
import  DoorModel  from '../../model/door';
import styles from './styles.module.scss';

interface DoorPros {
  value: DoorModel;
  onChange:(newDoor: DoorModel) => void;
}

export function Door({ value, onChange }: DoorPros) {
  const selected = value.selected && !value.opened ? styles.selected : '';

  function handleAlterSelection(event: FormEvent) {
    event.preventDefault();
    const door = value;
    onChange(door.alterSelection())

  }
  function handleOpenDoor(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    const door = value;
    onChange(door.open())

  }

  function renderDoor() {

    return (
     
      <div className={styles.door}>
        <div className={styles.number}>{value.number}</div>
        <div className={styles.door_handle} onClick={handleOpenDoor}></div>
      </div>
      
    )

  }

  return (
    <div className={styles.container} onClick={handleAlterSelection}>
       <div className={`${styles.frame} ${selected}`}>
          {value.opened ? false : renderDoor()}
       </div>

      <div className={styles.floor}>

      </div>

    </div>

  )
}
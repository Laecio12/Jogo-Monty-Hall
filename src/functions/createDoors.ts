import ModelDoor from "../model/door";

export function createDoors(quantity: number, doorHaveGift: number): ModelDoor[] {
  return Array.from({ length: quantity}, (_, index) => {
    const number = index + 1;
    const haveGift = number === doorHaveGift;
    return new ModelDoor(number, haveGift);
  })

}

export function updateDoors(doors: ModelDoor[], updatedDoor: ModelDoor) {

  return doors.map(currentDoor => {
    const isEqualsUpdated = currentDoor.number === updatedDoor.number 


    if(isEqualsUpdated) {
      return updatedDoor;
    }else {
      return updatedDoor.opened ? currentDoor : currentDoor.deselect()
    }
  })
}
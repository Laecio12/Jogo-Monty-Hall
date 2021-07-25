import ModelDoor from "../model/door";

export function createDoor(quantity: number, selected: number): ModelDoor[] {
  return Array.from({ length: quantity}, (_, index) => {
    const number = index + 1;
    const haveGift = number === selected;
    return new ModelDoor(number, haveGift);
  })

}
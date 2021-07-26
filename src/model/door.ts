
export default class ModelDoor {
  #number: number
  #haveGift: boolean
  #selected: boolean
  #opened: boolean

  constructor(number: number, haveGift = false, opened = false, selected = false) {
    this.#number = number
    this.#haveGift = haveGift 
    this.#selected = selected 
    this.#opened = opened


  }

  get number() {
    return this.#number

  }
  get haveGift() {
    return this.#haveGift

  }
  get opened() {
    return this.#opened
  }
  get closed() {
    return !this.#opened
  }
  get selected() {
    return this.#selected
  }

  deselect() {
    const selected = false

    return new ModelDoor(this.number, this.haveGift, selected, this.opened)
  }

  alterSelection() {
    const selected = !this.selected

    return new ModelDoor(this.number, this.haveGift, selected, this.opened)
  }

  open() {
    const opened = true

    return new ModelDoor(this.number, this.haveGift, this.selected, opened)
  }
}
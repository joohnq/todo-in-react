export class Item {

    static idPosition = 0

    constructor(text){
        this.id = Item.idPosition++
        this.text = text
        this.done = false
    }
}
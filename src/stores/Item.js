import { observable } from 'mobx'


export class Item {
    @observable name
    @observable completed = false
    @observable location
    constructor(name) {
        this.name = name
        this.location = "Super Sell"

    }
}




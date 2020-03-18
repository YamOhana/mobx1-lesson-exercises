import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
  @action  addItem = (item) => {
    this.list.push(new Item(item))

    }
   @action editItem = (itemName, newLocation) => {

    for(let item of this.list){

        if(item.name === itemName){
            item.location = newLocation
            break
        }
    }

}
    @action deleteItem = (item) => {

        for(let i in this.list){

            if(this.list[i].name===item){
                this.list.splice(i,1)
                break
            }
        }


    }
}


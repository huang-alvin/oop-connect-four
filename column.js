export default class Column{
    constructor(){
        this.arr = [null, null, null, null, null, null]
    }
    add(playerNum){
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === null) {
                this.arr[i] = playerNum
            }
        }
    }
    getTokenAt(num){
        if(this.arr[num] === null) {
        return null;
    } else if (this.arr[num] === 1) {
        return 1;
    } else if (this.arr[num] === 2) {
        return 2;
    }
}
// if rowIdx === p2 return 2 ,else return null

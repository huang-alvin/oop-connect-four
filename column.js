export default class Column {
  constructor() {
    this.arr = [null, null, null, null, null, null];
  }
  add(playerNum) {
    this.isFull()
    if(!this.isFull()){
      for (let i = this.arr.length - 1; i >= 0; i--) {
        if (this.arr[i] === null) {
          this.arr[i] = playerNum;
          return;
        }
      }
    }
  }
  getTokenAt(num) {
    if (this.arr[num] === null) {
      return null;
    } else if (this.arr[num] === 1) {
      return 1;
    } else if (this.arr[num] === 2) {
      return 2;
    }
  }

  isFull () {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.arr[i] === null) {return false}

    }
    return true;
  }

  // isfull, add calls is full if isfull no forloop in add
}
// if rowIdx === p2 return 2 ,else return

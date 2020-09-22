class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

//add to end of list/tail
append(value) {
  //if list empty
  if (!this.tail) {
    this.head = this.tail = new Node(value)
  }  
  // not empty
  else {
    let oldTail = this.tail
    this.tail = new Node(value) // sets tail as new value
    oldTail.next = this.tail // connects old tail --> this.tail
    this.tail.prev = oldTail // connects tail to -> old tail
  }
}

//add to beginning of list/head
prepend(value) {
  if (!this.head) {
    this.head = this.tail = new Node(value)
  } else {
    let oldHead = this.head
    this.head = new Node(value)
    oldHead.prev = this.head
    this.head.next = oldHead
    
  }
}


deleteHead() {
  if(!this.head) {
    return null
  } else {
    let removedHead = this.head
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }

    return removedHead.value
  }
}

deleteTail() {
  if(!this.tail) {
    return null
  } else {
    let removedTail = this.tail
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }

    return removedTail
  }
}

search(value) {
  let currentNode = this.head
  while(currentNode) {
    if (currentNode.value === value) {
      return currentNode
    }

    currentNode = currentNode.next
  }

  return "Could Not Find"
}
 


}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

let list = new LinkedList()

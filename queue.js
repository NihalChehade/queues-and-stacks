/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const currentNode = new Node(val);
    if(this.first === null & this.last === null){
      this.first = currentNode;
      this.last = currentNode;
      this.size += 1;
    }else {
      this.last.next = currentNode;
      this.last = currentNode;
      this.size += 1;
    }
    return undefined;
  

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error();
    }else {
      const dequeuedNodeVal = this.first.val;
      const newHead = this.first.next;
      this.first = newHead;
      this.size -=1;
      return dequeuedNodeVal;
    
    }
    
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }else{
      return false;
    }

  }
}

module.exports = Queue;

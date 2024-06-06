/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const currentNode = new Node(val);
    if(this.first === null & this.last === null){
      this.first = currentNode;
      this.last = currentNode;
      this.size += 1;
    }else {
      currentNode.next = this.first;
      this.first = currentNode;
      this.size += 1;
    }
    return undefined;
  


  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw new Error();
    }else {
      const poppedNodeVal = this.first.val;
      const newHead = this.first.next;
      this.first = newHead;
      this.size -=1;
      return poppedNodeVal;
    
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
     return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Stack;

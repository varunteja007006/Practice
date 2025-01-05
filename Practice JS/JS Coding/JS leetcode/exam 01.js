/**
 * Question 1:
 * Find Pivot left sum = right sum
 *
 * Input: [1,4,2,5,0]
 * Output: 2
 *
 * Input: [2,3,4,1,4,5]
 * Output: 1
 *
 *
 */

function pivot(arr) {
  let totalSum = arr.reduce((acc, initValue) => acc + initValue, 0);
  let leftS = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightS = totalSum - leftS - arr[i];
    if (rightS === leftS) {
      return arr[i];
    }
    leftS += arr[i];
  }
  return -1;
}

/**
 * Question 2: Tree structure
 * output: Tree Structure: Node {
            root: 1,
            left: Node { root: 2, left: null, right: null },
            right: Node { root: 3, left: null, right: null }
            }
 */

class Node {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

// console.log("Tree Structure:", root);

/**
 * Question 3: Print the midpoint of the LinkedList
 *
 * 20 -> 07 -> 12
 *
 * ans = 77
 */

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new LinkedListNode(20);
head.next = new LinkedListNode(7);
head.next.next = new LinkedListNode(12);
// head.next.next.next = new LinkedListNode(14); // for even length it throws an error

console.log("LinkedList Structure:", head);

const getLinkedListLength = (head) => {
  let count = 0;
  let temp = head;
  while (temp) {
    count++;
    temp = temp.next;
  }
  return count;
};

console.log("\nLength of the linked list: ", getLinkedListLength(head));

const getLinkedListMidPoint = (head) => {
  let length = getLinkedListLength(head);

  if (length % 2 === 0) throw new Error("Not a valid linked list");

  let count = 0;
  let temp = head;
  while (count < Math.floor(length / 2)) {
    count++;
    temp = temp.next;
  }
  return temp.val;
};

console.log("\nMidpoint of the linked list: ", getLinkedListMidPoint(head));

/**
 * Question 4:
 * Print the linked list
 *
 * 20 -> 07 -> 12
 *
 * ans = 20 -> 07 -> 12
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  delete(val) {
    if (!this.head) return;
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

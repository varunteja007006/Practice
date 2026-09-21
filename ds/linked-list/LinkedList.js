// Class definition for Node
class Node {
    // Initialize the node with a key
    constructor(key) {
    this.key = key;
    this.next = null;
    }
    }
    
    // Class definition for Linked List
    class LinkedList {
    // Initialize the linked list with a head node
    constructor() {
    this.head = null;
    }
    
    // Add a new node with key "new_key" at the beginning of the linked list
    push(new_key) {
    let new_node = new Node(new_key);
    new_node.next = this.head;
    this.head = new_node;
    }
    }
    
    // Create a linked list object
    let llist = new LinkedList();
    
    // Add new nodes to the linked list
    llist.push(10);
    llist.push(30);
    llist.push(11);
    llist.push(21);
    llist.push(14);
    
    // Key to search for in the linked list
    let x = 22;
    
    // Create a temp variable to traverse the linked list
    let temp = llist.head;
    
    // Array to store the keys in the linked list
    let v = [];
    
    // Traverse the linked list and store the keys in the array "v"
    while (temp) {
    v.push(temp.key);
    temp = temp.next;
    }
    
    // Check if "x" is in the array "v"
    if (v.includes(x)) {
    console.log("YES");
    } else {
    console.log("NO");
    }
    
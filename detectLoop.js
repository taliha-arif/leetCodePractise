class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}
function detectLoop(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow===fast){
        return true;
    }
  }
  return false;
}

// Create a hard-coded linked list:
// 10 -> 20 -> 30 -> 40 -> 50 -> 60
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

head.next.next.next.next = head;

if (detectLoop(head)) console.log("true");
else console.log("false");

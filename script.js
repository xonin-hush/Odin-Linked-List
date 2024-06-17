class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(head) {
    this.head = null;
  }
  //   append(data) {
  //     let temp = "";
  //     let newNode=new Node(data)
  //     console.log(newNode)
  //     if (this.head == null) {
  //       this.head.value = data;
  //     } else {
  //       if (this.head.next == null) {
  //         this.head.next = data;
  //       } else {
  //         temp = this.head;
  //         if (temp.next.next == null) {
  //           temp.next.next = data;
  //           console.log(temp.next.next);
  //         }
  //       }
  //     }
  //   }
  prepend(data) {
    let newNode = new Node(data);
    let next1 = newNode.next;
    console.log({next1})
    console.log({ newNode });
    console.log(this.head);
    if (this.head == null) {
      this.head = newNode;
      console.log("ha",this.head)
    } else {
      newNode.next = this.head;
      this.head = newNode;
      console.log("hello",this.head);
    }
  }
}

L = new LinkedList();
L.prepend(8);
L.prepend(99)
L.prepend(33)
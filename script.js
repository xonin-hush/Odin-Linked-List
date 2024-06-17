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
  printAll() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      let temp = this.head;
      if (temp.value != null) {
        console.log(temp.value);
      }
      while (temp.next != null && temp.value != null) {
        temp = temp.next;
        console.log(temp.value);
      }
    }
  }
  prepend(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  size() {
    let temp = this.head;
    let i = 0;
    if (this.head == null) {
      console.log("Size is 0");
    } else {
      while (temp != null) {
        i++;
        temp = temp.next;
      }
      console.log("Size is: ",i);
    }
  }
  showHead(){
    if(this.head==null){
      console.log("list is empty")
    }
    else{
      console.log("Head is: ",this.head.value)
    }

  }
}

L = new LinkedList();
L.prepend(8);
L.prepend(99);
L.prepend(33);
L.prepend(22);
L.prepend(84);
L.prepend(33);
L.size();
L.showHead()
// L.printAll();

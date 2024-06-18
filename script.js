const { stat } = require("fs");

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
      console.log("Size is: ", i);
      return i;
    }
  }
  showHead() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      console.log("Head is: ", this.head.value);
    }
  }
  showTail() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      console.log("Tail is :", temp.value);
    }
  }
  at(index) {
    let temp = this.head;
    if (index <= this.size()) {
      if (this.head == null) {
        console.log("list is empty");
      } else {
        if (index == 0) {
          console.log(this.head.value);
        } else {
          let i = 0;

          while (i != index) {
            temp = temp.next;
            i++;
          }
          console.log(temp.value);
        }
      }
    } else {
      console.log("there is no such index (List is smaller than that)");
    }
  }
  pop() {
    let temp1 = this.head;
    let temp2 = "";
    if (this.head == null) {
      console.log("list is empty");
    } else {
      if (this.head.next == null) {
        this.head = null;
        console.log("head removed");
      } else {
        while (temp1.next != null) {
          if (temp1.next != null) {
            temp2 = temp1;
            temp1 = temp1.next;
          }
          if (temp1.next == null) {
            temp2.next = null;
            console.log("Last node has been removed");
          }
        }
      }
    }
  }
  append(data) {
    let temp1 = this.head;
    let temp2 = "";
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      console.log(this.head);
      console.log("NewNode Added");
    } else {
      if (this.head.next == null) {
        this.head.next = newNode;
        console.log("NewNode added");
      } else {
        while (temp1.next != null) {
          if (temp1.next != null) {
            temp2 = temp1;
            temp1 = temp1.next;
          }
          if (temp1.next == null) {
            temp2.next.next = newNode;
            console.log("NewNode added to end of list");
            break;
          }
        }
      }
    }
  }
  contains(data) {
    let status = "";
    let temp = this.head;
    if (this.head == null) {
      console.log("False");
    } else {
      if (temp.value == data) {
        console.log("True");
        status = "true";
        return;
      } else {
        while (temp.next != null) {
          if (temp.value == data) {
            console.log("True");
            status = "true";
            break;
          } else {
            temp = temp.next;
            console.log(temp.next);
          }
        }
        if (temp.value == data && status != "true") {
          status = "true";
          console.log("true");
        } else {
          if (status != "true") {
            console.log("False");
          }
        }
      }
    }
  }
}
L = new LinkedList();
// L.prepend(8);
// L.prepend(99);
// L.prepend(33);
// L.prepend(22);
// L.prepend(84);
// L.prepend(33);
// L.size();
// L.showHead();
// L.showTail();
// L.at(10);
// L.pop();
L.append(339);
L.append(123);
L.append(2942);
L.contains(339);
L.printAll();


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const LinkedList = require('../js/LinkedList').LinkedList;
const linkedlist1 = new LinkedList();
linkedlist1.append(1);
linkedlist1.append(8);
const linkedlist2 = new LinkedList();
linkedlist2.append(0);
// var addTwoNumbers = function(l1, l2) {
//     let l3;
//     let num;
//     let flag = false;
//     let il1 = l1;
//     let il2 = l2;
//     let il3 = null;
//     while(il1 && il2) {
//         num = il1.val + il2.val;
//         if(flag) {
//             num = num + 1;
//             flag = false;
//         }
//         if(num >= 10) {
//             num = num -10;
//             flag = true;
//         }
//         let list = new ListNode(num)
//         if(il3) {
//             il3.next = list;
//             il3 = list;
//         }else {
//             il3 = l3 = new ListNode(num)
//         }
//         il1 = il1.next;
//         il2 = il2.next;
//     }
//     while(il2) {
//         num = il2.val;
//         if(flag) {
//             num = num+1;
//             flag = false;
//         }
//         if(num>=10) {
//             num = num - 10;
//             flag = true;
//         }
//         il3.next = new ListNode(num);
//         il3 = il3.next;
//         il2 = il2.next
//     }
//     while(il1) {
//         num = il1.val;
//         if(flag) {
//             num = num+1;
//             flag = false;
//         }
//         if(num>=10) {
//             num = num - 10;
//             flag = true;
//         }
//         il3.next = new ListNode(num)
//         il3 = il3.next
//         il1 = il1.next
//     }
//     if(flag) {
//         il3.next = {
//             val: 1,
//             next: null
//         }
//     }
//     return l3
// };
var addTwoNumbers = function(l1, l2) {
    let head = new NodeList(0);
    let p1 = l1, p2 = l2, curr = head, flag = 0;
    let num;
    while(p1 || p2) {
        num = (p1? p1.val:0) + (p2? p2.val:0)+ flag;
        flag = num>10 ? 1: 0;
        let node = new NodeList(num%10);
        curr.next = node;
        curr = curr.next;
        p1 = p1? p1.next: null;
        p2 = p2? p2.next: null;
    }
    return head.next
}

console.log(addTwoNumbers(linkedlist1.head, linkedlist2.head))
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]


var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = carry;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        carry = Math.floor(sum/10);
        curr.next = new ListNode(sum%10);
        curr = curr.next;
    }
    return dummy.next;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([0],[0]));

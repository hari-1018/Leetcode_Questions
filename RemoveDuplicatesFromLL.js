// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    let result = head;
    while(head && head.next){
        if(head.val === head.next.val){
            head.next=head.next.next;
        }else{
            head = head.next;
        }
    }
    return result;
};
console.log(deleteDuplicates([1,1,2]));
console.log(deleteDuplicates([1,1,2,3,3,3]));
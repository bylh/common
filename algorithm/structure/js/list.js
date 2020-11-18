function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    let head = new ListNode()
    cur = head
    for (let val of arr) {
        cur.next = new ListNode(val)
        cur = cur.next
    }
    return head.next
}

module.exports = {
    createList
}
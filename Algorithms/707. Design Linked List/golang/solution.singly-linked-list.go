type MyLinkedList struct {
	size int
	head *ListNode
}

func Constructor() MyLinkedList {
	return MyLinkedList{
		size: 0,
		head: new(ListNode),
	}
}

func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.size {
		return -1
	}

	curr := this.head
	for i := 0; i <= index; i++ {
		curr = curr.Next
	}

	return curr.Val
}

func (this *MyLinkedList) AddAtHead(val int) {
	this.AddAtIndex(0, val)
}

func (this *MyLinkedList) AddAtTail(val int) {
	this.AddAtIndex(this.size, val)
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.size {
		return
	}

	if index < 0 {
		index = 0
	}

	this.size++
	prev := this.head
	for i := 0; i < index; i++ {
		prev = prev.Next
	}
	toAdd := &ListNode{
		Val: val,
	}
	toAdd.Next = prev.Next
	prev.Next = toAdd
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.size {
		return
	}

	this.size--
	prev := this.head
	for i := 0; i < index; i++ {
		prev = prev.Next
	}
	prev.Next = prev.Next.Next
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
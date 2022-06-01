type Node struct {
	Val        int
	Next, Prev *Node
}

type MyLinkedList struct {
	size       int
	head, tail *Node
}

func Constructor() MyLinkedList {
	head := &Node{Val: 0}
	tail := &Node{Val: 0}
	head.Next = tail
	tail.Prev = head
	return MyLinkedList{
		head: head,
		tail: tail,
		size: 0,
	}
}

func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.size {
		return -1
	}

	var curr *Node
	if index+1 < this.size-index {
		curr = this.head
		for i := 0; i <= index; i++ {
			curr = curr.Next
		}
	} else {
		curr = this.tail
		for i := this.size - 1; i >= index; i-- {
			curr = curr.Prev
		}
	}
	return curr.Val
}

func (this *MyLinkedList) AddAtHead(val int) {
	pred, succ := this.head, this.head.Next

	this.size++
	toAdd := &Node{
		Val:  val,
		Prev: pred,
		Next: succ,
	}
	pred.Next = toAdd
	succ.Prev = toAdd
}

func (this *MyLinkedList) AddAtTail(val int) {
	succ, pred := this.tail, this.tail.Prev

	this.size++
	toAdd := &Node{
		Val:  val,
		Prev: pred,
		Next: succ,
	}
	pred.Next = toAdd
	succ.Prev = toAdd
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.size {
		return
	}

	if index < 0 {
		index = 0
	}

	var pred, succ *Node
	if index < this.size-index {
		pred = this.head
		for i := 0; i < index; i++ {
			pred = pred.Next
		}
		succ = pred.Next
	} else {
		succ = this.tail
		for i := this.size - 1; i >= index; i-- {
			succ = succ.Prev
		}
		pred = succ.Prev
	}

	this.size++
	toAdd := &Node{
		Val:  val,
		Prev: pred,
		Next: succ,
	}
	pred.Next = toAdd
	succ.Prev = toAdd
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.size {
		return
	}

	var pred, succ *Node
	if index < this.size-index {
		pred = this.head
		for i := 0; i < index; i++ {
			pred = pred.Next
		}
		succ = pred.Next.Next
	} else {
		succ = this.tail
		for i := 0; i < this.size-index-1; i++ {
			succ = succ.Prev
		}
		pred = succ.Prev.Prev
	}
	this.size--
	pred.Next = succ
	succ.Prev = pred
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
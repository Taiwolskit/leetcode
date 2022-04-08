class KthLargest(val k: Int, nums: IntArray) {

    private val heap = PriorityQueue<Int> { a, b -> a - b }

    init {
        nums.forEach { heap.offer(it) }
    }

    fun add(value: Int): Int {
        heap.offer(value)
        while (heap.size > k) {
            heap.poll()
        }
        return heap.peek()
    }
}

/**
 * Your KthLargest object will be instantiated and called as such: var obj = KthLargest(k, nums) var
 * param_1 = obj.add(`val`)
 */

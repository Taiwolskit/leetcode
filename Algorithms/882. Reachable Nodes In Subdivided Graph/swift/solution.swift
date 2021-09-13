class Solution {
    class MinHeap<T> {
        var nodes: [T] = []
        var orderCriteria: (T, T) -> Bool
        var isEmpty: Bool {
            get {
                return nodes.isEmpty
            }
        }

        init(_ sort: @escaping (T, T) -> Bool) {
            orderCriteria = sort
        }

        func insert(_ val: T) {
            nodes.append(val)
            heapifyUp(nodes.count-1)
        }

        func remove() -> T? {
            if nodes.isEmpty {
                return nil
            }
            if nodes.count == 1 {
                return nodes.removeLast()
            }
            let ret = nodes[0]
            nodes[0] = nodes.removeLast()
            heapifyDown(0)
            return ret
        }

        func heapifyUp(_ index: Int) {
            var currIndex = index
            var parentIndex = getParentIndex(currIndex)
            while currIndex > 0 && orderCriteria(nodes[currIndex], nodes[parentIndex]) {
                nodes.swapAt(currIndex, parentIndex)
                currIndex = parentIndex
                parentIndex = getParentIndex(currIndex)
            }
        }

        func heapifyDown(_ index: Int) {
            let leftChildIndex = getLeftChildIndex(index)
            let rightChildIndex = leftChildIndex + 1
            var chosen = index
            if leftChildIndex < nodes.count && orderCriteria(nodes[leftChildIndex], nodes[chosen]) {
                chosen = leftChildIndex
            }
            if rightChildIndex < nodes.count && orderCriteria(nodes[rightChildIndex], nodes[chosen]) {
                chosen = rightChildIndex
            }
            if chosen == index {
                return
            }
            nodes.swapAt(chosen, index)
            heapifyDown(chosen)
        }

        func getParentIndex(_ i: Int) -> Int {
            return (i-1)/2
        }

        func getLeftChildIndex(_ i: Int) -> Int {
            return 2*i+1
        }

        func getRightChildIndex(_ i: Int) -> Int {
            return 2*i+2
        }
    }
    func reachableNodes(_ edges: [[Int]], _ maxMoves: Int, _ n: Int) -> Int {
        var graph = [Int: [Int: Int]]() // key is node index, value is [node index: cnt]
        for e in edges {
            let u = e[0], v = e[1], cnt = e[2]
            graph[u, default: [Int: Int]()][v] = cnt
            graph[v, default: [Int: Int]()][u] = cnt
        }

        var heap = MinHeap<[Int]>({$0[1] < $1[1]}) // heap, [index, cnt]
        heap.insert([0,0])

        var dist = [Int: Int]() // key is node index, value is dist to origin
        dist[0] = 0

        var used = [Int: Int]() // use u*n+v and v*n+u as key to mark used edge (u,v)

        var ans = 0

        while heap.isEmpty == false {
            let currNode = heap.remove()!
            let currNodeIndex = currNode[0], currNodeDist = currNode[1]
            if currNodeDist > (dist[currNodeIndex] ?? 0) {
                continue
            }
            ans += 1
            if let neighborList = graph[currNodeIndex] {
                for (neighborIndex, neighborCnt) in neighborList {
                    let v = min(neighborCnt, maxMoves - currNodeDist)
                    used[n * currNodeIndex + neighborIndex] = v
                    let dTotal = currNodeDist + neighborCnt + 1
                    if dTotal < (dist[neighborIndex] ?? (maxMoves + 1)) {
                        let insertNode = [neighborIndex, dTotal]
                        heap.insert(insertNode)
                        dist[neighborIndex] = dTotal
                    }
                }
            }
        }

        for e in edges {
            ans += min(e[2], (used[e[0]*n+e[1]] ?? 0) + (used[e[1]*n+e[0]] ?? 0))
        }
        return ans
    }
}

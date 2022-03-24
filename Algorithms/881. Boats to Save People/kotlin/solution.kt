class Solution {
    fun numRescueBoats(people: IntArray, limit: Int): Int {
        people.sort()
        var i = 0
        var j = people.size - 1
        var ans = 0
        while (i <= j) {
            ans++
            if (people[i] + people[j] <= limit) {
                i++
            }
            j--
        }
        return ans
    }
}

class Solution {
    fun maximumWealth(accounts: Array<IntArray>): Int {
        return accounts.map { it.sum() }.maxOrNull() ?: 0
    }
}

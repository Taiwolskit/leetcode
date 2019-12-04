class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.size == 0) {
            return ""
        }
        var prefix = ""
        var stop = false
        strs.get(0).forEachIndexed{ idx, elt ->
            strs.forEach{ str -> 
                if (idx >= str.length || str.get(idx) != elt) {
                    stop = true
                    return@forEachIndexed
                }
            }
            if (!stop) {
                prefix += elt
            }
        }
        return prefix
    }
}
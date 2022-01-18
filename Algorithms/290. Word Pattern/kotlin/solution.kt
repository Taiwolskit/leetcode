class Solution {
    fun wordPattern(pattern: String, s: String): Boolean {
        val parseString = s.split(" ")

        if (pattern.length != parseString.size) return false

        val patternMap = hashMapOf<Char, Int>()
        val parseStringMap = hashMapOf<String, Int>()

        for (index in 0..pattern.lastIndex) {
            if (patternMap[pattern[index]] != parseStringMap[parseString[index]]) return false

            patternMap[pattern[index]] = index
            parseStringMap[parseString[index]] = index
        }

        return true
    }
}

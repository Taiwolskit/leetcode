class Solution {
    fun findSubstring(s: String, words: Array<String>): List<Int> {
        val res = mutableListOf<Int>()
        val wordNum = words.size
        if (wordNum == 0) {
            return res
        }
        val wordLen = words[0].length
        val allWords = mutableMapOf<String, Int>()
        for (w in words) {
            val value = allWords.getOrDefault(w, 0)
            allWords[w] = value + 1
        }
        for (i in 0..(s.length - wordNum * wordLen)) {
            val hasWords = mutableMapOf<String, Int>()
            var num = 0
            while (num < wordNum) {
                val word = s.substring(i + num * wordLen, i + (num + 1) * wordLen)
                if (allWords.containsKey(word)) {
                    val value = hasWords.getOrDefault(word, 0)
                    hasWords[word] = value + 1
                    if (hasWords[word]!! > allWords[word]!!) {
                        break
                    }
                } else {
                    break
                }
                num++
            }
            if (num == wordNum) {
                res.add(i)
            }
        }
        return res
    }
}

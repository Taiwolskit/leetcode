class Solution:
    def reverseWords(self, s: str) -> str:
        result: list[str] = []
        word: str = ""
        for ch in s:
            if ch == " ":
                result.append(word[::-1])
                word = ""
            else:
                word += ch
        result.append(word[::-1])
        return " ".join(result)

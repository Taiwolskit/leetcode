<?php
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function longestPalindrome($s)
    {
        $expandStr = "^#" . implode("#", str_split($s)) . "#$";
        $n = strlen($expandStr);
        $P = array_fill(0, $n, 0);
        $center = 0;
        $right = 0;
        for ($i = 1; $i < $n - 1; $i++) {
            $iMirror = 2 * $center - $i;
            if ($right > $i) {
                $P[$i] = min($right - $i, $P[$iMirror]);
            }
            while ($expandStr[$i + 1 + $P[$i]] == $expandStr[$i - 1 - $P[$i]]) {
                $P[$i]++;
            }
            if ($i + $P[$i] > $right) {
                $center = $i;
                $right = $i + $P[$i];
            }
        }
        $maxLen = max($P);
        $centerIndex = array_search($maxLen, $P);
        return str_replace("#", "", substr($s, ($centerIndex - $maxLen) / 2, $maxLen));
    }
}

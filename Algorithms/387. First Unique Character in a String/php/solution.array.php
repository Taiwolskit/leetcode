<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function firstUniqChar($s)
    {
        $count = array_fill(0, 26, 0);
        $len = strlen($s);
        for ($i = 0; $i < $len; $i++) {
            $count[ord($s[$i]) - ord('a')]++;
        }
        for ($i = 0; $i < $len; $i++) {
            if ($count[ord($s[$i]) - ord('a')] == 1) {
                return $i;
            }
        }
        return -1;
    }
}

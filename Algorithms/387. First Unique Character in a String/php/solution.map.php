<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function firstUniqChar($s)
    {
        $map = count_chars($s);
        for ($i = 0; $i < strlen($s); ++$i) {
            if ($map[ord($s[$i])] === 1) {
                return $i;
            }
        }
        return -1;
    }
}

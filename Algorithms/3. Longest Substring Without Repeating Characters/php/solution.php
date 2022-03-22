<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s)
    {
        $ans = 0;
        $mp = [];

        $i = 0;
        for ($j = 0; $j < strlen($s); $j++) {
            if (isset($mp[$s[$j]])) {
                $i = max($i, $mp[$s[$j]]);
            }
            $ans = max($ans, $j - $i + 1);
            $mp[$s[$j]] = $j + 1;
        }
        return $ans;
    }
}

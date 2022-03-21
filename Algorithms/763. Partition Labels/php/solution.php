<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer[]
     */
    function partitionLabels($s)
    {
        $len = strlen($s);
        $last = [];
        $ans = [];
        for ($i = 0; $i < $len; $i++) {
            $last[$s[$i]] = $i;
        }
        $anchor = -1;
        $j = 0;
        for ($i = 0; $i < $len; $i++) {
            $j = max($j, $last[$s[$i]]);
            if ($i == $j) {
                array_push($ans, $j - $anchor);
                $anchor = $j;
            }
        }
        return $ans;
    }
}

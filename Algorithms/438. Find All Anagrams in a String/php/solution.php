<?php
class Solution
{

    /**
     * @param String $s
     * @param String $p
     * @return Integer[]
     */
    function findAnagrams($s, $p)
    {
        $ns = strlen($s);
        $np = strlen($p);
        if ($ns < $np) {
            return [];
        }

        $pCount = array_fill(0, 26, 0);
        $sCount = array_fill(0, 26, 0);
        for ($i = 0; $i < $np; $i++) {
            $pCount[ord($p[$i]) - ord('a')]++;
        }

        $output = [];
        for ($i = 0; $i < $ns; $i++) {
            $sCount[ord($s[$i]) - ord('a')]++;
            if ($i >= $np) {
                $sCount[ord($s[$i - $np]) - ord('a')]--;
            }
            if ($sCount == $pCount) {
                $output[] = $i - $np + 1;
            }
        }

        return $output;
    }
}

<?php
class Solution
{

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights)
    {
        $sortedHeights = $heights;
        sort($sortedHeights);
        $count = 0;
        for ($i = 0; $i < count($heights); $i++) {
            if ($heights[$i] != $sortedHeights[$i]) {
                $count++;
            }
        }
        return $count;
    }
}

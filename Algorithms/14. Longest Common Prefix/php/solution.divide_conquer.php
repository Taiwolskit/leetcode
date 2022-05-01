<?php
class Solution
{

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs)
    {
        if (empty($strs) && is_null($strs)) {
            return '';
        }
        return $this->longestPrefix($strs, 0, count($strs) - 1);
    }

    private function longestPrefix($strs, $l, $r)
    {
        if ($l == $r) {
            return $strs[$l];
        }

        $mid = floor(($l + $r) / 2);
        $lcpLeft = $this->longestPrefix($strs, $l, $mid);
        $lcpRight = $this->longestPrefix($strs, $mid + 1, $r);
        return $this->commonPrefix($lcpLeft, $lcpRight);
    }

    private function commonPrefix($left, $right)
    {
        $minLen = min(strlen($left), strlen($right));
        for ($i = 0; $i < $minLen; $i++) {
            if ($left[$i] != $right[$i]) {
                return substr($left, 0, $i);
            }
        }
        return substr($left, 0, $minLen);
    }
}
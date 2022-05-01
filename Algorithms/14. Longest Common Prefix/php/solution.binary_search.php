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
        $low = 1;
        $hight = max(array_map('strlen', $strs));
        while ($low <= $hight) {
            $mid = floor(($low + $hight) / 2);
            if ($this->isCommonPrefix($strs, $mid)) {
                $low = $mid + 1;
            } else {
                $hight = $mid - 1;
            }
        }
        return substr($strs[0], 0, ($low + $hight) / 2);
    }

    function isCommonPrefix($strs, $length)
    {
        $str1 = substr($strs[0], 0, $length);
        for ($i = 1; $i < count($strs); $i++) {
            if (substr($strs[$i], 0, $length) != $str1) {
                return false;
            }
        }
        return true;
    }
}
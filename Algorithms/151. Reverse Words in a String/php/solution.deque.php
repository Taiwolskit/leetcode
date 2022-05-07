<?php
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        $left = 0;
        $right = strlen($s) - 1;
        $s = str_split($s);
        while ($left <= $right && $s[$left] == ' ') {
            $left++;
        }
        while ($right >= $left && $s[$right] == ' ') {
            $right--;
        }

        $d = array();
        $word = array();
        for ($i = $left; $i <= $right; $i++) {
            if ($s[$i] == ' ' and !empty($word)) {
                array_unshift($d, implode('', $word));
                $word = array();
            } else if ($s[$i] != ' ') {
                $word[] = $s[$i];
            }
        }
        array_unshift($d, implode('', $word));
        return implode(' ', $d);
    }
}

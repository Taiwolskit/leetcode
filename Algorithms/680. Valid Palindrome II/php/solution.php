<?php
class Solution
{

    /**
     * @param String $s
     * @return Boolean
     */
    function validPalindrome($s)
    {
        $i = 0;
        $j = strlen($s) - 1;
        while ($i < $j) {
            if ($s[$i] != $s[$j]) {
                return $this->checkPalindrome($s, $i + 1, $j) || $this->checkPalindrome($s, $i, $j - 1);
            }
            $i++;
            $j--;
        }
        return true;
    }

    function checkPalindrome($s, $i, $j)
    {
        while ($i < $j) {
            if ($s[$i] != $s[$j]) {
                return false;
            }
            $i++;
            $j--;
        }
        return true;
    }
}

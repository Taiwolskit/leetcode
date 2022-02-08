<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function myAtoi($s)
    {
        $s = trim($s);
        $sign = 1;
        $result = 0;
        $i = 0;
        if (strlen($s) == 0) {
            return 0;
        }
        if ($s[0] == '-') {
            $sign = -1;
            $i = 1;
        } else if ($s[0] == '+') {
            $i = 1;
        }
        for (; $i < strlen($s); $i++) {
            if ($s[$i] < '0' || $s[$i] > '9') {
                break;
            }
            $result = $result * 10 + $s[$i] - '0';
            if ($result * $sign > 2147483647) {
                return 2147483647;
            }
            if ($result * $sign < -2147483648) {
                return -2147483648;
            }
        }
        return $result * $sign;
    }
}

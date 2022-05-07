<?php
class Solution
{

    /**
     * @param String $a
     * @param String $b
     * @return String
     */
    function addBinary($a, $b)
    {
        $n = max(strlen($a), strlen($b));
        $a = str_pad($a, $n, '0', STR_PAD_LEFT);
        $b = str_pad($b, $n, '0', STR_PAD_LEFT);
        $carry = 0;
        $answer = array();
        for ($i = $n - 1; $i >= 0; $i--) {
            if ($a[$i] == '1') {
                $carry++;
            }
            if ($b[$i] == '1') {
                $carry++;
            }

            $answer[] = strval($carry % 2);
            $carry = floor($carry / 2);
        }

        if ($carry == 1) {
            $answer[] = '1';
        }
        $answer = array_reverse($answer);
        return implode('', $answer);
    }
}

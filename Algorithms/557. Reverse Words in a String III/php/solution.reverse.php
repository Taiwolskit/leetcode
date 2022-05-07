<?php
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        $result = array();
        $word = '';
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] == ' ') {
                $result[] = $word;
                $word = '';
            } else {
                $word .= $s[$i];
            }
        }
        $result[] = $word;
        return implode(' ', array_map('strrev', $result));
    }
}

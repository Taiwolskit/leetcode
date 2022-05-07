<?php
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        return implode(' ', array_reverse(preg_split('/\s+/', trim($s))));
    }
}

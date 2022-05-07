<?php
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        return implode(' ', array_map('strrev', explode(' ', preg_replace('/\s+/', ' ', trim($s)))));
    }
}

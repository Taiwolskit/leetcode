<?php
class Solution
{

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle)
    {
        return strpos($haystack, $needle) !== false ? strpos($haystack, $needle) : -1;
    }
}

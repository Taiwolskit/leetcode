<?php
class Solution
{

    /**
     * @param String $word
     * @return Boolean
     */
    function detectCapitalUse($word)
    {
        $n = strlen($word);
        if ($n == 1) {
            return true;
        }

        if  (ctype_upper($word[0]) && ctype_upper($word[1])) {
            for ($i = 2; $i < $n; $i++) {
                if (!ctype_upper($word[$i])) {
                    return false;
                }
            }
        } else {
            for ($i = 1; $i < $n; $i++) {
                if (ctype_upper($word[$i])) {
                    return false;
                }
            }
        }
        return true;
    }
}

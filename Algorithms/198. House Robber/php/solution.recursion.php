<?php
class Solution
{
    private $memo = [];

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function rob($nums)
    {
        return $this->robFrom(0, $nums);
    }

    function robFrom($i, $nums)
    {
        if ($i >= count($nums)) {
            return 0;
        }
        if (isset($this->memo[$i])) {
            return $this->memo[$i];
        }
        $ans = max($this->robFrom($i + 1, $nums), $this->robFrom($i + 2, $nums) + $nums[$i]);
        $this->memo[$i] = $ans;
        return $ans;
    }
}

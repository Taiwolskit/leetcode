<?php
class KthLargest
{
    private int $k;
    private SplMinHeap $heap;
    /**
     * @param Integer $k
     * @param Integer[] $nums
     */
    function __construct($k, $nums)
    {
        $this->k = $k;
        $this->heap = new SplMinHeap();
        foreach ($nums as $num) {
            $this->heap->insert($num);
        }
        while ($k < $this->heap->count()) {
            $this->heap->extract();
        }
    }

    /**
     * @param Integer $val
     * @return Integer
     */
    function add($val)
    {
        $this->heap->insert($val);
        if ($this->k < $this->heap->count()) {
            $this->heap->extract();
        }
        return $this->heap->current();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * $obj = KthLargest($k, $nums);
 * $ret_1 = $obj->add($val);
 */

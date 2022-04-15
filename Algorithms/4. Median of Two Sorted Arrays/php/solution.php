<?php
class Solution
{

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($nums1, $nums2)
    {
        $newArray = array_merge($nums1, $nums2);
        sort($newArray);
        $start = 0;
        $end = count($newArray) - 1;
        $middle = floor(($start + $end) / 2);
        if (count($newArray) % 2 == 0) {
            $median = ($newArray[$middle] + $newArray[$middle + 1]) / 2;
        } else {
            $median = $newArray[$middle];
        }
        return $median;
    }
}

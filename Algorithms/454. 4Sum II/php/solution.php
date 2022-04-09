<?php
class Solution
{

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer[] $nums3
     * @param Integer[] $nums4
     * @return Integer
     */
    function fourSumCount($nums1, $nums2, $nums3, $nums4)
    {
        $cnt = 0;

        $nums1 = array_count_values($nums1);
        $nums2 = array_count_values($nums2);
        $nums3 = array_count_values($nums3);
        $nums4 = array_count_values($nums4);

        $m = [];

        foreach ($nums1 as $num1 => $cnt1) {
            foreach ($nums2 as $num2 => $cnt2) {
                if (!isset($m[$num1 + $num2])) {
                    $m[$num1 + $num2] = 0;
                }

                $m[$num1 + $num2] += $cnt1 * $cnt2;
            }
        }

        foreach ($nums3 as $num3 => $cnt3) {
            foreach ($nums4 as $num4 => $cnt4) {
                if (isset($m[- ($num3 + $num4)])) {
                    $cnt += $m[- ($num3 + $num4)] * $cnt3 * $cnt4;
                }
            }
        }

        return $cnt;
    }
}

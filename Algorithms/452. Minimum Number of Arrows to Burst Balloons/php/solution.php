class Solution
{

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function findMinArrowShots($points)
    {
        if (!count($points)) return 0;

        usort($points, function ($a, $b) {
            return $a[1] <=> $b[1];
        });

        $arrows = 1;
        $firstEnd = $points[0][1];
        for ($i = 1; $i < count($points); $i++) {
            if ($points[$i][0] > $firstEnd) {
                $arrows++;
                $firstEnd = $points[$i][1];
            }
        }
        return $arrows;
    }
}

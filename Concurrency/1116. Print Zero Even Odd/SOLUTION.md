# Solution

這次的題目跟 1115 類似，只是這次在 Print 出來的條件是多加了 Even 和 Odd 的條件

## Description

在這邊 Python 的解法主要的差異在於最後 Print 的數值是怎麼儲存的。在 Runtime 的最佳解是使用一個變數去計算，然後可以看到在在 `even()` 和 `odd()` 中的 for-loop 也是直接切半。節省了一半的迴圈時間。
然後在 Memory 的最佳解，則是使用了 for-loop 完整的 n 數值，但是用其 index 當作要 Print 出的數值，而不是用一個變數去儲存，節省了 Memory。

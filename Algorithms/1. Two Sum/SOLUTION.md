# Solution

官方提供了三種解法：暴力破解、兩次遍歷 Hash Table、一次遍歷 Hash Table
其中最後的兩種方式，空間複雜度和時間複雜度相同。
這邊採用的是 One-pass Hash Table 的解法，因為覺得只使用一次遍歷的解法比較簡潔

## Description

這邊以 JavaScript 做範例

1. 先建立一個 Hash Table
2. 使用迴圈將參數 `nums` 做遍歷
3. 在每一次的遍歷中，將 `nums` 中的元素和 `target` 做相減得到 `diff`
4. 如果在 Hash Table 中不存在則存入其中，如果已經存在則回傳

而在 Memory 更優化的方式，是不另外使用 Hash Table 來做儲存，直接將 `diff` 在 `nums` 做查找。因為有些程式語言沒有支援類似 `indexOf()` 的語法糖，所以會用第二層回圈做判斷

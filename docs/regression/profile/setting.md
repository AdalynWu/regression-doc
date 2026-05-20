## Profile Management (個人資料管理)

## Notifications (通知設定)

## Settings (系統設定)

## Language (語言切換)

# 系統與偏好設定測試

本文件包含使用者個人設定、語言及通知相關的 Regression 測試。

## [SET-01] 語言切換 (Language)
| 步驟 | 操作說明 | 預期結果 |
| :--- | :--- | :--- |
| 1 | 點擊漢堡選單 > Language | 彈出語系選擇清單 |
| 2 | 切換為 English | 全站介面即時轉換為英文，無破圖 |

## [SET-02] 通知設定 (Notifications)
| 步驟 | 操作說明 | 預期結果 |
| :--- | :--- | :--- |
| 1 | 點擊漢堡選單 > Notifications | 進入通知中心 |
| 2 | 檢查紅點邏輯 | 若有未讀訊息，漢堡選單外層應有紅點提示 |
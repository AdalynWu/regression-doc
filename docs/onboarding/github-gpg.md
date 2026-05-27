# GitHub GPG 金鑰設定教學 (GPG Key Setup)

::: info Onboard 知識點
本教學將引導你完成 GPG 金鑰的生成與 GitHub 綁定。成功設定後，你推送到 GitHub 的 Commit 紀錄旁將會顯示綠色的「Verified」安全認證標籤，這是團隊程式碼安全與權限管理的重要規範。
:::

---

## 一、安裝 GPG 工具

請根據你使用的作業系統，安裝對應的 GPG 核心工具：

* **macOS 用戶：**
  請下載並安裝官方工具 GPG Suite (GPGTools)，或透過 Homebrew 安裝。
* **Linux (Ubuntu/Debian) 用戶：**
  系統通常已內建。若無，請於終端機執行 `sudo apt install gnupg`。

安裝完成後，開啟終端機 (Terminal) 輸入以下指令，確認是否安裝成功：
```bash
gpg --version
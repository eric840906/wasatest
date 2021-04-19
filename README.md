<!-- 1. 用Vue Cli 完成以下功能
2. 以scss撰寫內容樣式
3. 應用component功能
4. 應用computed功能
5. 可切換頁面
6. 設定頁面title, description
7. 串接一組列表資料api

[https://mocki.io/fake-json-api](https://mocki.io/fake-json-api)

8. 程式架構做到最大的沿用性，並於Readme說明你的想法
9. 完成後上傳至github或gitlab將連結寄至hello@wasateam.com -->


# wasateam測驗

## 1. scss樣式

#### 1. 使用webpack的scss loader導入全域變數
#### 2. component專用樣式以scoped的方式寫在各自檔案中


## 2. 應用component功能

#### 1. 全域component: navbar
#### 2. 區域component: 按鈕、卡片及頁面標題等區域component則使用slot來撰寫


## 3. 應用computed功能

#### 1. Home頁面中有利用computed達成簡單的切換單位公制與英制功能


## 4. 可切換頁面
#### 1. 以vue router達成頁面切換

## 5. 設定頁面title, description
#### 1. 使用router的meta參數設定title以及在router的afterEach週期中修改頁面title
#### 2. description部分不確定要的是什麼效果，沒做

## 6. 串接一組列表資料api
#### 1. 接api進來搭配computed的功能做操作
#### 2. 遇到cors問題是用vue cli的proxy設定來解決

## 7. 沿用性
#### 1. 單純接資料的component都以slot的方式來達到stateless component的效果，將主要的狀態控制留在主component(例如在Home頁面中的List將接api進來的資料放到card中，card只單純做顯示的功能)
#### 2. API根路徑寫在環境變數中方便維護修改，呼叫方式則統一整合在api資料夾中，每個路徑都切成一個檔案用axios的create instance功能生成實體，後續要新增同一個路徑下的http method較方便，也不怕改到其他路徑的東西

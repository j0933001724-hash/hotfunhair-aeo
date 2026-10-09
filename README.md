# 哈髮科技假髮（Hot Fun Hair）SEO／AEO 靜態網站

依「SEO & AEO Desk」定稿企劃建置：繁體中文（台灣）、每頁先給直接答案（answer-first）、只為**看得到的問答**加 FAQPage schema。
最後更新：2026-10-05・作者：設計師賈斯汀

## 預覽
```bash
cd /workspace/hotfunhair-aeo && python3 -m http.server 8787
# 用瀏覽器開 http://localhost:8787/
```
修改內容後重新產生（會自動跑檢查）：
```bash
python3 _build/build.py
```

## 檔案
| 檔案 | H1／用途 |
|---|---|
| index.html | 哈髮科技假髮｜台北醫護級假髮、男士補髮、女士增髮與 Cosplay 假髮（Organization + LocalBusiness + WebSite + FAQPage） |
| medical-guide.html | 化療／醫療級透氣假髮怎麼選？第一次到店前必讀（核心頁；Article + Service + FAQPage；醫療免責上下各一） |
| chemo-faq.html | 化療假髮常見問題（13 題；Article + FAQPage；醫療免責） |
| mens-hair.html | 男士補髮片與全頂假髮怎麼選才自然？ |
| womens-volume.html | 頭頂稀疏、髮縫寬：增髮片還是整頂假髮？ |
| care-repair.html | 假髮怎麼洗、怎麼晾、什麼時候該送修？（清潔維修僅限本店購買假髮） |
| wig-types.html | 醫療、時尚、Cosplay 假髮差在哪？（分流頁） |
| cosplay.html | Cosplay／同人誌假髮挑選與保養（導覽獨立群組） |
| visit.html | 台北北門假髮店怎麼去？預約與到店流程（NAP 卡 + LocalBusiness） |
| about.html | 關於哈髮科技假髮（AboutPage；Person 賈斯汀 = 全站 Article author） |
| styles.css / aeo.js | 樣式；JS 只做漸進增強（手機選單、自動目錄、CTA 點擊 dataLayer）。內容與 JSON-LD 皆為靜態 HTML |
| robots.txt / sitemap.xml | 允許搜尋與 AI 爬蟲；sitemap lastmod 2026-10-05 |
| favicon.svg | 暫用標誌 |
| _build/ | 產生器（hfh.py 共用設定、pages_a/b.py 內容、build.py）。**部署時不用上傳**（robots 已 Disallow） |

## 店家硬性規則（build.py 自動檢查）
1. **不公開任何價格**：HTML／meta／schema 皆無價格；無 priceRange、無 aggregateRating、無 offers。價格問題一律回答「依款式與材質不同，請 LINE 或電話預約，到店試戴後再報價」。
2. **不修他牌**：care-repair.html 明確寫「哈髮只服務本店購買的假髮，不修剪、不維修他牌假髮。」其他頁提到清潔維修時皆加「限本店購買」。
3. 週日只寫「預約制」（在 description／內文），schema openingHours 只有週一～六 11:30–19:30。
4. 醫療頁有「非醫療建議，頭皮不適請先就醫」。
5. 不點名競品；若需提及請寫「魔髮部屋」（檢查會擋「魔法部屋」）。

## NAP（全站頁尾一致）
哈髮科技假髮｜台北市大同區鄭州路23號｜02-25526562｜週一～六 11:30–19:30；週日預約制｜設計師賈斯汀

## 取自官網（2026-10-05 讀取 https://www.hotfunhair.com/）
- LINE@：https://line.me/ti/p/~@995uevgh（所有「LINE 預約試戴」按鈕）
- Facebook：https://www.facebook.com/hotfun.hair
- YouTube：https://www.youtube.com/channel/UCxOPaOjKT2M_qvZ90_0xKdw
- 交通：北門站 → B1 台北地下街步行約 5 分鐘 → Y13 出口手扶梯上 1 樓，店在對面；開車停台北地下街停車場，B2 Y13 搭電梯。
- 服務：手工製模、剃髮、試戴、清潔保養維修、美國原廠假髮膠帶、Cosplay／同人誌、約二十年經驗。
- 座標 25.0495315, 121.5144498（官網 Google 地圖連結）。

## 上線前請店家確認
- [ ] medical-guide.html 的「奈米冰絲抗菌網／全阻燃絲／超透氣醫護等級」白話定義（頁面上有黃色「需店家確認」標記，確認後移除）。
- [ ] Google 地圖商家名稱目前顯示「哈髮時尚假髮」，與網站「哈髮科技假髮」不一致 → 建議統一 NAP 名稱。
- [ ] Cosplay 角色頭修剪／造型是否店內承接（目前寫「請先 LINE 詢問」）。
- [ ] 正式網址：目前上線在 GitHub Pages https://j0933001724-hash.github.io/hotfunhair-aeo/（canonical／sitemap／schema 皆指向此）。換自訂網域時同步改 `_build/hfh.py` 的 BASE 後重跑 build。
- [ ] 換成正式 Logo（PNG/JPG，≥112px）供 Organization.logo 使用；目前暫用 favicon.svg。
- [ ] 郵遞區號 103（大同區）已填入 schema，如有 5 碼／6 碼需求再補。

# dgs-webcon — Gói trang trí web con CNLG

Mã chính của gói trang trí (giao diện kính, dòng chữ chạy, 3 nút liên hệ, nhãn Flash Sale, yêu thích, lời nhắc Flash Deal, giao diện theo mùa, sự kiện GA4).

- `dgs.js`: mã chính (CSS + JS), phát qua jsDelivr:
  `https://cdn.jsdelivr.net/gh/KCT-GH-MAN/dgs-webcon@main/dgs.js`
- `gtm-tag.html`: mẫu thẻ HTML tùy chỉnh dán vào Google Tag Manager của từng web. Gồm khối cấu hình `window.DGS_CFG` (riêng của mỗi khách) và một dòng tải `dgs.js`.

## Cài cho một web mới

1. Mở Google Tag Manager của web, tạo thẻ **HTML tùy chỉnh**, kích hoạt **All Pages**.
2. Dán nội dung `gtm-tag.html`, sửa khối cấu hình (SĐT, Zalo, Facebook, Page, câu chữ, `theme`).
3. Lưu, Gửi, Xuất bản.
4. Nếu web đang có thẻ nút Zalo/Facebook cũ, tạm dừng thẻ đó để không bị trùng.

## Cập nhật cho tất cả khách

Sửa `dgs.js` trong kho này rồi commit lên `main`. Sau đó xoá bộ nhớ đệm jsDelivr để các web nhận bản mới ngay:
`https://purge.jsdelivr.net/gh/KCT-GH-MAN/dgs-webcon@main/dgs.js`

## Cấu hình

| Mục | Ý nghĩa |
|---|---|
| `phone`, `phoneText` | SĐT để bấm gọi và SĐT hiển thị |
| `zalo`, `facebook` | Link 2 nút liên hệ (để trống thì ẩn nút) |
| `page`, `pageText` | Link và chữ của nút chuông |
| `banner1`, `banner2` | 2 câu của dòng chữ chạy |
| `flashTip`, `flashCard` | Lời nhắc Flash Deal và thẻ trượt lên |
| `theme` | `'noel'`, `'tet'` hoặc `''` |
| `tat` | Tắt bớt phần: `banner, loc, yeuthich, vuaxem, lienhe, chuong, flash, chitiet, quaylai, toast, taithem, the` |
| `ga4` | Gửi sự kiện bấm nút về GA4 (`dgs_contact`, `dgs_follow_page`, `dgs_share`, `dgs_favorite`, `dgs_flash_tip`, `dgs_flash_card`) |

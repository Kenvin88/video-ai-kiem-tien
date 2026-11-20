# Workshop Video AI Kiếm Tiền: landing page bán vé

Web dựng theo mẫu thiết kế `../mau-thiet-ke/kolaiworkshop` (tông vàng-cam, thu tiền bằng QR + Zalo).
Công nghệ giống Lovable: React + TypeScript + Vite + Tailwind CSS + lucide-react.

## Sửa nội dung (chữ, ngày, giá, Zalo, ngân hàng)
Chỉ cần sửa **`src/config/site.ts`**. Mọi chữ trên web đều nằm ở đó.
- Ảnh: bỏ file vào thư mục `public/`, rồi ghi `"/ten-anh.jpg"` vào `coverImage`, `speaker.avatar`, `gallery`.
- Video YouTube: điền mã video vào `youtubeId`.
- Mã QR tự tạo bằng VietQR từ `bank.bankId` + `bank.accountNumber` + giá vé.
- Hết ngày `eventDate` thì web tự hiện "Đã hết thời gian đăng ký".
- SEO (tiêu đề khi chia sẻ link): sửa thêm trong `index.html`. Ảnh chia sẻ đặt tên `public/og-image.jpg`.

## Đổi màu thương hiệu
Sửa các dòng `--primary`, `--accent`, `--secondary` trong `src/index.css`.

## Chạy trên máy
```
npm install
npm run dev     # mở http://localhost:8080
npm run build   # xuất bản web vào thư mục dist/
```

## Cấu trúc
- `src/pages/Home.tsx`: trang chủ, gồm 8 khu: Hero, Marquee, Benefits, Speaker, VideoPreview, Gallery, FinalCta, Footer.
- `src/pages/Register.tsx`: trang `/dang-ky` (3 bước, tab vé, QR, Zalo).
- `src/components/*`: từng khu của trang chủ.

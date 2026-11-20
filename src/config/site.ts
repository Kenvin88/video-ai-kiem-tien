// ================================================================
// TẤT CẢ NỘI DUNG CỦA WEB NẰM Ở ĐÂY — Sếp chỉ cần sửa file này.
// (Đây là NỘI DUNG MẪU, thay bằng sản phẩm thật của Sếp.)
// ================================================================

export const site = {
  // ---- Thông tin chung / SEO ----
  name: "Workshop Video AI Kiếm Tiền",
  seoTitle: "Làm Video AI Kiếm Tiền Trên TikTok – Workshop Online",
  seoDescription:
    "Workshop online: làm video AI từ A–Z, không cần quay, không cần lộ mặt. Kịch bản, giọng đọc AI, dựng video hàng loạt và cách kiếm tiền.",

  // ---- Sự kiện ----
  // Giờ Việt Nam (+07:00). Qua thời điểm này web tự hiện "Đã hết thời gian đăng ký".
  eventDate: "2026-12-05T20:00:00+07:00",
  eventDateLabel: "20:00 Thứ Bảy, 05/12",

  // ---- Hero ----
  badge: "Workshop online 1 lần duy nhất",
  titleDark: "Làm video AI",
  titleGold: "kiếm tiền trên TikTok",
  subtitle: "Từ ý tưởng tới video triệu view chỉ với AI – không cần quay, không cần lộ mặt",
  question: "Bạn muốn đứng ngoài làn sóng video AI hay bắt đầu",
  questionGold: "ngay hôm nay?",
  ctaMain: "Nhận vé & quà tặng miễn phí",
  ctaNote: "Tham gia nhóm Zalo để giữ chỗ và nhận quà độc quyền",
  ctaShort: "Đăng ký ngay",
  // Ảnh bìa 16:9: bỏ file vào thư mục public/ rồi ghi "/ten-anh.jpg". Để trống = dùng poster vẽ sẵn.
  coverImage: "",
  // Ảnh người thật/KOL gắn vào poster bìa (tỉ lệ 3:4). Để trống = poster không có ảnh người.
  heroPhoto: "/images/hero-kol.jpg",

  // ---- Dải chữ chạy ----
  marquee: [
    "Video AI không lộ mặt",
    "Kịch bản triệu view",
    "Giọng đọc AI",
    "Kiếm tiền TikTok",
    "Làm 1 lần – bán mãi mãi",
  ],

  // ---- Lợi ích ----
  benefitsTitle: "Bạn sẽ nhận được gì?",
  benefitsSubtitle: "Chỉ một buổi tối – đủ để bạn tự làm video đầu tiên",
  // icon: workflow | script | voice | factory | gift | money
  benefits: [
    { icon: "workflow", title: "Quy trình làm video AI từ A–Z", desc: "Từ ý tưởng, kịch bản, giọng đọc tới dựng hình hoàn chỉnh" },
    { icon: "script", title: "Bộ prompt viết kịch bản triệu view", desc: "Mẫu câu lệnh viết hook, thân bài, kết thúc giữ chân người xem" },
    { icon: "voice", title: "Tạo giọng đọc AI tự nhiên", desc: "Giọng đọc truyền cảm, đúng chất kể chuyện, không cần thu âm" },
    { icon: "factory", title: "Dựng video tự động hàng loạt", desc: "Làm nhiều video mỗi ngày mà không tốn thời gian ngồi edit" },
    { icon: "gift", title: "Quà tặng đặc biệt", desc: "Bộ tài nguyên nhạc nền, hiệu ứng âm thanh, mẫu thumbnail" },
    { icon: "money", title: "Cách kiếm tiền từ video AI", desc: "Creator Rewards, affiliate và bán sản phẩm số" },
  ],

  // ---- Người hướng dẫn ----
  speakerTitle: "Người hướng dẫn",
  speaker: {
    name: "ANH VŨ",
    role: "Nhà sáng tạo nội dung AI",
    label: "AI Creator",
    avatar: "/images/avatar.jpg", // ảnh trong thư mục public/. Để trống = hiện chữ cái đầu.
    tags: ["Video AI", "TikTok", "YouTube"],
    bio: "Vận hành nhiều kênh video AI không lộ mặt, chia sẻ quy trình thực tế từ ý tưởng tới thu nhập — để bạn làm được ngay sau buổi học.",
  },

  // ---- Video xem trước ----
  videoTitle: "🎬 Xem trước nội dung",
  videoSubtitle: "Một vài khoảnh khắc sáng tạo đang chờ bạn trong workshop",
  youtubeId: "", // ví dụ "dQw4w9WgXcQ". Để trống = hiện khung chờ video.

  // ---- Băng ảnh sự kiện ----
  // Đường dẫn ảnh trong public/. Để trống = hiện khung mẫu.
  gallery: [
    "/images/g1-lam-viec.jpg",
    "/images/g2-vest.jpg",
    "/images/g3-pickleball.jpg",
    "/images/g4-cafe.jpg",
    "/images/g5-chay-bo.jpg",
    "/images/g6-setup.jpg",
    "/images/g7-bien.jpg",
    "/images/g8-van-phong.jpg",
  ],

  // ---- Kêu gọi cuối trang ----
  finalTitle: "Nơi bạn tìm thấy cộng đồng làm video AI",
  finalSubtitle: "Cùng hàng trăm nhà sáng tạo đang xây kênh bằng AI mỗi ngày.",

  footer: "Workshop Video AI Kiếm Tiền © 2026",

  // ---- Trang đăng ký ----
  register: {
    title: "Đăng Ký Nhận Vé",
    subtitle: "Workshop Video AI Kiếm Tiền – Online qua Zoom",
    steps: [
      "Chọn vé và chuyển khoản theo mã QR bên dưới",
      "Nhắn Zalo để xác nhận đăng ký",
      "Gửi ảnh chuyển khoản và vào nhóm nhận link Zoom",
    ],
    tickets: [
      {
        id: "ca-nhan",
        tab: "Vé Cá Nhân",
        name: "Vé Tham Gia Workshop",
        tagline: "Chỉ bằng 1 ly cà phê ☕",
        perks: ["Tham gia workshop trực tuyến", "Tài liệu & slide bài giảng", "Hỏi đáp trực tiếp", "Xem lại trong 7 ngày"],
        price: 135000,
        priceNote: "",
        highlight: "",
        transferNote: "VE CA NHAN",
      },
      {
        id: "nhom",
        tab: "Vé Nhóm 3 Người",
        name: "Vé Nhóm – Rủ Bạn Cùng Học",
        tagline: "Đi cùng nhau, tiết kiệm hơn 💎",
        perks: ["Tất cả quyền lợi vé cá nhân", "1 vé cho cả 3 người", "Nhóm hỗ trợ riêng sau buổi học"],
        price: 299000,
        priceNote: "Dành cho 3 người tham gia",
        highlight:
          "Đăng ký 1 vé cho cả 3 người – rủ thêm bạn bè, anh em cùng tham gia với mức giá ưu đãi. Tiết kiệm hơn khi đi cùng nhau!",
        transferNote: "VE NHOM 3",
      },
    ],
  },

  // ---- Thanh toán & liên hệ (THAY BẰNG THÔNG TIN THẬT) ----
  bank: {
    // Mã ngân hàng theo VietQR, ví dụ: vietcombank, techcombank, mbbank, acb, tpbank...
    bankId: "vietcombank",
    bankName: "Ngân hàng của bạn",
    accountNumber: "0000000000",
    accountName: "TEN CHU TAI KHOAN",
  },
  zalo: "0900000000",
} as const;

export type Site = typeof site;

/** Ảnh QR VietQR có sẵn số tiền + nội dung chuyển khoản */
export const vietQrUrl = (amount: number, note: string) =>
  `https://img.vietqr.io/image/${site.bank.bankId}-${site.bank.accountNumber}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(
    note,
  )}&accountName=${encodeURIComponent(site.bank.accountName)}`;

/** Đường dẫn ảnh trong public/ ("/anh.jpg") → chạy đúng cả khi web nằm trong thư mục con trên GitHub Pages */
export const asset = (p: string) => (p.startsWith("/") ? import.meta.env.BASE_URL + p.slice(1) : p);

export const formatVnd = (n: number) => n.toLocaleString("vi-VN") + "đ";

export const zaloLink = `https://zalo.me/${site.zalo}`;

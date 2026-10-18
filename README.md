# MyCV - Personal CV Website

Một website CV cá nhân hiện đại, responsive, được xây dựng hoàn toàn bằng HTML, CSS, JavaScript thuần (không dùng framework hay thư viện bên ngoài).

![CV Preview](assets/preview.png)

## ✨ Tính năng

- **Thiết kế 2 cột** (Sidebar + Main) chuyên nghiệp, chuyển sang 1 cột trên mobile
- **Typography đẹp**: Inter (body) + Space Grotesk (heading) từ Google Fonts
- **Hệ màu chuyên nghiệp** với hỗ trợ **Dark Mode** tự động
- **Navigation sticky** với scroll spy (highlight section hiện tại)
- **Hiệu ứng scroll reveal** mượt mà khi cuộn trang
- **Hover effects** cho project cards, skill tags, timeline items
- **Nút tải CV PDF** (sử dụng `window.print()` với print stylesheet tối ưu)
- **Responsive** hoàn hảo: desktop, tablet, mobile
- **Accessibility**: Semantic HTML, ARIA labels, focus visible, skip link
- **Dữ liệu tách biệt** trong `script.js` - dễ dàng chỉnh sửa
- **Placeholder rõ ràng** `[...]` cho biết chỗ cần điền thông tin

## 📁 Cấu trúc thư mục

```
mycv/
├── index.html          # HTML chính - semantic, accessible
├── styles.css          # CSS hoàn chỉnh - variables, responsive, animations
├── script.js           # Vanilla JS - data, scroll spy, reveal, PDF
├── assets/
│   ├── favicon.svg     # Favicon
│   └── avatar.svg      # Avatar placeholder (SVG)
└── README.md           # Tài liệu này
```

## 🚀 Chạy local

### Cách 1: Mở trực tiếp (nhanh nhất)
```bash
# Double-click vào file index.html
# Hoặc
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Cách 2: Live Server (khuyên dùng - auto reload)
**VS Code**: Cài extension "Live Server" → Right-click `index.html` → "Open with Live Server"

**Terminal** (nếu có Node.js):
```bash
npx serve .
# hoặc
python -m http.server 8000
# sau đó mở http://localhost:8000
```

## ✏️ Tùy chỉnh thông tin cá nhân

Mở file **`script.js`**, tìm object **`CV_DATA`** (dòng ~12) và thay thế các giá trị placeholder `[...]` bằng thông tin của bạn:

```javascript
const CV_DATA = {
  // Thông tin cơ bản
  name: 'Nguyễn Văn An',
  title: 'Senior Frontend Developer',
  location: 'Hà Nội, Việt Nam',
  email: 'nguyenvanan@email.com',
  phone: '+84 90 123 4567',
  linkedin: 'https://linkedin.com/in/nguyenvanan',
  github: 'https://github.com/nguyenvanan',
  portfolio: 'https://nguyenvanan.dev',
  lastUpdated: '10/2024',

  // Giới thiệu (3-5 câu)
  profile: 'Lập trình viên Fullstack với 5+ năm kinh nghiệm...',

  // Mục tiêu nghề nghiệp
  objective: 'Tìm kiếm vị trí Senior Developer tại môi trường...',

  // Kỹ năng sidebar (level 0-100)
  skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    // ...
  ],

  // Ngoại ngữ
  languages: [
    { name: 'Tiếng Việt', level: 'Ngôn ngữ mẹ đẻ' },
    { name: 'Tiếng Anh', level: 'IELTS 7.0' },
  ],

  // Sở thích
  interests: ['Đọc sách', 'Open Source', 'Chạy bộ'],

  // Kinh nghiệm
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Công ty ABC',
      date: '01/2022 - Nay',
      description: 'Dẫn d'équipe 5 dev, xây dựng hệ thống...',
      tasks: [
        'Tăng performance 40% bằng code splitting',
        'Mentor 3 junior dev',
        'Thiết lập CI/CD pipeline',
      ],
    },
    // Thêm các vị trí khác...
  ],

  // Giáo dục
  education: [
    {
      degree: 'Kỹ sư Khoa học Máy tính',
      school: 'ĐH Bách Khoa Hà Nội',
      date: '2018',
      detail: 'GPA: 3.8/4.0 - Chuyên ngành: Software Engineering',
    },
  ],

  // Dự án
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Hệ thống thương mại điện tử đầy đủ tính năng...',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/...',
      demo: 'https://demo.vercel.app',
    },
  ],

  // Kỹ năng chi tiết (section Kỹ năng)
  skillsDetail: [
    {
      category: 'Frontend',
      icon: 'icon-globe',
      tags: ['React', 'Vue.js', 'Next.js', 'TailwindCSS'],
    },
    // ...
  ],
};
```

### Thay ảnh đại diện
Thay file `assets/avatar.svg` bằng ảnh thật (khuyên dùng: 240x240px, JPG/PNG/WebP). Cập nhật `index.html`:
```html
<img src="assets/avatar.jpg" alt="[Họ và Tên]" class="avatar" id="avatar">
```

### Thay đổi màu chủ đạo
Chỉnh sửa CSS Variables trong `styles.css` (dòng 15-45):
```css
:root {
  --brand-500: #3b82f6;   /* Màu chính */
  --brand-600: #2563eb;   /* Màu hover */
  --brand-700: #1d4ed8;   /* Màu dark */
  /* Palette khác: Emerald (#10b981), Violet (#8b5cf6), Rose (#f43f5e), Amber (#f59e0b) */
}
```

## 🖨️ Xuất PDF

1. Mở website trong browser
2. Nhấn nút **"Tải CV (PDF)"** ở footer hoặc `Ctrl+P` / `Cmd+P`
3. Trong dialog in:
   - **Destination**: "Save as PDF"
   - **Margins**: "None" hoặc "Minimum"
   - **Background graphics**: **BẬT** (quan trọng để giữ màu)
   - **Scale**: 90-100%
4. Lưu file PDF

> Print stylesheet đã được tối ưu: ẩn nav/sidebar/footer, giữ màu, tránh cắt vỡ nội dung giữa trang.

## 🌐 Deploy lên GitHub Pages

### Bước 1: Push code lên GitHub
```bash
cd mycv
git init
git add .
git commit -m "Initial CV website"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### Bước 2: Bật GitHub Pages
1. Vào repository trên GitHub
2. **Settings** → **Pages** (sidebar trái)
3. **Source**: "Deploy from a branch"
4. **Branch**: `main` / `(root)`
5. **Save**

### Bước 3: Truy cập
Sau 1-2 phút, website sẽ có tại: `https://<username>.github.io/<repo-name>/`

> **Lưu ý**: Nếu repo không phải `<username>.github.io`, đường dẫn sẽ có subpath. Các link tuyệt đối trong CSS/JS (`/assets/...`) vẫn hoạt động vì browser resolve relative to current page.

## 🔧 Tùy chỉnh nâng cao

### Thêm section mới
1. Thêm `<section id="new-section" class="section reveal">...</section>` vào `index.html`
2. Thêm link vào nav: `<a href="#new-section" class="nav-link">Tên Section</a>`
3. Thêm style vào `styles.css` nếu cần
4. Cập nhật data trong `script.js` nếu dùng dynamic rendering

### Thêm animation mới
Sử dụng class `.reveal` + custom delay:
```html
<div class="reveal" style="transition-delay: 200ms">...</div>
```

### Thêm icon mới
Thêm `<symbol id="icon-ten" viewBox="...">...</symbol>` vào SVG sprite trong `index.html`, sau đó dùng:
```html
<svg class="icon"><use href="#icon-ten"></use></svg>
```

## ♿ Accessibility Checklist

- [x] Semantic HTML5 (`header`, `nav`, `main`, `aside`, `section`, `footer`)
- [x] ARIA labels trên nav, buttons, icons
- [x] Focus visible states
- [x] Skip link cho keyboard users
- [x] Color contrast (WCAG AA)
- [x] Reduced motion support
- [x] Alt text cho images
- [x] Proper heading hierarchy (h1 → h2 → h3)

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

Sử dụng CSS Grid, Flexbox, CSS Variables, IntersectionObserver - đều có hỗ trợ tốt trên browser hiện đại.

## 📝 License

MIT License - Tự do sử dụng, chỉnh sửa, chia sẻ cho mục đích cá nhân/commercial.

## 🤝 Đóng góp

Mọi issue/PR cải thiện code, thêm tính năng, fix bug đều được chào đón!

---

**Tạo với ❤️ bằng HTML/CSS/JS thuần** • Inspired by modern CV designs
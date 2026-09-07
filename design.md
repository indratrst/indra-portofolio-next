# Design Direction for Portfolio Redesign

## Inspirasi utama
Referensi visual yang diadopsi: https://re-birth.framer.website/

Gaya yang ingin dicapai adalah:
- Premium dan modern
- Dark luxury / cinematic
- Teks besar dan editorial
- Layout yang bernuansa artistik, bukan sekadar portfolio formal
- Kombinasi background gelap dengan highlight neon/soft gradient
- Lebih banyak "presence" di hero, bukan hanya list skill biasa

## Tujuan redesign
Mengubah halaman hero dari tampilan portfolio yang masih umum menjadi hero yang terasa lebih high-end, memorable, dan siap menunjukkan karakter brand personal.

Target utamanya:
1. Meningkatkan first impression saat pengunjung masuk ke landing page
2. Menonjolkan identity personal sebagai frontend developer
3. Menciptakan feel premium yang seimbang dengan portfolio professional
4. Membuat section hero lebih story-driven daripada sekadar informasi kontak

## Prinsip desain
### 1. Visual tone
- Background utama: hitam/charcoal, abu-abu gelap, dengan accent cyan/blue atau violet muda
- Gunakan noise/soft glow untuk menambahkan kedalaman dan kualitas premium
- Hindari terlalu banyak warna cerah; pilih accent yang minimal namun kuat

### 2. Typography
- Pakai headline besar dengan spacing yang sangat rapat untuk feel editorial
- Kombinasi font modern + elegant, misalnya heavy sans-serif dengan letter spacing negatif
- Teks body harus lebih tenang agar tetap nyaman dibaca
- Jaga hierarchy yang jelas: kata kunci utama > subheading > CTA > detail support

### 3. Layout
- Hero dibagi menjadi dua area: left content (story + CTA) dan right visual card (profile/overview/stack)
- Gunakan framing card yang membungkus content dengan border halus, glassmorphism, dan shadow soft
- Pertahankan ruang kosong agar namun tidak kosong; tiap blok harus punya "weight" dan presence

### 4. Motion
- Animasi halus dan berkelas, bukan terlalu ramai
- Gunakan fade-in, slight float, soft glow pulse, hover lift
- Prioritaskan mikro-interaksi yang terasa premium, bukan sekadar efek flashy

### 5. CTA strategy
- CTA utama: lebih minimal dan impactful, misalnya "Let’s work together" / "Contact me"
- Gunakan tombol dengan style glass/rounded pill dan hover yang halus
- Tambahkan badge status seperti "Available for freelance" agar terasa hidup

## Hero concept recommendation
### Struktur hero ideal
1. Badge/label kecil di atas: "Available for freelance projects"
2. Headline utama yang besar dan kuat, misalnya:
   - I build modern digital experiences
   - Frontend developer crafting thoughtful interfaces
   - Design meets code
3. Subheadline singkat yang menjelaskan value proposition
4. Dua CTA utama:
   - Contact me
   - View projects / Resume
5. Right-side panel berisi:
   - summary profile
   - experience / expertise card
   - stack tags / tools
   - highlight status online

### Visual composition
- Background: radial blur + soft gradients + faint diagonal textures
- Right panel: card glass, border terang, elevated with subtle glow
- Teks utama bisa diberi gradient soft cyan untuk visual cue, tetapi jangan terlalu berlebihan
- Gunakan line separators atau accent element untuk membuat lebih editorial

## Palette proposal
- Background: #070B12 / #0A0F17 / #101827
- Surface: #121826 / #171E2E
- Border: rgba(255,255,255,0.08)
- Text primary: #F5F7FA
- Text secondary: #A1A8B3
- Accent cyan: #7DD3FC / #67E8F9
- Accent violet: #A78BFA
- Accent green: #34D399

## Suggested UI treatments
- Rounded corners: 24-32px untuk panel besar
- Border subtle dan blur ringan
- Shadow very soft, not heavy
- Use gradients for background and big text highlight
- Add noise or faint pattern to create premium feel

## Implementation note for this repo
Project ini sudah memiliki base dark mode dan beberapa elemen modern. Fokus implementasi awal:
- Hero section only
- Update headline, supporting text, CTA, right-side card UI
- Adjust global background + typography system
- Apply hover states and subtle motion

## Success criteria
Desain baru dianggap berhasil jika:
- Hero terasa lebih premium dan modern dibanding versi lama
- Pengunjung langsung memahami siapa saya dan apa yang saya lakukan
- Tampilan tetap clean, responsive, dan mudah dibaca
- Section terasa memorable tanpa terlalu ramai atau overload visual

## Next step
Setelah file ini ditetapkan, akan lanjut ke implementasi hero section sesuai dengan arah ini, dengan prioritas pada:
1. headline styling
2. CTA treatment
3. card overview + stack panel
4. background atmosphere and motion

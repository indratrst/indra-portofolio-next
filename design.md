# Design System Specification (DESIGN.md)

Dokumen ini mendefinisikan sistem desain visual dan komponen UI berdasarkan sampel komponen Hero.

---

## 1. Color Palette

Sistem warna menggunakan gaya *editorial minimalis* dengan latar belakang hangat dan aksen biru elektrik.

### Primary & Background Colors
* **Background (`#F4F3EF`)**: Warm Light Gray / Off-White (Warm Editorial Vibe)[cite: 1]
* **Primary Text (`#111111`)**: Near Black (Kontras tinggi untuk keterbacaan teks utama)[cite: 1]
* **Borders & Dividers (`#D8D6D0`)**: Soft Muted Gray (Garis pemisah subtle)[cite: 1]

### Secondary & Accent Colors
* **Accent Color (`#0d4dbb`)**: Electric Blue (Digunakan untuk titik aksen, *highlight*, dan elemen *icon*)[cite: 1]
* **Muted Text 1 (`#777777`)**: Medium Gray (Navigasi dan sub-label)[cite: 1]
* **Muted Text 2 (`#303030`)**: Dark Muted Gray (Teks metadata dan footer)[cite: 1]
* **Muted Text 3 (`#999999`)**: Light Muted Gray (Teks aksen/label opsional)[cite: 1]

---

## 2. Typography

Gaya tipografi berfokus pada visual editorial modern dengan dominasi teks berukuran besar (*display text*) dan format kapital (*uppercase*).

### Headings / Display Text
* **Hero Accent Name**: Font Medium, `leading-[0.82]`, `tracking-[-0.075em]`, ukuran responsif (`15vw` – `7.2vw`)[cite: 1].
* **Hero Title ("Frontend Developer.")**:
  * **"I'm"**: Font Medium, `tracking-[-0.075em]`, ukuran `15vw` - `4.2vw`[cite: 1].
  * **"Frontend Developer."**: Font Medium, `tracking-[-0.075em]`, offset indentasi (`pl-[7vw]` / `pl-[20svw]`), ukuran responsif `15vw` – `8.2vw`[cite: 1].

### Brand / Logo
* **Header Brand**: Font Semi-bold, `text-[35px]`, `uppercase`, `tracking-[-0.011em]`[cite: 1].

### Navigation & Meta Text
* **Nav Links / CTA Text**: `text-[11px]`, `uppercase`, `tracking-[0.14em]` hingga `tracking-[0.15em]`[cite: 1].
* **Metadata Small Label**: `text-[10px]`, `uppercase`, `tracking-[0.15em]` hingga `tracking-[0.16em]`[cite: 1].
* **Metadata Value**: `text-sm`, `uppercase`, `tracking-[0.08em]`[cite: 1].

---

## 3. Layout & Grid System

* **Container Width**: Full-width dengan batasan padding horizontal responsif (`px-5`, `sm:px-8`, `lg:px-12`)[cite: 1].
* **Min Height**: Screen height responsif (`min-h-[100svh]`)[cite: 1].
* **Grid Column System**:
  * **Desktop**: `lg:grid-cols-12`[cite: 1].
  * **Eyebrow Header**: `lg:col-span-2`[cite: 1].
  * **Main Content Area**: `lg:col-span-9`[cite: 1].
* **Background Grid Overlay**: Garis vertikal tipis (`border-x border-[#D8D6D0]`) untuk mempertegas kesan majalah/editorial[cite: 1].

---

## 4. UI Components & Imagery

### Header Navigation
* Layout `flex` baris tunggal dengan pembatas bawah (`border-b border-[#D8D6D0]`)[cite: 1].
* Link navigasi menggunakan warna `#777777` yang berubah menjadi `#111111` saat interaksi *hover*[cite: 1].

### Avatar / Media Showcase
* **Shape**: Lingkaran penuh (`rounded-full`) dengan efek bayangan kuat (`shadow-2xl`)[cite: 1].
* **Sizing**: Fixed responsif `360px x 360px` (mobile/tablet) hingga `460px x 460px` (desktop)[cite: 1].
* **Layering**: Menggunakan sistem *double-layered image* (gambar foto asli dan versi ilustrasi) yang bertumpuk untuk kebutuhan animasi transisi[cite: 1].

### Scroll Indicator & Footer Bar
* Layout `flex` baris tunggal dengan pembatas atas (`border-t border-[#D8D6D0]`)[cite: 1].
* Kombinasi teks `SCROLL`, garis vertikal pembatas (`h-8 w-px bg-[#111111]`), dan ikon panah beranimasi[cite: 1].

---

## 5. Micro-Interactions & Animations

* **Hover Effects**:
  * **Links**: Smooth color transition (`transition-colors hover:text-[#111111]`)[cite: 1].
  * **CTA Arrow**: Pergeseran posisi melayang ke kanan-atas saat diposisikan *hover* (`group-hover:translate-x-1 group-hover:-translate-y-1`)[cite: 1].
* **Icon Animations**:
  * Ikon scroll down menggunakan animasi *bounce* terus-menerus (`animate-bounce`) dengan warna aksen biru `#0d4dbb`[cite: 1].
* **Image Animations**:
  * Menggunakan custom animasi CSS (`animate-image-real` dan `animate-image-illustration`) dengan efek perbesaran (`scale-110`)[cite: 1].
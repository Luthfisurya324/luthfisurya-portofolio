# Dokumentasi Struktur Proyek

- **Nomor Tugas**: 003
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini bertujuan untuk memberikan gambaran umum mengenai arsitektur dan struktur direktori dari proyek portofolio ini. Tujuannya adalah untuk mempermudah navigasi dan pemahaman alur kerja proyek bagi pengembang baru atau untuk referensi di masa depan.

## 2. Detail Implementasi

Proyek ini dibangun menggunakan **Vite + React + TypeScript**. Struktur direktori utama dirancang untuk memisahkan antara konfigurasi, kode sumber, aset publik, dan dokumentasi.

### Struktur Direktori Utama

- **`/` (Root)**: Direktori akar berisi file konfigurasi tingkat tinggi.
  - `index.html`: Titik masuk utama aplikasi web.
  - `package.json`: Mendefinisikan skrip, dependensi, dan metadata proyek.
  - `vite.config.ts`: Konfigurasi untuk build tool Vite.
  - `tsconfig.json`: Konfigurasi untuk compiler TypeScript.
  - `README.md`: Informasi umum dan panduan proyek.

- **`/src`**: Direktori ini berisi seluruh kode sumber aplikasi.
  - `main.tsx`: File utama yang me-render aplikasi React ke dalam DOM.
  - `App.tsx`: Komponen root yang mengatur layout dan routing (jika ada) dari semua komponen lain.
  - `style.css`: File CSS global untuk styling dasar.
  - **`/components`**: Berisi semua komponen React yang dapat digunakan kembali. Setiap file merepresentasikan satu komponen UI (misal: `Header.tsx`, `Footer.tsx`).
  - **`/data`**: Berisi file data statis atau mock data yang digunakan oleh aplikasi, seperti `cvData.ts`.
  - **`/assets`**: (Jika ada) Biasanya digunakan untuk menyimpan gambar, font, atau aset statis lainnya.

- **`/public`**: Berisi aset statis yang tidak diproses oleh Vite dan akan disalin langsung ke direktori build. Cocok untuk file seperti `favicon.ico` atau `robots.txt`.

- **`/docs`**: Direktori khusus untuk menyimpan semua file dokumentasi proyek, mengikuti format standar yang telah ditentukan.

## 3. Alasan Perubahan

Dokumentasi ini dibuat sebagai bagian dari inisiatif untuk mendokumentasikan seluruh proyek secara komprehensif. Dengan adanya dokumentasi struktur proyek, pengembang dapat dengan cepat memahami di mana harus mencari file tertentu dan bagaimana proyek diorganisir, sehingga mempercepat proses pengembangan dan pemeliharaan.

## 4. Catatan Tambahan & Troubleshooting

- Untuk memulai proyek, jalankan `pnpm install` diikuti dengan `pnpm dev`.
- Pastikan untuk selalu mengikuti struktur yang ada saat menambahkan file atau fitur baru.
- Semua dokumentasi baru harus dibuat di dalam folder `/docs` dan mengikuti template `000_TEMPLATE.md`.

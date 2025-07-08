# Dokumentasi Komponen Utama (App.tsx & main.tsx)

- **Nomor Tugas**: 005
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan peran dan fungsionalitas dari dua file paling fundamental dalam aplikasi: `src/main.tsx` sebagai titik masuk aplikasi, dan `src/App.tsx` sebagai komponen utama yang menyusun seluruh tata letak halaman.

## 2. Detail Implementasi

### `main.tsx` - Titik Masuk Aplikasi

File `main.tsx` memiliki satu tugas utama: me-render komponen `App` ke dalam elemen DOM dengan ID `root` yang ada di `index.html`. Ini adalah titik awal dari eksekusi aplikasi React.

- **Proses**: Mengimpor `React`, `ReactDOM`, komponen `App`, dan file CSS global (`style.css`), lalu menggunakan `ReactDOM.createRoot().render()` untuk memulai aplikasi.
- **Penting**: Komponen `App` dibungkus di dalam `<React.StrictMode>` untuk mengaktifkan pemeriksaan dan peringatan tambahan selama pengembangan.

### `App.tsx` - Komponen Kontainer Utama

File `App.tsx` adalah kerangka utama dari seluruh halaman portofolio. Fungsinya adalah sebagai berikut:

1.  **Mengimpor dan Menyusun Komponen**: Komponen ini mengimpor semua komponen utama lainnya (seperti `Header`, `Hero`, `About`, `Experience`, `Education`, `Contact`, dan `Footer`) dan menyusunnya dalam urutan yang benar untuk membentuk tata letak halaman.

2.  **Efek Latar Belakang Dinamis**: `App.tsx` mengimplementasikan efek visual di mana sebuah gradien atau sorotan pada latar belakang mengikuti kursor mouse. Ini dicapai dengan:
    - Menggunakan hook `useState` untuk menyimpan posisi koordinat X dan Y dari mouse.
    - Menggunakan hook `useEffect` untuk menambahkan *event listener* `mousemove` ke window. Setiap kali mouse bergerak, posisi state akan diperbarui.
    - Melewatkan posisi mouse sebagai *CSS custom properties* (`--mouse-x` dan `--mouse-y`) ke div utama. Properti ini kemudian digunakan oleh `style.css` untuk mengatur posisi gradien pada `dotted-background`.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file-file berikut**:
  - `src/main.tsx`: Titik masuk aplikasi.
  - `src/App.tsx`: Komponen utama dan penyusun layout.
  - `src/style.css`: Menggunakan variabel CSS dari `App.tsx` untuk efek visual.

## 3. Alasan Perubahan

Dokumentasi ini penting untuk memahami alur render aplikasi dari awal hingga akhir. Ini menjelaskan bagaimana semua komponen disatukan dan bagaimana efek visual interaktif diimplementasikan di tingkat aplikasi tertinggi, memberikan fondasi pemahaman sebelum menyelami komponen individual.

## 4. Catatan Tambahan & Troubleshooting

- Efek mouse-tracking didefinisikan di level `App.tsx` sehingga dapat diterapkan secara global ke seluruh latar belakang halaman.
- Jika ada masalah dengan render halaman, `main.tsx` dan `App.tsx` adalah tempat pertama yang baik untuk memulai debugging.

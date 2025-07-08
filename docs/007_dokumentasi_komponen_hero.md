# Dokumentasi Komponen Hero (Hero.tsx)

- **Nomor Tugas**: 007
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan implementasi dari komponen `Hero.tsx`. Komponen ini berfungsi sebagai bagian pembuka utama (di bawah header) yang menyambut pengunjung dengan animasi teks yang dinamis, informasi ringkas, dan tombol ajakan bertindak (Call-to-Action).

## 2. Detail Implementasi

Komponen `Hero` dirancang untuk menarik perhatian pengguna melalui konten yang dinamis dan animasi yang halus.

### Fitur Utama

1.  **Animasi Teks Mengetik (Typing Effect)**:
    - Komponen ini menampilkan serangkaian peran (misalnya, "Graphic Designer", "Video Editor") satu per satu dengan efek seolah-olah sedang diketik.
    - Logika ini dikelola oleh beberapa state:
        - `currentText`: Menyimpan string yang sedang ditampilkan.
        - `currentIndex`: Melacak indeks dari teks yang sedang aktif di dalam array `texts`.
        - `isDeleting`: Menentukan apakah efek saat ini sedang dalam mode mengetik atau menghapus.
    - Sebuah `useEffect` hook mengontrol seluruh proses. Menggunakan `setTimeout`, ia menambahkan atau mengurangi karakter dari `currentText` secara berkala untuk menciptakan ilusi pengetikan.
    - Daftar kata-kata yang akan ditampilkan dapat dengan mudah diubah dengan memodifikasi array `texts` di dalam komponen.

2.  **Animasi Kemunculan (Fade-in & Slide-up)**:
    - Saat komponen pertama kali dimuat, semua elemen di dalamnya (judul, subjudul, paragraf, tombol) muncul dengan animasi transisi.
    - Ini dikendalikan oleh state `isVisible`. Saat komponen di-mount, `useEffect` akan mengubah `isVisible` menjadi `true`.
    - Kelas CSS kondisional kemudian diterapkan untuk mengubah `opacity` dan `transform: translateY` dari elemen, menciptakan efek kemunculan yang elegan.

3.  **Konten Dinamis dari `cvData`**:
    - Nama (`cvData.name`) dan ringkasan (`cvData.summary`) diambil langsung dari objek `cvData` yang diimpor dari `src/data/cvData.ts`. Ini memastikan konsistensi data di seluruh aplikasi.

4.  **Tombol Ajakan Bertindak (CTA)**:
    - Terdapat dua tombol utama: "View My Work" yang mengarah ke bagian `#portfolio` dan "Get In Touch" yang mengarah ke bagian `#contact`.

5.  **Indikator Scroll**:
    - Di bagian bawah, terdapat ikon panah ke bawah dengan teks "Scroll Down" yang beranimasi (memantul) untuk memberi petunjuk kepada pengguna bahwa ada konten lebih lanjut di bawah.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Hero.tsx`: Kode sumber utama untuk komponen hero.
  - `src/data/cvData.ts`: Sumber data untuk nama dan ringkasan.

## 3. Alasan Perubahan

Dokumentasi ini penting untuk membedah logika kompleks di balik animasi dan interaksi di dalam komponen Hero. Ini memudahkan pengembang untuk mengubah kecepatan animasi, daftar teks, atau perilaku lainnya tanpa harus merekayasa ulang seluruh komponen dari awal.

## 4. Catatan Tambahan & Troubleshooting

- Untuk mengubah daftar peran yang ditampilkan dalam efek mengetik, cukup edit array `const texts` di dalam `Hero.tsx`.
- Kecepatan mengetik, menghapus, dan waktu jeda dapat disesuaikan dengan mengubah nilai variabel `typingSpeed`, `deletingSpeed`, dan `pauseTime`.
- Jika animasi tidak terlihat, periksa apakah kelas-kelas Tailwind CSS untuk transisi dan transformasi telah diterapkan dengan benar.

# Dokumentasi Komponen About (About.tsx)

- **Nomor Tugas**: 008
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menguraikan fungsionalitas dan struktur komponen `About.tsx`. Komponen ini berfungsi untuk menyajikan informasi mendalam tentang profil pengguna, termasuk narasi pribadi, daftar keahlian (skills) dengan ikon yang relevan, dan statistik kunci dalam format yang menarik secara visual.

## 2. Detail Implementasi

Komponen `About` menggunakan beberapa teknik untuk menciptakan pengalaman yang dinamis dan informatif.

### Fitur Utama

1.  **Animasi Saat Scroll (Intersection Observer)**:
    - Untuk efisiensi performa, komponen ini menggunakan `IntersectionObserver` API. Animasi hanya akan terpicu ketika bagian (section) `About` masuk ke dalam layar pengguna.
    - Sebuah `ref` (dibuat dengan `useRef`) ditempatkan pada elemen `<section>`. `useEffect` kemudian menginisialisasi `IntersectionObserver` untuk memantau elemen tersebut.
    - Ketika elemen terlihat (berdasarkan `threshold: 0.3`), state `isVisible` diubah menjadi `true`, yang kemudian memicu animasi *fade-in* dan *slide-in* melalui kelas CSS kondisional.

2.  **Tampilan Keterampilan (Skills) Dinamis**:
    - Bagian keterampilan sepenuhnya didorong oleh data dari `cvData.skills` yang diimpor dari `src/data/cvData.ts`.
    - Komponen melakukan iterasi (map) pada array `skills` dan merender kartu untuk setiap kategori keterampilan.
    - **Ikon Dinamis**: Sebuah fungsi internal `getSkillIcon(category)` digunakan untuk menampilkan ikon yang sesuai untuk setiap kategori. Fungsi ini menggunakan `switch-case` untuk mencocokkan nama kategori dengan komponen ikon dari pustaka `react-icons/fa`.

3.  **Konten Statis dan Statistik**:
    - **Teks Naratif**: Paragraf yang menjelaskan latar belakang dan semangat pengguna ditulis langsung (hardcoded) di dalam komponen.
    - **Statistik**: Angka-angka kunci (seperti tahun pengalaman, proyek selesai) didefinisikan dalam sebuah array statis bernama `stats` di dalam komponen.

### Struktur Internal

- **`sectionRef` & `isVisible`**: Mengelola logika animasi berbasis scroll.
- **`getSkillIcon()`**: Fungsi helper untuk memetakan kategori skill ke ikon visual.
- **`stats`**: Array statis untuk menampilkan metrik kunci.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/About.tsx`: Kode sumber utama untuk komponen.
  - `src/data/cvData.ts`: Sumber data untuk bagian keterampilan (skills).

## 3. Alasan Perubahan

Dokumentasi ini penting untuk menjelaskan bagaimana animasi yang efisien diimplementasikan menggunakan `IntersectionObserver` dan bagaimana komponen ini menggabungkan data dinamis dari `cvData` dengan konten statis. Ini memberikan panduan jelas tentang bagian mana yang harus diedit untuk memperbarui informasi yang berbeda (misalnya, mengedit `cvData.ts` untuk skill, atau mengedit `About.tsx` langsung untuk teks naratif).

## 4. Catatan Tambahan & Troubleshooting

- Untuk mengubah atau menambah keterampilan, modifikasi array `skills` di `src/data/cvData.ts`.
- Untuk mengubah teks deskripsi atau statistik, Anda harus mengedit langsung di dalam file `About.tsx`.
- Pastikan pustaka `react-icons` terinstal, karena komponen ini bergantung padanya untuk menampilkan ikon.
- Jika animasi tidak berfungsi, periksa logika `IntersectionObserver` dan pastikan `ref` terpasang dengan benar pada elemen `<section>`.

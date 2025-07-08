# Dokumentasi Komponen Portfolio (Portfolio.tsx) - (Tidak Aktif)

- **Nomor Tugas**: 013
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan komponen `Portfolio.tsx`. Ini adalah komponen galeri portofolio yang canggih dengan fitur penyaringan (filter) interaktif. **PENTING: Komponen ini saat ini tidak digunakan atau dirender di dalam aplikasi utama (`App.tsx`).** Bagian portofolio di situs web saat ini ditangani oleh komponen `Experience.tsx`.

## 2. Detail Implementasi

Komponen `Portfolio` dirancang sebagai sebuah galeri proyek yang dinamis dan dapat disaring.

### Fitur Utama

1.  **Sistem Filter Kategori**:
    - Pengguna dapat mengklik tombol kategori (misalnya, "All", "Logo Design", "Video Editing") untuk menyaring proyek yang ditampilkan.
    - Logika ini dikelola oleh state `activeFilter` dan `filteredProjects`. Sebuah `useEffect` hook akan memperbarui `filteredProjects` setiap kali `activeFilter` berubah.

2.  **Sumber Data Lokal**: 
    - Tidak seperti komponen lain yang bergantung pada `cvData.ts`, komponen ini mendefinisikan data proyeknya sendiri dalam sebuah array konstan bernama `projects`.
    - Setiap objek proyek memiliki struktur yang kaya, termasuk `id`, `title`, `category`, `description`, `image`, `tags`, dan `link`.

3.  **Gambar Placeholder**: Saat ini, properti `image` untuk setiap proyek menggunakan URL placeholder (`/api/placeholder/400/300`). Ini perlu diganti dengan path ke gambar proyek yang sebenarnya.

4.  **Animasi Scroll (Intersection Observer)**: Komponen ini juga menggunakan `IntersectionObserver` untuk memicu animasi saat pengguna menggulir ke bagian ini, memberikan efek kemunculan yang halus untuk setiap kartu proyek.

### Cara Mengaktifkan Komponen

Untuk menggunakan komponen ini, Anda perlu melakukan langkah-langkah berikut:

1.  Buka file `src/App.tsx`.
2.  Impor komponen `Portfolio`:
    ```javascript
    import Portfolio from './components/Portfolio';
    ```
3.  Ganti atau tambahkan komponen di dalam fungsi `App()` di mana Anda ingin menampilkannya. Misalnya, menggantikan `<Experience />`:
    ```javascript
    // Ganti baris ini
    <Experience />

    // Dengan baris ini
    <Portfolio />
    ```

## 3. Alasan Perubahan

Dokumentasi ini penting untuk mencatat keberadaan komponen yang tidak aktif namun fungsional. Ini mencegah kebingungan dan memberikan opsi bagi pengembang di masa depan untuk mengaktifkan galeri portofolio yang lebih visual ini jika diinginkan. Ini juga mengklarifikasi bahwa data proyek untuk komponen ini dikelola secara lokal.

## 4. Catatan Tambahan & Troubleshooting

- Sebelum mengaktifkan komponen ini di lingkungan produksi, pastikan untuk mengganti semua URL gambar placeholder dengan gambar proyek yang relevan.
- Data proyek harus diperbarui langsung di dalam array `projects` di file `Portfolio.tsx`.

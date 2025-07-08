# Dokumentasi Komponen Header (Header.tsx)

- **Nomor Tugas**: 006
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini merinci fungsionalitas dan implementasi dari komponen `Header.tsx`. Komponen ini bertanggung jawab untuk menampilkan navigasi utama situs yang persisten, responsif, dan interaktif di bagian atas halaman.

## 2. Detail Implementasi

Komponen `Header` dirancang untuk memberikan pengalaman pengguna yang mulus saat bernavigasi di dalam halaman. Ini mencakup beberapa fitur utama yang dikelola oleh state internal.

### Fitur Utama

1.  **Header "Sticky" dengan Efek Scroll**:
    - Header tetap berada di atas layar (`fixed top-0`) saat pengguna menggulir halaman.
    - Latar belakang header bersifat transparan saat berada di paling atas. Ketika pengguna menggulir ke bawah lebih dari 50 piksel, latar belakang berubah menjadi putih semi-transparan dengan efek *backdrop-blur*.
    - Fitur ini dikelola oleh state `isScrolled` (boolean). Sebuah `useEffect` hook menambahkan *event listener* `scroll` ke `window` untuk mendeteksi posisi scroll dan memperbarui state `isScrolled`.

2.  **Navigasi Responsif**:
    - **Desktop**: Menampilkan daftar tautan navigasi secara horizontal.
    - **Mobile**: Menyembunyikan daftar tautan dan menampilkan ikon "hamburger" sebagai gantinya.

3.  **Menu Mobile Interaktif**:
    - Ikon hamburger berfungsi sebagai tombol untuk membuka dan menutup menu navigasi mobile.
    - Fungsionalitas ini dikelola oleh state `isMobileMenuOpen` (boolean).
    - Ikon hamburger memiliki animasi transisi yang halus antara keadaan terbuka (menjadi 'X') dan tertutup.
    - Menu navigasi mobile muncul dengan animasi *slide-down*.

### Struktur Internal

- **`navItems`**: Sebuah array objek yang mendefinisikan tautan navigasi. Untuk mengubah atau menambahkan tautan, Anda hanya perlu memodifikasi array ini. Setiap objek berisi `name` (teks yang ditampilkan) dan `href` (ID elemen tujuan).

    ```javascript
    const navItems = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      // ... item lainnya
    ];
    ```

- **State Management**:
  - `useState('isScrolled')`: Mengontrol gaya visual header berdasarkan posisi scroll.
  - `useState('isMobileMenuOpen')`: Mengontrol visibilitas menu navigasi di perangkat mobile.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Header.tsx`: Kode sumber utama untuk komponen header.

## 3. Alasan Perubahan

Dokumentasi ini dibuat untuk menjelaskan logika di balik komponen Header yang interaktif. Dengan memahami bagaimana state `isScrolled` dan `isMobileMenuOpen` bekerja, serta bagaimana data navigasi dikelola, pengembang dapat dengan mudah menyesuaikan atau memperluas fungsionalitas header di masa depan.

## 4. Catatan Tambahan & Troubleshooting

- Pastikan ID yang dirujuk di `href` pada `navItems` (misal: `#about`) cocok dengan `id` yang ada pada komponen seksi yang sesuai (misal: `<section id="about">`).
- Jika animasi tidak berjalan mulus, periksa kelas-kelas transisi dari Tailwind CSS yang diterapkan pada elemen-elemen terkait.

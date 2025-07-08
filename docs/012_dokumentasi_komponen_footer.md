# Dokumentasi Komponen Footer (Footer.tsx)

- **Nomor Tugas**: 012
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan implementasi dari komponen `Footer.tsx`. Komponen ini berfungsi sebagai bagian penutup situs yang komprehensif, menyediakan informasi kontak, navigasi cepat, daftar layanan, tautan media sosial, dan informasi hak cipta.

## 2. Detail Implementasi

Komponen `Footer` dirancang dengan layout multi-kolom untuk menyajikan informasi secara terstruktur dan mudah diakses.

### Fitur Utama

1.  **Layout Empat Kolom**: Pada layar besar, footer dibagi menjadi empat bagian utama:
    - **Brand Section**: Menampilkan nama, deskripsi singkat, dan info kontak dasar (email, lokasi).
    - **Quick Links**: Tautan navigasi internal untuk melompat ke bagian lain di halaman.
    - **Services**: Daftar layanan yang ditawarkan.
    - **Connect**: Berisi ikon tautan media sosial dan formulir pendaftaran newsletter.

2.  **Sumber Data Lokal**: Berbeda dengan komponen lain yang mengambil data dari `cvData.ts`, semua data untuk tautan (`socialLinks`, `quickLinks`) dan layanan (`services`) didefinisikan sebagai array konstan langsung di dalam file `Footer.tsx`. Ini memberikan kontrol yang lebih terisolasi untuk konten spesifik footer.

3.  **Tahun Hak Cipta Dinamis**: Teks hak cipta secara otomatis menampilkan tahun saat ini dengan menggunakan `new Date().getFullYear()`.

4.  **Tombol "Back to Top"**: Di bagian paling bawah, terdapat tombol yang, ketika diklik, akan menggulir halaman kembali ke atas dengan mulus menggunakan `window.scrollTo({ top: 0, behavior: 'smooth' })`.

5.  **Formulir Newsletter (Hanya UI)**: Serupa dengan formulir kontak, terdapat formulir untuk pendaftaran newsletter. **PENTING**: Formulir ini saat ini hanya berupa antarmuka (UI) dan tidak memiliki fungsionalitas backend untuk menyimpan email atau mengirimkan konfirmasi.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Footer.tsx`: Kode sumber utama untuk komponen footer.

## 3. Alasan Perubahan

Dokumentasi ini penting untuk menjelaskan di mana data footer dikelola (yaitu, di dalam komponen itu sendiri) dan untuk mengklarifikasi status fungsionalitas formulir newsletter. Ini membantu pengembang mengetahui file mana yang harus diedit untuk mengubah tautan atau layanan, dan apa yang perlu dilakukan untuk mengaktifkan fitur newsletter.

## 4. Catatan Tambahan & Troubleshooting

- Untuk mengubah tautan sosial, tautan cepat, atau daftar layanan, Anda harus mengedit array `socialLinks`, `quickLinks`, atau `services` langsung di dalam `Footer.tsx`.
- Untuk mengaktifkan formulir newsletter, Anda perlu menghubungkan tombolnya ke layanan pemasaran email atau backend kustom.
- Tautan "Privacy Policy" dan "Terms of Service" saat ini memiliki `href="#"` dan perlu diperbarui jika halaman tersebut sudah ada.

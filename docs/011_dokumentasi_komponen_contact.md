# Dokumentasi Komponen Contact (Contact.tsx)

- **Nomor Tugas**: 011
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini merinci implementasi komponen `Contact.tsx`. Komponen ini menyediakan dua cara utama bagi pengunjung untuk berinteraksi: melalui daftar informasi kontak langsung (email, WhatsApp, LinkedIn) dan melalui formulir kontak interaktif untuk mengirim pesan.

## 2. Detail Implementasi

Komponen `Contact` menggabungkan informasi statis dan dinamis dengan formulir yang dikelola oleh state React.

### Fitur Utama

1.  **Layout Dua Kolom**: Komponen ini menggunakan layout dua kolom pada layar besar. Kolom kiri menampilkan informasi kontak, dan kolom kanan menampilkan formulir kontak.

2.  **Animasi Scroll (Intersection Observer)**:
    - Sama seperti komponen `About`, komponen ini menggunakan `IntersectionObserver` untuk memicu animasi saat pengguna menggulir ke bagian ini. State `isVisible` mengontrol transisi *fade-in* dan *slide-in*.

3.  **Informasi Kontak**: 
    - Menampilkan kartu untuk Email, WhatsApp, dan LinkedIn.
    - Data untuk tautan (`link`) dan email diambil dari `cvData.contact`, sementara teks yang ditampilkan (seperti nomor WhatsApp) ditulis langsung di dalam komponen. Ini memungkinkan fleksibilitas dalam presentasi.

4.  **Formulir Kontak Terkontrol (Controlled Form)**:
    - Formulir ini dikelola sepenuhnya oleh state React (`formData`). Setiap input (nama, email, subjek, pesan) terikat ke state ini.
    - Fungsi `handleInputChange` memperbarui state setiap kali ada perubahan pada input, memastikan data selalu sinkron.

5.  **Simulasi Pengiriman Formulir**:
    - Fungsi `handleSubmit` menangani proses pengiriman.
    - **PENTING**: Saat ini, fungsi ini **hanya mensimulasikan** pengiriman. Tidak ada backend atau layanan pihak ketiga (seperti EmailJS atau Formspree) yang terhubung.
    - Proses simulasi:
        1.  Mencegah pengiriman formulir standar (`e.preventDefault()`).
        2.  Mengatur `isSubmitting` ke `true`, yang menonaktifkan tombol kirim dan menampilkan ikon pemuatan (spinner).
        3.  Menunggu selama 2 detik untuk meniru latensi jaringan.
        4.  Mereset formulir ke keadaan kosong.
        5.  Menampilkan pesan sukses menggunakan `alert()` bawaan browser.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Contact.tsx`: Kode sumber utama untuk komponen.
  - `src/data/cvData.ts`: Sumber data untuk tautan kontak.

## 3. Alasan Perubahan

Dokumentasi ini sangat penting untuk mengklarifikasi status fungsionalitas formulir kontak. Ini memberitahu pengembang bahwa langkah selanjutnya untuk membuat formulir ini berfungsi penuh adalah mengintegrasikannya dengan layanan backend pengiriman email. Selain itu, ini juga menjelaskan bagaimana komponen mengelola state dan data.

## 4. Catatan Tambahan & Troubleshooting

- **Tindakan yang Diperlukan**: Untuk membuat formulir ini berfungsi di lingkungan produksi, Anda perlu mengganti logika simulasi di `handleSubmit` dengan panggilan API ke layanan pengiriman email pilihan Anda.
- Jika ingin mengubah informasi kontak, periksa array `contactInfo` di `Contact.tsx` dan objek `contact` di `cvData.ts`.

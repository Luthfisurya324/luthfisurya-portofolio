# Portofolio Pribadi - Luthfi Surya Saputra

Ini adalah proyek portofolio pribadi yang dibangun menggunakan React, TypeScript, dan Vite, dengan styling menggunakan Tailwind CSS. Proyek ini menampilkan profil, pengalaman kerja, pendidikan, dan proyek-proyek yang pernah dikerjakan dalam format halaman web yang modern dan responsif.

## Fitur Utama

- **Desain Monokrom**: Tampilan bersih dan profesional dengan palet warna monokrom.
- **Dinamis & Data-Driven**: Konten di-render secara dinamis dari file data terpusat (`src/data/cvData.ts`).
- **Animasi Halus**: Efek animasi saat scroll untuk pengalaman pengguna yang lebih menarik.
- **Responsif**: Didesain untuk bekerja dengan baik di berbagai ukuran layar, dari desktop hingga mobile.
- **Formulir Kontak**: Formulir kontak fungsional untuk memudahkan pengunjung menghubungi.

## Teknologi yang Digunakan

- **Framework**: [React](https://reactjs.org/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikon**: [React Icons](https://react-icons.github.io/react-icons/)

## Memulai Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
    git clone [URL_REPOSITORI_ANDA]
    cd luthfisurya-portofolio
    ```

2.  **Instalasi Dependensi**
    Gunakan `pnpm` (atau `npm`/`yarn` jika Anda lebih suka) untuk menginstal semua paket yang diperlukan.
    ```bash
    pnpm install
    ```

3.  **Jalankan Server Pengembangan**
    ```bash
    pnpm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) di browser Anda untuk melihat hasilnya.

## Dokumentasi Proyek

Semua dokumentasi terkait pengembangan, arsitektur, dan komponen dicatat di dalam direktori `/docs`. Dokumentasi ini bertujuan untuk memberikan pemahaman yang jelas tentang struktur proyek dan cara kerja setiap bagian.

### Dokumentasi Utama
- **[Template Dokumentasi](./docs/000_TEMPLATE.md)**: Template standar untuk semua dokumentasi.
- **[Struktur Proyek](./docs/003_dokumentasi_struktur_proyek.md)**: Penjelasan tentang organisasi file dan direktori.
- **[Sumber Data (cvData.ts)](./docs/004_dokumentasi_sumber_data_cv.md)**: Detail mengenai file data terpusat yang menggerakkan konten situs.

### Dokumentasi Komponen
Berikut adalah rincian untuk setiap komponen React dalam proyek:

- **Komponen Inti**:
  - [App & Main](./docs/005_dokumentasi_komponen_utama_app.md): Titik masuk dan komponen utama aplikasi.
- **Komponen Halaman**:
  - [Header](./docs/006_dokumentasi_komponen_header.md): Navigasi utama situs.
  - [Hero](./docs/007_dokumentasi_komponen_hero.md): Bagian pembuka dengan animasi teks.
  - [About](./docs/008_dokumentasi_komponen_about.md): Deskripsi diri dan daftar keahlian.
  - [Experience](./docs/009_dokumentasi_komponen_experience.md): Tampilan pengalaman kerja dan proyek.
  - [Education](./docs/010_dokumentasi_komponen_education.md): Riwayat pendidikan.
  - [Contact](./docs/011_dokumentasi_komponen_contact.md): Informasi kontak dan formulir.
  - [Footer](./docs/012_dokumentasi_komponen_footer.md): Bagian penutup situs.
- **Komponen Tidak Aktif**:
  - [Portfolio (Tidak Aktif)](./docs/013_dokumentasi_komponen_portfolio.md): Komponen galeri portofolio alternatif.

### Riwayat Tugas Lainnya
- [001 - Pembaruan dan Integrasi Data Kontak Dinamis](./docs/001_update_contact_data.md)
- [002 - Penyesuaian Kontak dan Ikon](./docs/002_penyesuaian_kontak_dan_ikon.md)
- [014 - Perbaikan Tema Monochrome Sophisticated](./docs/014_perbaikan_tema_monochrome_sophisticated.md)

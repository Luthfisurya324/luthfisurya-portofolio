# Dokumentasi Komponen Experience (Experience.tsx)

- **Nomor Tugas**: 009
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan komponen `Experience.tsx`, yang bertanggung jawab untuk menampilkan perjalanan profesional pengguna. Komponen ini dibagi menjadi dua bagian utama: "Pengalaman Kerja" dan "Proyek & Kompetisi", keduanya disajikan dalam format linimasa (timeline) vertikal yang rapi.

## 2. Detail Implementasi

Komponen `Experience` dirancang untuk menjadi tampilan visual dari data yang bersumber dari `cvData.ts`.

### Fitur Utama

1.  **Layout Dua Kolom**: Pada layar yang lebih besar (desktop), komponen menggunakan layout grid dua kolom untuk memisahkan antara pengalaman kerja dan proyek. Di perangkat mobile, kedua bagian ini akan ditampilkan secara vertikal.

2.  **Desain Linimasa (Timeline)**:
    - Setiap bagian (pengalaman dan proyek) menggunakan desain linimasa vertikal. Ini dibuat dengan garis batas kiri (`border-l-2`) sebagai sumbu waktu.
    - Setiap entri pada linimasa ditandai dengan ikon bulat yang menonjol dari garis, memberikan titik fokus visual untuk setiap item.

3.  **Sumber Data Terpusat**:
    - Komponen ini tidak memiliki data statis. Seluruh kontennya diambil dari objek `cvData`:
        - Linimasa "Pengalaman Kerja" di-render dengan melakukan iterasi pada array `cvData.experiences`.
        - Linimasa "Proyek & Kompetisi" di-render dengan melakukan iterasi pada array `cvData.projects`.

4.  **Ikon Visual**: Untuk membedakan kedua bagian, ikon dari `react-icons/fa` digunakan pada judul setiap kolom:
    - `FaBriefcase` untuk Pengalaman Kerja.
    - `FaLightbulb` untuk Proyek & Kompetisi.

### ID Sesi untuk Navigasi

- Perlu dicatat bahwa elemen `<section>` utama untuk komponen ini memiliki `id="portfolio"`. ID ini digunakan oleh tautan navigasi di `Header.tsx` untuk menggulir ke bagian ini.

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Experience.tsx`: Kode sumber utama untuk komponen.
  - `src/data/cvData.ts`: Sumber data untuk pengalaman dan proyek.

## 3. Alasan Perubahan

Dokumentasi ini penting untuk menjelaskan bahwa untuk memperbarui riwayat kerja atau daftar proyek, pengembang hanya perlu memodifikasi file `cvData.ts`. Ini mengklarifikasi pemisahan antara data dan presentasi, serta menjelaskan struktur visual dari komponen linimasa.

## 4. Catatan Tambahan & Troubleshooting

- Untuk menambah, mengubah, atau menghapus entri, edit array `experiences` atau `projects` di dalam file `src/data/cvData.ts`.
- Pastikan setiap objek yang ditambahkan ke array tersebut memiliki semua properti yang diperlukan (seperti `role`, `company`, `period`, `description`) agar tidak terjadi error saat rendering.

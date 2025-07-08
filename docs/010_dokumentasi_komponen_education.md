# Dokumentasi Komponen Education (Education.tsx)

- **Nomor Tugas**: 010
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan implementasi dari komponen `Education.tsx`. Komponen ini bertanggung jawab untuk menampilkan riwayat pendidikan pengguna dalam format daftar kartu yang jelas dan mudah dibaca.

## 2. Detail Implementasi

Komponen `Education` dirancang untuk secara dinamis merender daftar institusi pendidikan berdasarkan data terpusat.

### Fitur Utama

1.  **Data-Driven**: Komponen ini 100% didorong oleh data. Ia mengimpor `cvData` dari `src/data/cvData.ts` dan melakukan iterasi (map) pada array `cvData.educations` untuk menampilkan setiap entri pendidikan.

2.  **Layout Kartu (Card Layout)**:
    - Setiap entri pendidikan disajikan dalam sebuah kartu individual dengan latar belakang abu-abu muda (`bg-gray-100`) dan efek bayangan halus saat di-hover.
    - Setiap kartu menampilkan informasi berikut: Institusi, Jurusan, dan Periode.

3.  **Ikon Visual**: 
    - Untuk memberikan identitas visual yang jelas, setiap kartu disertai dengan ikon `FaGraduationCap` dari pustaka `react-icons/fa`, yang ditempatkan di sebelah kiri teks.

### Cara Memperbarui

Untuk menambah, mengubah, atau menghapus riwayat pendidikan, Anda hanya perlu memodifikasi array `educations` di dalam file `src/data/cvData.ts`. Tidak ada perubahan yang diperlukan di dalam komponen `Education.tsx` itu sendiri.

**Contoh Entri Data:**
```typescript
{
    institution: "Nama Universitas/Sekolah",
    major: "Jurusan",
    period: "Tahun Masuk - Tahun Lulus",
}
```

### File yang Dimodifikasi

- **Dokumentasi ini merujuk pada file berikut**:
  - `src/components/Education.tsx`: Kode sumber utama untuk komponen.
  - `src/data/cvData.ts`: Sumber data untuk riwayat pendidikan.

## 3. Alasan Perubahan

Dokumentasi ini dibuat untuk mengklarifikasi bahwa komponen `Education` adalah komponen presentasi murni yang logikanya terpisah dari datanya. Ini memudahkan siapa pun untuk mengelola konten pendidikan tanpa perlu memahami cara kerja React, cukup dengan mengedit file data.

## 4. Catatan Tambahan & Troubleshooting

- Pastikan setiap objek yang ditambahkan ke `cvData.educations` memiliki properti `institution`, `major`, dan `period` untuk menghindari error saat rendering.
- Komponen ini memiliki `id="education"`, yang memungkinkannya untuk ditautkan dari menu navigasi jika diperlukan di masa depan.

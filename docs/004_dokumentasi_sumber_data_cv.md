# Dokumentasi Sumber Data CV (cvData.ts)

- **Nomor Tugas**: 004
- **Tanggal**: 2025-07-08
- **Author**: Cascade

---

## 1. Ringkasan Perubahan

Dokumen ini menjelaskan struktur dan konten dari file `src/data/cvData.ts`. File ini merupakan satu-satunya sumber kebenaran (single source of truth) untuk semua konten dinamis yang ditampilkan di halaman portofolio, seperti data pribadi, pengalaman kerja, keahlian, proyek, dan pendidikan.

## 2. Detail Implementasi

File `cvData.ts` mengekspor sebuah objek konstan bernama `cvData` yang berisi semua informasi yang diperlukan. Struktur data ini didefinisikan menggunakan serangkaian *interface* TypeScript untuk memastikan konsistensi dan keamanan tipe data.

### Struktur Data Utama (`CvData`)

Objek utama `cvData` memiliki properti berikut:

- `name: string`: Nama lengkap yang ditampilkan di header.
- `title: string`: Jabatan atau peran utama.
- `summary: string`: Paragraf singkat tentang diri Anda.
- `contact: object`: Objek yang berisi semua tautan media sosial dan kontak.
  - `email: string`
  - `instagram: string`
  - `whatsapp: string`
  - `linkedin: string`
  - `github: string`
- `experiences: Experience[]`: Array objek yang berisi riwayat pekerjaan.
- `skills: Skill[]`: Array objek yang mengkategorikan keahlian teknis.
- `projects: Project[]`: Array objek untuk menampilkan proyek yang pernah dikerjakan.
- `educations: Education[]`: Array objek untuk riwayat pendidikan.

### Cara Memperbarui Konten

Untuk mengubah konten yang ditampilkan di portofolio, Anda hanya perlu mengedit objek `cvData` di dalam file `src/data/cvData.ts`.

**Contoh: Menambah Pengalaman Kerja Baru**

Untuk menambahkan pengalaman kerja baru, tambahkan objek baru ke dalam array `experiences` dengan mengikuti struktur `Experience`:

```typescript
{
  role: "Nama Peran Baru",
  company: "Nama Perusahaan",
  period: "Bulan Tahun - Bulan Tahun",
  description: "Deskripsi singkat pekerjaan Anda.",
},
```

Pastikan untuk menempatkannya di dalam `experiences: [ ... ]` dan pisahkan dengan koma jika sudah ada entri lain.

## 3. Alasan Perubahan

Dokumentasi ini sangat penting karena memusatkan semua informasi tentang cara mengelola konten portofolio. Siapa pun (termasuk pemilik portofolio) dapat dengan mudah memperbarui informasi tanpa harus menyentuh logika komponen React. Ini memisahkan data dari tampilan, yang merupakan praktik terbaik dalam pengembangan web.

## 4. Catatan Tambahan & Troubleshooting

- Selalu pastikan format data yang Anda masukkan sesuai dengan *interface* yang telah didefinisikan di bagian atas file (misalnya, `Experience`, `Project`).
- Jika terjadi error setelah mengubah file ini, kemungkinan besar ada kesalahan sintaks seperti koma yang hilang atau properti yang tidak sesuai dengan tipenya.
- Setelah melakukan perubahan, simpan file dan aplikasi akan secara otomatis me-refresh (jika server pengembangan sedang berjalan) untuk menampilkan data terbaru.

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  role: string;
  period: string;
}

export interface Education {
    institution: string;
    major: string;
    period: string;
}

export interface CvData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    instagram: string;
    whatsapp: string;
    linkedin: string;
    github: string;
  };
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  educations: Education[];
}

export const cvData: CvData = {
  name: "Luthfi Surya Saputra",
  title: "Creative Designer & Digital Specialist",
  summary:
    "Seorang profesional kreatif dengan pengalaman 6 tahun di bidang desain grafis, video editing, dan pemasaran digital. Bersemangat dalam menciptakan konten visual yang menarik dan mengelola proyek digital dari konsep hingga eksekusi.",
  contact: {
    email: "luthfisurya324.id@gmail.com",
    instagram: "https://www.instagram.com/luthfisurya.id",
    whatsapp: "https://wa.me/6285156773573",
    linkedin: "https://www.linkedin.com/in/luthfi-surya-saputra-486b852a3/",
    github: "https://github.com/Luthfisurya324"
  },
  experiences: [
    {
      role: "Digital Imaging Technician (DIT)",
      company: "Screenplay Films (Series 'My Ice Girl')",
      period: "Juli - Sep 2022",
      description:
        "Bertanggung jawab atas manajemen data dan kualitas gambar langsung di lokasi syuting, memastikan integritas visual dari pra-produksi hingga pasca-produksi.",
    },
    {
      role: "PJ Divisi Publikasi & Dokumentasi",
      company: "Boash Vocational Festival",
      period: "Sep 2021 - Juni 2022",
      description:
        "Memimpin tim untuk mengembangkan dan mengeksekusi semua materi desain dan dokumentasi acara, memastikan konsistensi dengan konsep utama festival.",
    },
    {
      role: "Operator Videotron (VMIX)",
      company: "Boash Vocational Festival",
      period: "Juni 2022",
      description:
        "Mengoperasikan software VMIX untuk mengelola konten visual yang ditampilkan pada videotron panggung utama selama acara berlangsung.",
    },
    {
        role: "Praktek Kerja Lapangan (Desain Grafis)",
        company: "Teaching Factory Boash",
        period: "Feb - Mar 2021",
        description:
          "Mengerjakan berbagai proyek desain nyata untuk klien, termasuk buku tahunan, kalender, poster, dan merchandise.",
      },
  ],
  skills: [
    {
      category: "Desain Grafis",
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      category: "Video Editing & Motion",
      technologies: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut"],
    },
    {
      category: "Live Production",
      technologies: ["OBS Studio", "VMIX"],
    },
    {
        category: "Lainnya",
        technologies: ["Microsoft Office Suite", "Manajemen Proyek", "Komunikasi Tim"],
      },
  ],
  projects: [
    {
      name: "Desain Konsep Alat Pembakar Sampah",
      description:
        "Mengembangkan model 3D untuk alat pembakar sampah inovatif sebagai bagian dari kompetisi PKM tingkat nasional.",
      role: "3D Designer",
      period: "Desember 2023",
    },
    {
      name: "Producer Short Film",
      description:
        "Memimpin produksi film pendek untuk kompetisi tahunan Festival Film Boash, mengelola proyek dari awal hingga akhir.",
      role: "Producer",
      period: "Sep - Nov 2021",
    },
  ],
  educations: [
    {
        institution: "Universitas Ibn Khaldun Bogor",
        major: "S1 Bisnis Digital",
        period: "2023 - Saat Ini",
    },
    {
        institution: "SMK Taruna Terpadu 1",
        major: "Multimedia",
        period: "2019 - 2022",
    }
  ]
};

'use client'

import { useState } from 'react'
import { MapPin, Briefcase, X, ChevronRight, Users, Star, ArrowRight, Globe } from 'lucide-react'

// ─── UI Translations ───────────────────────────────────────────────────────────
const ui = {
  en: {
    badge: "We're Hiring",
    heroTitle1: "Build Your Career",
    heroTitle2: "With PMJ",
    heroDesc: "Join PT Padas Mustapa Jaya and be part of a growing team shaping Indonesia's logistics, heavy equipment, and woodchip industry.",
    statsPositions: "Open Positions",
    statsLocation: "Location",
    statsGrowth: "Growth Opportunities",
    whyJoin: "Why Join Us?",
    whyJoinDesc: "At PMJ, we invest in our people. Here's what makes us a great place to work.",
    benefit1Title: "Competitive Benefits",
    benefit1Desc: "Competitive salary packages, performance-based incentives, and comprehensive allowances for housing, transport, and meals.",
    benefit2Title: "Collaborative Culture",
    benefit2Desc: "Work alongside experienced professionals in a supportive, safe, and professional environment that values every team member.",
    benefit3Title: "Career Growth",
    benefit3Desc: "Access professional development programs, skill-building training, and clear pathways to advance your career within the company.",
    openPositions: "Open Positions",
    openPositionsDesc: "Explore current opportunities and find the role that matches your skills and ambitions.",
    filterAll: "All",
    viewDetails: "View Details",
    applyNow: "Apply Now",
    responsibilities: "Key Responsibilities",
    qualifications: "Qualifications & Skills",
    benefits: "Benefits",
    applyEmail: "Apply via Email",
    close: "Close",
    ctaTitle: "Don't See the Right Role?",
    ctaDesc: "We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.",
    ctaBtn: "Get in Touch",
    noPositions: "No positions found in this category.",
    categories: ["All", "Management", "Logistics", "Human Resources", "Production", "Technical", "Operations", "Administration"],
  },
  id: {
    badge: "Kami Membuka Lowongan",
    heroTitle1: "Bangun Karier Anda",
    heroTitle2: "Bersama PMJ",
    heroDesc: "Bergabunglah dengan PT Padas Mustapa Jaya dan jadilah bagian dari tim yang berkembang dalam industri logistik, alat berat, dan woodchip Indonesia.",
    statsPositions: "Lowongan Terbuka",
    statsLocation: "Lokasi",
    statsGrowth: "Peluang Pengembangan",
    whyJoin: "Mengapa Bergabung?",
    whyJoinDesc: "Di PMJ, kami berinvestasi pada sumber daya manusia. Inilah yang menjadikan kami tempat kerja yang luar biasa.",
    benefit1Title: "Benefit Kompetitif",
    benefit1Desc: "Paket gaji kompetitif, insentif berbasis kinerja, serta tunjangan lengkap untuk perumahan, transportasi, dan makan.",
    benefit2Title: "Budaya Kolaboratif",
    benefit2Desc: "Bekerja bersama para profesional berpengalaman dalam lingkungan yang suportif, aman, dan profesional yang menghargai setiap anggota tim.",
    benefit3Title: "Pengembangan Karier",
    benefit3Desc: "Akses program pengembangan profesional, pelatihan peningkatan keterampilan, dan jalur yang jelas untuk memajukan karier Anda di perusahaan.",
    openPositions: "Lowongan Tersedia",
    openPositionsDesc: "Jelajahi peluang yang tersedia dan temukan posisi yang sesuai dengan keterampilan dan ambisi Anda.",
    filterAll: "Semua",
    viewDetails: "Lihat Detail",
    applyNow: "Lamar Sekarang",
    responsibilities: "Tanggung Jawab Utama",
    qualifications: "Kualifikasi & Keahlian",
    benefits: "Benefit",
    applyEmail: "Lamar via Email",
    close: "Tutup",
    ctaTitle: "Tidak Menemukan Posisi yang Tepat?",
    ctaDesc: "Kami selalu mencari individu berbakat. Kirimkan resume Anda dan kami akan menghubungi Anda untuk peluang di masa mendatang.",
    ctaBtn: "Hubungi Kami",
    noPositions: "Tidak ada posisi yang tersedia dalam kategori ini.",
    categories: ["Semua", "Manajemen", "Logistik", "Sumber Daya Manusia", "Produksi", "Teknis", "Operasional", "Administrasi"],
  },
}

// ─── Category label map (EN ↔ ID) ─────────────────────────────────────────────
const categoryMap = {
  en: {
    Management: "Management",
    Logistics: "Logistics",
    "Human Resources": "Human Resources",
    Production: "Production",
    Technical: "Technical",
    Operations: "Operations",
    Administration: "Administration",
  },
  id: {
    Management: "Manajemen",
    Logistics: "Logistik",
    "Human Resources": "Sumber Daya Manusia",
    Production: "Produksi",
    Technical: "Teknis",
    Operations: "Operasional",
    Administration: "Administrasi",
  },
}

// Filter category value (stored in data) → display label per lang
const filterToCategory = {
  en: {
    All: null,
    Management: "Management",
    Logistics: "Logistics",
    "Human Resources": "Human Resources",
    Production: "Production",
    Technical: "Technical",
    Operations: "Operations",
    Administration: "Administration",
  },
  id: {
    Semua: null,
    Manajemen: "Management",
    Logistik: "Logistics",
    "Sumber Daya Manusia": "Human Resources",
    Produksi: "Production",
    Teknis: "Technical",
    Operasional: "Operations",
    Administrasi: "Administration",
  },
}

// ─── Job Data (bilingual) ──────────────────────────────────────────────────────
const jobs = [
  {
    jobId: 1,
    category: "Management",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Mill Manager",
      subtitle: "Woodchip Factory",
      description: "Direct and coordinate daily mill operations to ensure efficient and smooth production at our woodchip factory.",
      responsibilities: [
        "Direct and coordinate daily mill operations to ensure efficient and smooth production.",
        "Develop and implement strategies to improve performance, increase productivity, and reduce downtime.",
        "Supervise, train, and motivate staff to achieve production targets, fostering a safe and positive workplace culture.",
        "Manage mill budgets, monitor costs, and ensure alignment with company financial objectives.",
        "Implement and enforce quality standards throughout the production process.",
        "Oversee preventive maintenance and repairs to maximize equipment reliability.",
        "Ensure strict compliance with health, safety, and environmental regulations.",
        "Prepare and deliver operational and performance reports to Project Manager & Director.",
      ],
      qualifications: [
        "Minimum 5 years of proven experience in mill/plant management, preferably in the woodchip, wood processing, or pulp & paper industry.",
        "Strong ability to lead and develop teams to achieve operational excellence.",
        "Solid background in budgeting, cost control, and financial management.",
        "Excellent written and verbal communication skills for staff, management, and stakeholders.",
        "Analytical mindset with the ability to quickly identify and resolve operational challenges.",
        "In-depth understanding of woodchip milling processes, machinery, and technologies.",
        "Strategic thinker with the ability to drive efficiency and profitability.",
        "Bachelor's degree in Engineering, Agriculture, or Business Management (or equivalent).",
      ],
      benefits: [
        "Competitive salary package aligned with managerial responsibilities.",
        "Allowances (housing, transport, meals) and performance-based incentives.",
        "Opportunities for career growth and professional development.",
        "Supportive, safe, and professional work environment.",
      ],
    },
    ind: {
      title: "Mill Manager",
      subtitle: "Pabrik Woodchip",
      description: "Mengarahkan dan mengoordinasikan seluruh aktivitas operasional pabrik setiap hari agar proses produksi berjalan lancar dan efisien.",
      responsibilities: [
        "Mengarahkan dan mengoordinasikan seluruh aktivitas operasional pabrik setiap hari agar proses produksi berjalan lancar dan efisien.",
        "Menyusun dan menerapkan strategi untuk meningkatkan kinerja pabrik, produktivitas, serta meminimalisasi downtime.",
        "Membina, melatih, dan memotivasi staf agar mencapai target produksi dengan tetap menjaga budaya kerja yang aman dan positif.",
        "Menyusun dan mengendalikan anggaran pabrik, memonitor biaya, serta memastikan kinerja keuangan sesuai dengan tujuan perusahaan.",
        "Mengimplementasikan dan menegakkan standar kualitas pada seluruh proses produksi.",
        "Mengawasi perawatan preventif dan perbaikan mesin untuk memastikan keandalan operasional.",
        "Memastikan kepatuhan penuh terhadap regulasi K3 (Keselamatan dan Kesehatan Kerja) serta peraturan lingkungan.",
        "Menyusun dan menyampaikan laporan kinerja serta operasional secara rutin kepada manajemen senior.",
      ],
      qualifications: [
        "Minimal 5 tahun pengalaman di bidang manajemen pabrik/mill, lebih disukai di industri woodchip, pengolahan kayu, atau pulp & paper.",
        "Terbukti mampu memimpin dan mengembangkan tim untuk mencapai keunggulan operasional.",
        "Memiliki kemampuan kuat dalam pengelolaan anggaran, pengendalian biaya, dan manajemen keuangan.",
        "Kemampuan komunikasi lisan dan tulisan yang sangat baik untuk berinteraksi dengan staf, manajemen, dan pihak eksternal.",
        "Berpikir analitis dan mampu dengan cepat mengidentifikasi serta menyelesaikan permasalahan operasional.",
        "Memahami secara mendalam proses produksi woodchip, mesin, dan teknologi terkait.",
        "Memiliki visi strategis dalam mendorong efisiensi dan profitabilitas pabrik.",
        "Minimal lulusan S1 Teknik (Industri/Mesin), Pertanian, atau Manajemen Bisnis (atau setara).",
      ],
      benefits: [
        "Paket gaji kompetitif sesuai tanggung jawab manajerial.",
        "Tunjangan (perumahan, transportasi, makan) dan insentif berbasis kinerja.",
        "Kesempatan pengembangan karier dan pelatihan profesional.",
        "Lingkungan kerja yang aman, profesional, dan mendukung.",
      ],
    },
  },
  {
    jobId: 2,
    category: "Logistics",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Logistic Manager",
      subtitle: "",
      description: "Lead and manage all logistics operations including procurement, warehouse management, inventory control, and distribution.",
      responsibilities: [
        "Develop logistics plans based on operational requirements.",
        "Monitor and ensure smooth distribution processes across work areas.",
        "Control stock accuracy and ensure sufficient inventory levels.",
        "Supervise receiving, storage, and dispatching of goods.",
        "Ensure accurate manual and digital stock recording and conduct regular audits.",
        "Manage delivery schedules and routes for efficiency and punctuality.",
        "Coordinate with purchasing, production, and operations departments.",
        "Prepare weekly and monthly logistics reports for management.",
        "Lead, train, and evaluate the logistics team's performance.",
      ],
      qualifications: [
        "Bachelor's degree in Logistics, Management, Industrial Engineering, or a related field.",
        "Minimum 5 years of experience in logistics or supply chain, with at least 2 years in a managerial or supervisory role.",
        "Strong knowledge of procurement, warehouse management, inventory control, and distribution.",
        "Proven ability to plan, coordinate, and analyze logistics operations effectively.",
        "Proficient in Microsoft Office (especially Excel) and manual logistics administration.",
        "Able to work under pressure and lead a team effectively.",
        "Detail-oriented, communicative, and results-driven.",
        "High integrity and cost-efficiency awareness.",
      ],
      benefits: [
        "Competitive salary based on experience.",
        "Meal, transportation, and overtime allowances.",
        "Opportunities for training and career development.",
        "Supportive and professional working environment.",
      ],
    },
    ind: {
      title: "Logistic Manager",
      subtitle: "",
      description: "Memimpin dan mengelola seluruh operasional logistik termasuk pengadaan, manajemen gudang, pengendalian inventaris, dan distribusi.",
      responsibilities: [
        "Menyusun rencana kebutuhan logistik berdasarkan permintaan operasional.",
        "Memantau dan memastikan kelancaran proses distribusi barang ke seluruh area kerja.",
        "Mengontrol ketersediaan dan ketepatan stok barang di gudang.",
        "Mengawasi penerimaan, penyimpanan, dan pengeluaran barang.",
        "Menjamin ketepatan pencatatan dan pelaporan stok secara manual maupun digital serta melakukan audit berkala.",
        "Mengatur jadwal dan rute pengiriman agar efisien dan tepat waktu.",
        "Berkoordinasi dengan bagian pembelian, produksi, dan operasional untuk kelancaran arus barang.",
        "Menyusun laporan logistik mingguan dan bulanan untuk manajemen.",
        "Memimpin, membina, dan mengevaluasi kinerja tim logistik.",
      ],
      qualifications: [
        "Pendidikan minimal S1 Logistik, Manajemen, Teknik Industri, atau bidang terkait.",
        "Pengalaman minimal 5 tahun di bidang logistik/supply chain, dengan minimal 2 tahun di posisi manajerial atau supervisi.",
        "Memahami proses procurement, warehouse management, inventory control, dan distribusi.",
        "Mampu melakukan perencanaan, koordinasi, dan analisis logistik secara efektif.",
        "Terampil menggunakan Microsoft Office (terutama Excel) dan sistem administrasi logistik manual.",
        "Mampu bekerja di bawah tekanan serta memiliki kemampuan memimpin tim dengan baik.",
        "Teliti, komunikatif, dan berorientasi pada hasil.",
        "Memiliki integritas tinggi dan mampu menjaga efisiensi biaya operasional.",
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman.",
        "Tunjangan makan, transport, dan insentif lembur.",
        "Kesempatan pelatihan dan pengembangan karier.",
        "Lingkungan kerja profesional dan suportif.",
      ],
    },
  },
  {
    jobId: 3,
    category: "Human Resources",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "HR & GA Supervisor",
      subtitle: "",
      description: "Oversee human resources and general affairs functions including recruitment, employee data management, training, and compliance.",
      responsibilities: [
        "Manage recruitment and selection processes (job postings, CV screening, interviews).",
        "Handle employee personal data, attendance, leave, and HR documentation.",
        "Develop training schedules and programs based on performance evaluation results.",
        "Coordinate employee performance appraisal processes.",
        "Handle employee grievances, disciplinary issues, and corrective actions.",
        "Maintain harmonious labor relations in compliance with labor regulations.",
        "Collect and verify attendance data for payroll processing.",
        "Administer BPJS Employment and Health programs.",
        "Prepare monthly HR reports for management.",
      ],
      qualifications: [
        "Bachelor's degree (S1) in Psychology, Law, Human Resource Management, or related field.",
        "Minimum 3 years of experience in Human Resources, with at least 1–2 years in a supervisory or leadership role.",
        "Strong understanding of Indonesian Labor Law, BPJS regulations, and other employment-related government policies.",
        "Proficient in Microsoft Excel and manual HR administration.",
        "Able to work under pressure while maintaining high-quality performance.",
        "Excellent communication, coordination, and leadership skills.",
        "Detail-oriented, disciplined, and capable of managing work priorities effectively.",
      ],
      benefits: [
        "Competitive salary based on experience.",
        "Meal, transportation, and overtime allowances.",
        "Opportunities for training and professional development.",
        "Supportive and professional work environment.",
      ],
    },
    ind: {
      title: "Supervisor HR & GA",
      subtitle: "",
      description: "Mengawasi fungsi sumber daya manusia dan urusan umum termasuk rekrutmen, manajemen data karyawan, pelatihan, dan kepatuhan.",
      responsibilities: [
        "Mengelola proses rekrutmen dan seleksi karyawan secara manual (iklan lowongan, seleksi CV, wawancara).",
        "Mengelola data pribadi karyawan, absensi, cuti, dan dokumen kepegawaian.",
        "Menyusun jadwal dan kebutuhan pelatihan sesuai hasil evaluasi kinerja.",
        "Mengkoordinasikan proses evaluasi kinerja karyawan (manual appraisal).",
        "Menangani keluhan karyawan, masalah kedisiplinan, dan tindakan disipliner.",
        "Menjaga hubungan kerja yang harmonis dan sesuai ketentuan ketenagakerjaan.",
        "Mengumpulkan dan memverifikasi data kehadiran untuk proses payroll.",
        "Mengelola administrasi BPJS Ketenagakerjaan dan Kesehatan.",
        "Membuat laporan HR bulanan untuk manajemen.",
      ],
      qualifications: [
        "Pendidikan minimal S1 Psikologi / Hukum / Manajemen SDM atau bidang terkait.",
        "Pengalaman minimal 3 tahun di bidang HRD, dengan 1–2 tahun sebagai Supervisor atau Leader.",
        "Memahami UU Ketenagakerjaan, BPJS, dan peraturan pemerintah terkait ketenagakerjaan.",
        "Mahir menggunakan Microsoft Excel dan administrasi dokumen HR manual.",
        "Mampu bekerja di bawah tekanan dan tetap menjaga kualitas hasil kerja.",
        "Mempunyai kemampuan komunikasi, koordinasi, dan kepemimpinan yang baik.",
        "Teliti, disiplin, dan mampu mengatur prioritas kerja.",
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman.",
        "Tunjangan makan, transport, dan insentif lembur.",
        "Kesempatan pelatihan dan pengembangan keterampilan.",
        "Lingkungan kerja yang mendukung dan profesional.",
      ],
    },
  },
  {
    jobId: 4,
    category: "Production",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Production Supervisor",
      subtitle: "Woodchip Factory",
      description: "Supervise all woodchip production activities, manage work schedules, and ensure production targets and quality standards are met.",
      responsibilities: [
        "Supervise all woodchip production activities to meet targets and quality standards.",
        "Organize work schedules, assign tasks, and ensure smooth production operations.",
        "Monitor raw wood material usage, chipping machine efficiency, and production output.",
        "Coordinate with the maintenance team to keep machines and equipment in optimal condition.",
        "Ensure compliance with SOPs, safety standards (OHS/K3), and maintain workplace cleanliness.",
        "Prepare daily, weekly, and monthly production reports for management.",
      ],
      qualifications: [
        "Minimum Diploma (D3) / Bachelor's Degree (S1) in Industrial Engineering, Mechanical Engineering, or related fields.",
        "At least 3 years of experience in manufacturing/production, preferably in woodchip, wood processing, or pulp & paper industry.",
        "Strong knowledge of chipping, drying, packaging processes, and quality control.",
        "Able to plan production schedules, manage workflow, and ensure targets are achieved.",
        "Good leadership, communication, and team coordination skills.",
        "Familiar with occupational health & safety (OHS/K3) standards, waste management, and energy efficiency.",
        "Willing to work in a shift system and capable of making quick decisions on the production floor.",
      ],
      benefits: [
        "Competitive salary based on experience and qualifications.",
        "Position, meal, transport, and overtime allowances.",
        "Career development opportunities and training in the woodchip industry.",
        "Professional, safe, and supportive work environment.",
      ],
    },
    ind: {
      title: "Supervisor Produksi",
      subtitle: "Pabrik Woodchip",
      description: "Mengawasi seluruh aktivitas produksi woodchip, mengatur jadwal kerja, dan memastikan target produksi serta standar kualitas terpenuhi.",
      responsibilities: [
        "Mengawasi seluruh aktivitas produksi woodchip agar berjalan sesuai target dan standar kualitas.",
        "Mengatur jadwal kerja, membagi tugas, serta memastikan kelancaran operasional lini produksi.",
        "Memantau penggunaan bahan baku kayu, efisiensi mesin chipping, dan hasil produksi.",
        "Berkoordinasi dengan bagian maintenance untuk memastikan mesin produksi dalam kondisi optimal.",
        "Menjamin penerapan SOP, keselamatan kerja (K3), serta menjaga kebersihan area produksi.",
        "Membuat laporan produksi harian, mingguan, dan bulanan serta melaporkannya ke manajemen.",
      ],
      qualifications: [
        "Pendidikan minimal D3/S1 Teknik Industri, Teknik Mesin, atau jurusan terkait.",
        "Pengalaman minimal 3 tahun di bidang produksi pabrik, lebih disukai di industri woodchip, pengolahan kayu, atau pulp & paper.",
        "Memahami proses chipping, pengeringan, pengemasan, serta pengendalian mutu dalam produksi woodchip.",
        "Mampu menyusun rencana produksi, mengatur alur kerja, dan memastikan target produksi tercapai.",
        "Memiliki kemampuan leadership, komunikasi, dan koordinasi tim yang baik.",
        "Memahami standar K3 (Keselamatan dan Kesehatan Kerja), pengendalian limbah, serta efisiensi energi di pabrik woodchip.",
        "Terbiasa bekerja dengan sistem shift dan mampu mengambil keputusan cepat di lapangan.",
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman dan kualifikasi.",
        "Tunjangan jabatan, makan, transportasi, dan lembur.",
        "Kesempatan pengembangan karier dan pelatihan di industri woodchip.",
        "Lingkungan kerja yang profesional, aman, dan mendukung.",
      ],
    },
  },
  {
    jobId: 5,
    category: "Technical",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Heavy Equipment Mechanic",
      subtitle: "",
      description: "Conduct daily inspections, routine maintenance, and perform repairs on heavy equipment including excavators and loaders.",
      responsibilities: [
        "Conduct daily inspections and routine maintenance of heavy equipment.",
        "Perform minor to major repairs on excavators and loaders.",
        "Handle hydraulic, engine, and electrical system issues.",
        "Prepare reports on inspections and repairs.",
        "Maintain cleanliness, orderliness, and proper use of tools and equipment.",
      ],
      qualifications: [
        "Minimum Vocational High School (SMK) / Diploma in Mechanical Engineering, Automotive, or Heavy Equipment.",
        "At least 2–3 years of experience as a heavy equipment mechanic, especially for excavators and loaders.",
        "Strong knowledge of hydraulic systems, electrical systems, and diesel engine maintenance.",
        "Skilled in performing periodic maintenance, troubleshooting, and repair of heavy equipment.",
        "Able to read and understand machine manuals and diagrams.",
        "Having a Heavy Equipment Mechanic training certificate is a plus.",
        "Capable of working both independently and as part of a team in the field.",
        "Honest, disciplined, and willing to work under pressure with high mobility.",
      ],
      benefits: [
        "Competitive salary based on experience.",
        "Meal, transport allowance, and overtime incentives.",
        "Opportunities for training and skill development.",
        "Supportive and professional work environment.",
      ],
    },
    ind: {
      title: "Mekanik Alat Berat",
      subtitle: "",
      description: "Melakukan pemeriksaan harian, perawatan rutin, dan perbaikan pada alat berat termasuk excavator dan loader.",
      responsibilities: [
        "Melakukan pemeriksaan harian dan pemeliharaan rutin alat berat.",
        "Melakukan perbaikan kerusakan ringan hingga berat pada excavator dan loader.",
        "Menangani sistem hidrolik, mesin, serta kelistrikan unit.",
        "Membuat laporan hasil pemeriksaan dan perbaikan.",
        "Menjaga kerapian dan ketertiban area kerja serta peralatan.",
      ],
      qualifications: [
        "Pendidikan minimal SMK/D3 jurusan Teknik Mesin / Otomotif / Alat Berat atau setara.",
        "Memiliki pengalaman minimal 2–3 tahun sebagai mekanik alat berat.",
        "Menguasai sistem hidrolik, elektrikal, dan perawatan mesin diesel.",
        "Terbiasa melakukan perawatan berkala, troubleshooting, dan perbaikan unit alat berat.",
        "Mampu membaca manual book / diagram mesin.",
        "Diutamakan memiliki sertifikat pelatihan mekanik alat berat (nilai plus).",
        "Memiliki kemampuan bekerja secara tim maupun mandiri di lapangan.",
        "Jujur, disiplin, dan siap bekerja dengan target serta mobilitas tinggi.",
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman.",
        "Tunjangan makan, transport, dan insentif lembur.",
        "Kesempatan pelatihan dan pengembangan keterampilan.",
        "Lingkungan kerja yang mendukung dan profesional.",
      ],
    },
  },
  {
    jobId: 6,
    category: "Operations",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Excavator Operator",
      subtitle: "",
      description: "Operate excavators safely and efficiently for digging, loading, leveling, and other earthmoving activities on project sites.",
      responsibilities: [
        "Operate excavators safely and efficiently according to project requirements.",
        "Conduct daily equipment checks before and after operation.",
        "Report any equipment issues or malfunctions to the supervisor/mechanic.",
        "Assist in minor maintenance and keep the equipment clean.",
        "Ensure compliance with safety regulations and company policies.",
      ],
      qualifications: [
        "Minimum Vocational High School (SMK) or equivalent.",
        "At least 2 years of proven experience operating excavators in construction, mining, or related fields.",
        "Possess a valid operator license/certification (SIO or equivalent).",
        "Skilled in operating excavators for digging, loading, leveling, and other earthmoving activities.",
        "Good knowledge of machine safety procedures and basic maintenance.",
        "Able to follow instructions and work effectively with the site team.",
        "Physically fit, disciplined, and committed to workplace safety.",
      ],
      benefits: [
        "Competitive salary based on skills and experience.",
        "Allowances (meal, transport, overtime).",
        "Training opportunities and career development.",
        "Supportive and safety-focused work environment.",
      ],
    },
    ind: {
      title: "Operator Excavator",
      subtitle: "",
      description: "Mengoperasikan excavator dengan aman dan efisien untuk penggalian, pemuatan, perataan, serta pekerjaan pemindahan tanah lainnya.",
      responsibilities: [
        "Mengoperasikan excavator dengan aman dan efisien sesuai kebutuhan proyek.",
        "Melakukan pemeriksaan harian pada unit sebelum dan sesudah digunakan.",
        "Melaporkan setiap masalah atau kerusakan unit kepada supervisor/mekanik.",
        "Membantu perawatan ringan dan menjaga kebersihan unit.",
        "Memastikan kepatuhan terhadap prosedur keselamatan dan kebijakan perusahaan.",
      ],
      qualifications: [
        "Pendidikan minimal SMK atau setara.",
        "Memiliki pengalaman kerja minimal 2 tahun sebagai operator excavator di bidang konstruksi, pertambangan, atau industri terkait.",
        "Memiliki lisensi/sertifikat operator (SIO atau setara) yang masih berlaku.",
        "Mampu mengoperasikan excavator untuk penggalian, pemuatan, perataan, serta pekerjaan pemindahan tanah lainnya.",
        "Memahami prosedur keselamatan kerja mesin serta perawatan dasar.",
        "Mampu mengikuti instruksi dan bekerja sama dengan tim di lapangan.",
        "Sehat jasmani, disiplin, serta memiliki komitmen tinggi terhadap keselamatan kerja.",
      ],
      benefits: [
        "Gaji kompetitif sesuai keterampilan dan pengalaman.",
        "Tunjangan (makan, transportasi, lembur).",
        "Kesempatan pelatihan dan pengembangan karier.",
        "Lingkungan kerja yang aman dan mendukung.",
      ],
    },
  },
  {
    jobId: 7,
    category: "Operations",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Loader Operator",
      subtitle: "",
      description: "Operate loaders safely and efficiently for loading, stockpiling, leveling, and material handling on daily site operations.",
      responsibilities: [
        "Operate loaders safely and efficiently to support daily site operations.",
        "Perform pre-start checks and ensure the loader is in good condition before use.",
        "Load materials into trucks and move stockpiles as instructed.",
        "Report any equipment damage or malfunction immediately.",
        "Follow company safety standards and operational procedures.",
      ],
      qualifications: [
        "Minimum Vocational High School (SMK) or equivalent.",
        "At least 2 years of experience operating loaders in construction, mining, or related industries.",
        "Possess a valid operator license/certification (SIO or equivalent).",
        "Skilled in operating loaders for loading, stockpiling, leveling, and material handling.",
        "Good knowledge of equipment safety procedures and basic maintenance.",
        "Able to work in coordination with truck drivers and site supervisors.",
        "Physically fit, disciplined, and safety-oriented.",
      ],
      benefits: [
        "Competitive salary depending on skills and experience.",
        "Allowances (meal, transport, overtime).",
        "Training and career development opportunities.",
        "Supportive and professional working environment.",
      ],
    },
    ind: {
      title: "Operator Loader",
      subtitle: "",
      description: "Mengoperasikan loader dengan aman dan efisien untuk pemindahan material, penumpukan, perataan, dan operasional harian di lapangan.",
      responsibilities: [
        "Mengoperasikan loader dengan aman dan efisien untuk mendukung kegiatan operasional harian di lapangan.",
        "Melakukan pemeriksaan awal (pre-start check) dan memastikan kondisi loader baik sebelum digunakan.",
        "Memuat material ke dalam truk serta memindahkan tumpukan material sesuai instruksi.",
        "Segera melaporkan kerusakan atau gangguan pada unit kepada atasan.",
        "Mematuhi standar keselamatan kerja dan prosedur operasional perusahaan.",
      ],
      qualifications: [
        "Pendidikan minimal SMK atau setara.",
        "Memiliki pengalaman kerja minimal 2 tahun sebagai operator loader di bidang konstruksi, pertambangan, atau industri terkait.",
        "Memiliki lisensi/sertifikat operator (SIO atau setara) yang masih berlaku.",
        "Terampil mengoperasikan loader untuk pemindahan material, penumpukan, perataan, dan penanganan material lainnya.",
        "Memahami prosedur keselamatan kerja alat serta perawatan dasar.",
        "Mampu bekerja sama dengan sopir truk dan supervisor lapangan.",
        "Sehat jasmani, disiplin, serta berorientasi pada keselamatan kerja.",
      ],
      benefits: [
        "Gaji kompetitif sesuai keterampilan dan pengalaman.",
        "Tunjangan (makan, transportasi, lembur).",
        "Kesempatan pelatihan dan pengembangan karier.",
        "Lingkungan kerja yang profesional dan mendukung.",
      ],
    },
  },
  {
    jobId: 8,
    category: "Production",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Production Helper",
      subtitle: "Woodchip Factory",
      description: "Assist in the woodchip manufacturing process including sorting, feeding raw materials, packaging, and supporting machine operators.",
      responsibilities: [
        "Assist in the production process of woodchip manufacturing (sorting, feeding raw materials, packaging, etc.).",
        "Support machine operators during daily production activities.",
        "Maintain cleanliness and orderliness in the production area.",
        "Follow safety regulations and use protective equipment as required.",
        "Report any irregularities or problems to the supervisor.",
      ],
      qualifications: [
        "Minimum High School (SMA/SMK) or equivalent.",
        "Prior experience in a factory or production environment is an advantage, but fresh graduates are welcome.",
        "Physically fit and able to work in a factory setting (lifting, standing for long periods, working in shifts).",
        "Willing to learn machine operation and follow work instructions.",
        "Basic knowledge of workplace safety (K3) is a plus.",
        "Disciplined, hardworking, and able to work in a team.",
      ],
      benefits: [
        "Competitive salary in line with company standards.",
        "Overtime, meal, and transport allowances.",
        "Training opportunities for skill development.",
        "Safe and supportive work environment.",
      ],
    },
    ind: {
      title: "Helper Produksi",
      subtitle: "Pabrik Woodchip",
      description: "Membantu proses pembuatan woodchip termasuk penyortiran, memasukkan bahan baku, pengemasan, dan mendukung operator mesin.",
      responsibilities: [
        "Membantu proses produksi pembuatan woodchip (penyortiran, memasukkan bahan baku, pengemasan, dll.).",
        "Mendukung operator mesin dalam kegiatan produksi harian.",
        "Menjaga kebersihan dan kerapian area produksi.",
        "Mematuhi aturan keselamatan kerja serta menggunakan APD yang diwajibkan.",
        "Melaporkan setiap kendala atau masalah kepada supervisor.",
      ],
      qualifications: [
        "Pendidikan minimal SMA/SMK atau setara.",
        "Pengalaman sebelumnya di pabrik atau lingkungan produksi menjadi nilai tambah, namun lulusan baru dipersilakan melamar.",
        "Sehat jasmani dan mampu bekerja di lingkungan pabrik (mengangkat beban, berdiri dalam waktu lama, bekerja dengan sistem shift).",
        "Bersedia belajar mengoperasikan mesin dan mengikuti instruksi kerja.",
        "Memiliki pengetahuan dasar tentang Keselamatan dan Kesehatan Kerja (K3) menjadi nilai tambah.",
        "Disiplin, rajin, dan mampu bekerja sama dalam tim.",
      ],
      benefits: [
        "Gaji kompetitif sesuai standar perusahaan.",
        "Tunjangan lembur, makan, dan transportasi.",
        "Kesempatan pelatihan untuk pengembangan keterampilan.",
        "Lingkungan kerja yang aman dan mendukung.",
      ],
    },
  },
  {
    jobId: 9,
    category: "Administration",
    location: "Kubu Raya – West Kalimantan",
    type: "Contract",
    en: {
      title: "Production Administrator",
      subtitle: "",
      description: "Manage daily production data, prepare reports, and coordinate administrative needs with the production team.",
      responsibilities: [
        "Input and manage daily production data.",
        "Prepare daily, weekly, and monthly production reports.",
        "Monitor and record the use of raw materials and production outputs.",
        "Coordinate with the production team regarding operational data and administrative needs.",
        "Organize and maintain production documents and records systematically.",
        "Support the production team by ensuring the completeness and accuracy of operational data.",
      ],
      qualifications: [
        "Minimum Vocational High School (SMK) / Diploma (D3) in Office Administration, Management, Accounting, Industrial Engineering, or related field.",
        "Minimum 1–2 years of experience as a Production Admin / Operational Admin / Warehouse Admin.",
        "Proficient in computer operation, especially Microsoft Excel and Word for data processing and reporting.",
        "Experienced in preparing daily, weekly, and monthly production reports.",
        "Strong administrative, documentation, and data management skills.",
        "Good communication skills and able to coordinate with production teams and related departments.",
        "Detail-oriented, disciplined, and able to work with targets and deadlines.",
      ],
      benefits: [
        "Competitive salary based on experience.",
        "Meal allowance, transportation allowance, and overtime incentives.",
        "Opportunities for training and skill development.",
        "Supportive and professional working environment.",
      ],
    },
    ind: {
      title: "Admin Produksi",
      subtitle: "",
      description: "Mengelola data produksi harian, membuat laporan, dan mengkoordinasikan kebutuhan administrasi dengan tim produksi.",
      responsibilities: [
        "Menginput dan mengelola data hasil produksi harian.",
        "Membuat laporan produksi harian, mingguan, dan bulanan.",
        "Mengontrol dan mencatat penggunaan bahan baku serta hasil produksi.",
        "Berkoordinasi dengan tim produksi terkait data pekerjaan dan kebutuhan administrasi.",
        "Mengarsipkan dokumen produksi dengan rapi dan terstruktur.",
        "Membantu memastikan kelengkapan data operasional produksi.",
      ],
      qualifications: [
        "Pendidikan minimal SMK/D3 jurusan Administrasi Perkantoran / Manajemen / Akuntansi / Teknik Industri atau setara.",
        "Memiliki pengalaman minimal 1–2 tahun sebagai Admin Produksi / Admin Operasional / Admin Gudang.",
        "Mampu mengoperasikan komputer dengan baik (Microsoft Excel, Word, dan pengolahan data).",
        "Terbiasa membuat laporan produksi harian, mingguan, dan bulanan.",
        "Memiliki kemampuan administrasi, pengarsipan, dan pengolahan data yang rapi dan sistematis.",
        "Mampu berkomunikasi dengan baik dan berkoordinasi dengan tim produksi serta bagian terkait.",
        "Teliti, disiplin, dan mampu bekerja dengan target serta deadline.",
      ],
      benefits: [
        "Gaji kompetitif sesuai pengalaman.",
        "Tunjangan makan, transport, dan insentif lembur.",
        "Kesempatan pelatihan dan pengembangan keterampilan.",
        "Lingkungan kerja yang mendukung dan profesional.",
      ],
    },
  },
]

// ─── Card accent colours ───────────────────────────────────────────────────────
const categoryColors = {
  Management: "bg-red-600 text-white",
  Logistics: "bg-black text-white",
  "Human Resources": "bg-red-600 text-white",
  Production: "bg-black text-white",
  Technical: "bg-red-600 text-white",
  Operations: "bg-black text-white",
  Administration: "bg-red-600 text-white",
}

// ─── Email body builders ───────────────────────────────────────────────────────
function buildEmailBody(lang, title, location, type) {
  if (lang === 'en') {
    return `Dear PT Padas Mustapa Jaya Recruitment Team,\n\nI am writing to formally express my interest in applying for the ${title} position (Location: ${location}, Employment Type: ${type}) as advertised.\n\nBelow are my personal details for your consideration:\n\nFull Name           :\nDate of Birth       :\nPhone Number        :\nEmail Address       :\nCurrent Address     :\nHighest Education   :\nYears of Experience :\nCurrent/Last Position:\nCurrent/Last Company :\n\nI believe my background and qualifications align well with the requirements for this role. I am eager to contribute to the team and grow alongside PT Padas Mustapa Jaya.\n\nPlease find my Resume/CV and Portfolio attached to this email for your review.\n\n** IMPORTANT: Please attach your Resume/CV and Portfolio before sending this email. **\n\nThank you for your time and consideration. I look forward to the opportunity to discuss my application further.\n\nSincerely,\n[Your Full Name]`
  }
  return `Yth. Tim Rekrutmen PT Padas Mustapa Jaya,\n\nDengan hormat,\n\nSaya menulis surat ini untuk menyampaikan ketertarikan saya dalam melamar posisi ${title} (Lokasi: ${location}, Jenis Kerja: ${type}) sebagaimana yang telah diiklankan.\n\nBerikut adalah data pribadi saya untuk pertimbangan Bapak/Ibu:\n\nNama Lengkap         :\nTanggal Lahir        :\nNomor Telepon        :\nAlamat Email         :\nAlamat Domisili      :\nPendidikan Terakhir  :\nPengalaman Kerja     :\nJabatan Terakhir     :\nPerusahaan Terakhir  :\n\nSaya percaya bahwa latar belakang dan kualifikasi saya sesuai dengan persyaratan posisi ini. Saya sangat antusias untuk berkontribusi bagi tim dan berkembang bersama PT Padas Mustapa Jaya.\n\nBersama email ini, saya lampirkan Resume/CV dan Portofolio saya untuk ditinjau.\n\n** PENTING: Harap lampirkan Resume/CV dan Portofolio Anda sebelum mengirim email ini. **\n\nAtas perhatian dan pertimbangannya, saya ucapkan terima kasih. Saya berharap dapat mendiskusikan lamaran ini lebih lanjut.\n\nHormat saya,\n[Nama Lengkap Anda]`
}

function buildGeneralEmailBody(lang) {
  if (lang === 'en') {
    return `Dear PT Padas Mustapa Jaya Recruitment Team,\n\nI am writing to express my interest in joining PT Padas Mustapa Jaya and to submit my application for any suitable positions that may be available or upcoming.\n\nBelow are my personal details for your consideration:\n\nFull Name           :\nDate of Birth       :\nPhone Number        :\nEmail Address       :\nCurrent Address     :\nHighest Education   :\nYears of Experience :\nCurrent/Last Position:\nCurrent/Last Company :\nPosition of Interest :\n\nI am enthusiastic about the opportunity to contribute to your team and am open to discussing how my skills and experience can add value to PT Padas Mustapa Jaya.\n\nPlease find my Resume/CV and Portfolio attached to this email for your review.\n\n** IMPORTANT: Please attach your Resume/CV and Portfolio before sending this email. **\n\nThank you for your time and consideration. I look forward to hearing from you.\n\nSincerely,\n[Your Full Name]`
  }
  return `Yth. Tim Rekrutmen PT Padas Mustapa Jaya,\n\nDengan hormat,\n\nSaya menulis surat ini untuk menyampaikan ketertarikan saya dalam bergabung dengan PT Padas Mustapa Jaya dan mengajukan lamaran untuk posisi yang tersedia atau yang akan datang.\n\nBerikut adalah data pribadi saya untuk pertimbangan Bapak/Ibu:\n\nNama Lengkap         :\nTanggal Lahir        :\nNomor Telepon        :\nAlamat Email         :\nAlamat Domisili      :\nPendidikan Terakhir  :\nPengalaman Kerja     :\nJabatan Terakhir     :\nPerusahaan Terakhir  :\nPosisi yang Diminati :\n\nSaya sangat antusias untuk berkontribusi bagi tim Anda dan terbuka untuk mendiskusikan bagaimana keterampilan serta pengalaman saya dapat memberikan nilai tambah bagi PT Padas Mustapa Jaya.\n\nBersama email ini, saya lampirkan Resume/CV dan Portofolio saya untuk ditinjau.\n\n** PENTING: Harap lampirkan Resume/CV dan Portofolio Anda sebelum mengirim email ini. **\n\nAtas perhatian dan pertimbangannya, saya ucapkan terima kasih.\n\nHormat saya,\n[Nama Lengkap Anda]`
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeFilter, setActiveFilter] = useState(0)   // index into ui[lang].categories
  const [lang, setLang] = useState('en')

  const t = ui[lang]

  // resolve active category key
  const activeCategory = filterToCategory[lang][t.categories[activeFilter]]

  const filteredJobs = activeCategory
    ? jobs.filter((j) => j.category === activeCategory)
    : jobs

  const jobLang = lang === 'en' ? 'en' : 'ind'

  return (
    <div className="pt-[100px] md:pt-[120px]">

      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/materi/PMJ-AREA-84.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        {/* Language Toggle */}
        <div className="relative flex justify-end container mx-auto px-4 mb-6">
          <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full p-1">
            <Globe size={15} className="text-white ml-2" />
            <button
              onClick={() => { setLang('en'); setActiveFilter(0) }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${lang === 'en' ? 'bg-white text-black' : 'text-white hover:bg-white/20'}`}
            >
              EN
            </button>
            <button
              onClick={() => { setLang('id'); setActiveFilter(0) }}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${lang === 'id' ? 'bg-white text-black' : 'text-white hover:bg-white/20'}`}
            >
              ID
            </button>
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block bg-red-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-5">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            {t.heroTitle1}<br />{t.heroTitle2.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-red-500">{t.heroTitle2.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-red-500">{jobs.length}</p>
              <p className="text-sm text-gray-400 mt-1">{t.statsPositions}</p>
            </div>
            <div className="border-x border-gray-700">
              <p className="text-3xl font-bold text-red-500">1</p>
              <p className="text-sm text-gray-400 mt-1">{t.statsLocation}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">∞</p>
              <p className="text-sm text-gray-400 mt-1">{t.statsGrowth}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.whyJoin}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.whyJoinDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-5">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefit1Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.benefit1Desc}</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-5">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefit2Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.benefit2Desc}</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-5">
                <ArrowRight size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefit3Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.benefit3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">{t.openPositions}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.openPositionsDesc}</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {t.categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(idx)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === idx
                    ? 'bg-red-600 text-white border-red-600 shadow'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-400 hover:text-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredJobs.map((job) => {
              const d = job[jobLang]
              return (
                <div
                  key={job.jobId}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 hover:-translate-y-1"
                >
                  <div className="h-1 bg-red-600" />
                  <div className="p-7 flex flex-col flex-1">
                    <span className={`self-start text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${categoryColors[job.category]}`}>
                      {categoryMap[lang][job.category]}
                    </span>
                    <h3 className="text-xl font-bold mb-1 leading-snug">{d.title}</h3>
                    {d.subtitle && <p className="text-gray-500 text-sm font-medium mb-3">{d.subtitle}</p>}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={14} className="text-red-600 shrink-0" />{job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase size={14} className="text-gray-400 shrink-0" />{job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{d.description}</p>
                    <div className="flex gap-3 mt-auto">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 bg-red-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        {t.viewDetails} <ChevronRight size={16} />
                      </button>
                      <a
                        href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent((lang === 'en' ? '[Job Application] ' : '[Lamaran Kerja] ') + d.title + ' – PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildEmailBody(lang, d.title, job.location, job.type))}`}
                        className="flex-1 border-2 border-black text-black text-sm font-semibold py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5"
                      >
                        {t.applyNow}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">{t.noPositions}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{t.ctaTitle}</h2>
          <p className="text-gray-300 mb-8 text-lg">{t.ctaDesc}</p>
          <a
            href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent(lang === 'en' ? '[General Application] PT Padas Mustapa Jaya' : '[Lamaran Umum] PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildGeneralEmailBody(lang))}`}
            className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
          >
            {t.ctaBtn} <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (() => {
        const d = selectedJob[jobLang]
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-7 py-5 flex items-start justify-between rounded-t-2xl z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${categoryColors[selectedJob.category]}`}>
                      {categoryMap[lang][selectedJob.category]}
                    </span>
                    <span className="text-xs text-gray-400 border border-gray-200 px-3 py-1 rounded-full">{selectedJob.type}</span>
                  </div>
                  <h2 className="text-2xl font-bold mt-2">{d.title}</h2>
                  {d.subtitle && <p className="text-gray-500 text-sm font-medium">{d.subtitle}</p>}
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                    <MapPin size={14} className="text-red-600" />{selectedJob.location}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-7 py-6 space-y-7">
                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="inline-block w-1 h-5 bg-red-600 rounded-full" />
                    {t.responsibilities}
                  </h3>
                  <ul className="space-y-2">
                    {d.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <ChevronRight size={16} className="text-red-600 shrink-0 mt-0.5" />{r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="inline-block w-1 h-5 bg-black rounded-full" />
                    {t.qualifications}
                  </h3>
                  <ul className="space-y-2">
                    {d.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <ChevronRight size={16} className="text-gray-400 shrink-0 mt-0.5" />{q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Star size={18} className="text-red-600" />{t.benefits}
                  </h3>
                  <ul className="space-y-2">
                    {d.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply CTA */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent((lang === 'en' ? '[Job Application] ' : '[Lamaran Kerja] ') + d.title + ' – PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildEmailBody(lang, d.title, selectedJob.location, selectedJob.type))}`}
                    className="flex-1 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {t.applyEmail} <ArrowRight size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-6 border-2 border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}

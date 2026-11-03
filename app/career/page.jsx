'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Briefcase, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/components/pmj/LanguageProvider';
import Reveal from '@/components/pmj/Reveal';
import ArrowIcon from '@/components/pmj/ArrowIcon';

// ─── UI strings ────────────────────────────────────────────────────────────────
const ui = {
  en: {
    heroTitle: 'Build your career with PMJ.',
    heroDesc:
      "Join PT Padas Mustapa Jaya and help shape Indonesia's logistics, heavy equipment, and woodchip industry.",
    whyKicker: 'Why PMJ',
    whyJoin: 'What you get when you join.',
    whyJoinDesc: "We invest in our people. Here's what makes PMJ a place people stay.",
    benefit1Title: 'Competitive benefits',
    benefit1Desc:
      'Competitive salary, performance-based incentives, and full allowances for housing, transport, and meals.',
    benefit2Title: 'Collaborative culture',
    benefit2Desc:
      'Work alongside experienced professionals in a supportive, safe, and professional environment that values every team member.',
    benefit3Title: 'Career growth',
    benefit3Desc:
      'Professional development programs, skill-building training, and a clear path to advance your career within the company.',
    openKicker: 'Open roles',
    openPositions: 'Current openings.',
    openPositionsDesc: 'Filter by function to find the role that matches your skills.',
    viewDetails: 'View details',
    applyNow: 'Apply now',
    responsibilities: 'Key responsibilities',
    qualifications: 'Qualifications & skills',
    benefits: 'Benefits',
    applyEmail: 'Apply via email',
    close: 'Close',
    ctaKicker: 'General application',
    ctaTitle: "Don't see the right role?",
    ctaDesc:
      "We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.",
    ctaBtn: 'Get in touch',
    noPositions: 'No positions found in this category.',
    categories: ['All', 'Wood Supply', 'Logistics', 'HR & GA', 'Mill', 'PR & Legal'],
  },
  id: {
    heroTitle: 'Bangun karir Anda bersama PMJ.',
    heroDesc:
      'Bergabunglah dengan PT Padas Mustapa Jaya dan bantu bentuk industri logistik, alat berat, dan woodchip Indonesia.',
    whyKicker: 'Mengapa PMJ',
    whyJoin: 'Apa yang Anda dapatkan saat bergabung.',
    whyJoinDesc:
      'Kami berinvestasi pada orang. Inilah yang membuat PMJ tempat yang ingin orang bertahan.',
    benefit1Title: 'Benefit kompetitif',
    benefit1Desc:
      'Gaji kompetitif, insentif berbasis kinerja, dan tunjangan lengkap untuk perumahan, transportasi, dan makan.',
    benefit2Title: 'Budaya kolaboratif',
    benefit2Desc:
      'Bekerja bersama profesional berpengalaman dalam lingkungan yang suportif, aman, dan profesional yang menghargai setiap anggota tim.',
    benefit3Title: 'Pengembangan karir',
    benefit3Desc:
      'Program pengembangan profesional, pelatihan keterampilan, dan jalur yang jelas untuk memajukan karir Anda.',
    openKicker: 'Lowongan terbuka',
    openPositions: 'Posisi yang tersedia.',
    openPositionsDesc: 'Filter berdasarkan fungsi untuk menemukan posisi yang cocok.',
    viewDetails: 'Lihat detail',
    applyNow: 'Lamar sekarang',
    responsibilities: 'Tanggung jawab utama',
    qualifications: 'Kualifikasi & keahlian',
    benefits: 'Benefit',
    applyEmail: 'Lamar via email',
    close: 'Tutup',
    ctaKicker: 'Lamaran umum',
    ctaTitle: 'Tidak menemukan posisi yang tepat?',
    ctaDesc:
      'Kami selalu mencari individu berbakat. Kirimkan resume Anda dan kami akan menghubungi untuk peluang di masa mendatang.',
    ctaBtn: 'Hubungi kami',
    noPositions: 'Tidak ada posisi yang tersedia dalam kategori ini.',
    categories: ['Semua', 'Wood Supply', 'Logistics', 'HR & GA', 'Mill', 'PR & Legal'],
  },
};

const DIVISIONS = ['Wood Supply', 'Logistics', 'HR & GA', 'Mill', 'PR & Legal'];

const categoryMap = {
  en: Object.fromEntries(DIVISIONS.map((d) => [d, d])),
  id: Object.fromEntries(DIVISIONS.map((d) => [d, d])),
};

const filterToCategory = {
  en: { All: null, ...Object.fromEntries(DIVISIONS.map((d) => [d, d])) },
  id: { Semua: null, ...Object.fromEntries(DIVISIONS.map((d) => [d, d])) },
};

// ─── Job Data (bilingual) ──────────────────────────────────────────────────────
const jobs = [
  {
    jobId: 1, category: 'Mill', location: 'Kubu Raya – West Kalimantan', type: 'Contract', open: false,
    en: {
      title: 'Mill Manager', subtitle: 'Woodchip Factory',
      description: 'Direct and coordinate daily mill operations to ensure efficient and smooth production at our woodchip factory.',
      responsibilities: [
        'Direct and coordinate daily mill operations to ensure efficient and smooth production.',
        'Develop and implement strategies to improve performance, increase productivity, and reduce downtime.',
        'Supervise, train, and motivate staff to achieve production targets, fostering a safe and positive workplace culture.',
        'Manage mill budgets, monitor costs, and ensure alignment with company financial objectives.',
        'Implement and enforce quality standards throughout the production process.',
        'Oversee preventive maintenance and repairs to maximize equipment reliability.',
        'Ensure strict compliance with health, safety, and environmental regulations.',
        'Prepare and deliver operational and performance reports to Project Manager & Director.',
      ],
      qualifications: [
        'Minimum 5 years of proven experience in mill/plant management, preferably in the woodchip, wood processing, or pulp & paper industry.',
        'Strong ability to lead and develop teams to achieve operational excellence.',
        'Solid background in budgeting, cost control, and financial management.',
        'Excellent written and verbal communication skills for staff, management, and stakeholders.',
        'Analytical mindset with the ability to quickly identify and resolve operational challenges.',
        'In-depth understanding of woodchip milling processes, machinery, and technologies.',
        'Strategic thinker with the ability to drive efficiency and profitability.',
        "Bachelor's degree in Engineering, Agriculture, or Business Management (or equivalent).",
      ],
      benefits: [
        'Competitive salary package aligned with managerial responsibilities.',
        'Allowances (housing, transport, meals) and performance-based incentives.',
        'Opportunities for career growth and professional development.',
        'Supportive, safe, and professional work environment.',
      ],
    },
    ind: {
      title: 'Mill Manager', subtitle: 'Pabrik Woodchip',
      description: 'Mengarahkan dan mengoordinasikan seluruh aktivitas operasional pabrik setiap hari agar proses produksi berjalan lancar dan efisien.',
      responsibilities: [
        'Mengarahkan dan mengoordinasikan seluruh aktivitas operasional pabrik setiap hari agar proses produksi berjalan lancar dan efisien.',
        'Menyusun dan menerapkan strategi untuk meningkatkan kinerja pabrik, produktivitas, serta meminimalisasi downtime.',
        'Membina, melatih, dan memotivasi staf agar mencapai target produksi dengan tetap menjaga budaya kerja yang aman dan positif.',
        'Menyusun dan mengendalikan anggaran pabrik, memonitor biaya, serta memastikan kinerja keuangan sesuai dengan tujuan perusahaan.',
        'Mengimplementasikan dan menegakkan standar kualitas pada seluruh proses produksi.',
        'Mengawasi perawatan preventif dan perbaikan mesin untuk memastikan keandalan operasional.',
        'Memastikan kepatuhan penuh terhadap regulasi K3 (Keselamatan dan Kesehatan Kerja) serta peraturan lingkungan.',
        'Menyusun dan menyampaikan laporan kinerja serta operasional secara rutin kepada manajemen senior.',
      ],
      qualifications: [
        'Minimal 5 tahun pengalaman di bidang manajemen pabrik/mill, lebih disukai di industri woodchip, pengolahan kayu, atau pulp & paper.',
        'Terbukti mampu memimpin dan mengembangkan tim untuk mencapai keunggulan operasional.',
        'Memiliki kemampuan kuat dalam pengelolaan anggaran, pengendalian biaya, dan manajemen keuangan.',
        'Kemampuan komunikasi lisan dan tulisan yang sangat baik untuk berinteraksi dengan staf, manajemen, dan pihak eksternal.',
        'Berpikir analitis dan mampu dengan cepat mengidentifikasi serta menyelesaikan permasalahan operasional.',
        'Memahami secara mendalam proses produksi woodchip, mesin, dan teknologi terkait.',
        'Memiliki visi strategis dalam mendorong efisiensi dan profitabilitas pabrik.',
        'Minimal lulusan S1 Teknik (Industri/Mesin), Pertanian, atau Manajemen Bisnis (atau setara).',
      ],
      benefits: [
        'Paket gaji kompetitif sesuai tanggung jawab manajerial.',
        'Tunjangan (perumahan, transportasi, makan) dan insentif berbasis kinerja.',
        'Kesempatan pengembangan Karir dan pelatihan profesional.',
        'Lingkungan kerja yang aman, profesional, dan mendukung.',
      ],
    },
  },
  {
    jobId: 2, category: 'Logistics', location: 'Kubu Raya – West Kalimantan', type: 'Contract', open: false,
    en: {
      title: 'Logistic Manager', subtitle: '',
      description: 'Lead and manage all logistics operations including procurement, warehouse management, inventory control, and distribution.',
      responsibilities: [
        'Develop logistics plans based on operational requirements.',
        'Monitor and ensure smooth distribution processes across work areas.',
        'Control stock accuracy and ensure sufficient inventory levels.',
        'Supervise receiving, storage, and dispatching of goods.',
        'Ensure accurate manual and digital stock recording and conduct regular audits.',
        'Manage delivery schedules and routes for efficiency and punctuality.',
        'Coordinate with purchasing, production, and operations departments.',
        'Prepare weekly and monthly logistics reports for management.',
        "Lead, train, and evaluate the logistics team's performance.",
      ],
      qualifications: [
        "Bachelor's degree in Logistics, Management, Industrial Engineering, or a related field.",
        'Minimum 5 years of experience in logistics or supply chain, with at least 2 years in a managerial or supervisory role.',
        'Strong knowledge of procurement, warehouse management, inventory control, and distribution.',
        'Proven ability to plan, coordinate, and analyze logistics operations effectively.',
        'Proficient in Microsoft Office (especially Excel) and manual logistics administration.',
        'Able to work under pressure and lead a team effectively.',
        'Detail-oriented, communicative, and results-driven.',
        'High integrity and cost-efficiency awareness.',
      ],
      benefits: [
        'Competitive salary based on experience.',
        'Meal, transportation, and overtime allowances.',
        'Opportunities for training and career development.',
        'Supportive and professional working environment.',
      ],
    },
    ind: {
      title: 'Logistic Manager', subtitle: '',
      description: 'Memimpin dan mengelola seluruh operasional logistik termasuk pengadaan, manajemen gudang, pengendalian inventaris, dan distribusi.',
      responsibilities: [
        'Menyusun rencana kebutuhan logistik berdasarkan permintaan operasional.',
        'Memantau dan memastikan kelancaran proses distribusi barang ke seluruh area kerja.',
        'Mengontrol ketersediaan dan ketepatan stok barang di gudang.',
        'Mengawasi penerimaan, penyimpanan, dan pengeluaran barang.',
        'Menjamin ketepatan pencatatan dan pelaporan stok secara manual maupun digital serta melakukan audit berkala.',
        'Mengatur jadwal dan rute pengiriman agar efisien dan tepat waktu.',
        'Berkoordinasi dengan bagian pembelian, produksi, dan operasional untuk kelancaran arus barang.',
        'Menyusun laporan logistik mingguan dan bulanan untuk manajemen.',
        'Memimpin, membina, dan mengevaluasi kinerja tim logistik.',
      ],
      qualifications: [
        'Pendidikan minimal S1 Logistik, Manajemen, Teknik Industri, atau bidang terkait.',
        'Pengalaman minimal 5 tahun di bidang logistik/supply chain, dengan minimal 2 tahun di posisi manajerial atau supervisi.',
        'Memahami proses procurement, warehouse management, inventory control, dan distribusi.',
        'Mampu melakukan perencanaan, koordinasi, dan analisis logistik secara efektif.',
        'Terampil menggunakan Microsoft Office (terutama Excel) dan sistem administrasi logistik manual.',
        'Mampu bekerja di bawah tekanan serta memiliki kemampuan memimpin tim dengan baik.',
        'Teliti, komunikatif, dan berorientasi pada hasil.',
        'Memiliki integritas tinggi dan mampu menjaga efisiensi biaya operasional.',
      ],
      benefits: [
        'Gaji kompetitif sesuai pengalaman.',
        'Tunjangan makan, transport, dan insentif lembur.',
        'Kesempatan pelatihan dan pengembangan karir.',
        'Lingkungan kerja profesional dan suportif.',
      ],
    },
  },
  {
    jobId: 3, category: 'HR & GA', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'HR & GA Supervisor', subtitle: '',
      description: 'Oversee human resources and general affairs functions including recruitment, employee data management, training, and compliance.',
      responsibilities: [
        'Manage recruitment and selection processes (job postings, CV screening, interviews).',
        'Handle employee personal data, attendance, leave, and HR documentation.',
        'Develop training schedules and programs based on performance evaluation results.',
        'Coordinate employee performance appraisal processes.',
        'Handle employee grievances, disciplinary issues, and corrective actions.',
        'Maintain harmonious labor relations in compliance with labor regulations.',
        'Collect and verify attendance data for payroll processing.',
        'Administer BPJS Employment and Health programs.',
        'Prepare monthly HR reports for management.',
      ],
      qualifications: [
        "Bachelor's degree (S1) in Psychology, Law, Human Resource Management, or related field.",
        'Minimum 3 years of experience in Human Resources, with at least 1–2 years in a supervisory or leadership role.',
        'Strong understanding of Indonesian Labor Law, BPJS regulations, and other employment-related government policies.',
        'Proficient in Microsoft Excel and manual HR administration.',
        'Able to work under pressure while maintaining high-quality performance.',
        'Excellent communication, coordination, and leadership skills.',
        'Detail-oriented, disciplined, and capable of managing work priorities effectively.',
      ],
      benefits: [
        'Competitive salary based on experience.',
        'Meal, transportation, and overtime allowances.',
        'Opportunities for training and professional development.',
        'Supportive and professional work environment.',
      ],
    },
    ind: {
      title: 'Supervisor HR & GA', subtitle: '',
      description: 'Mengawasi fungsi sumber daya manusia dan urusan umum termasuk rekrutmen, manajemen data karyawan, pelatihan, dan kepatuhan.',
      responsibilities: [
        'Mengelola proses rekrutmen dan seleksi karyawan secara manual (iklan lowongan, seleksi CV, wawancara).',
        'Mengelola data pribadi karyawan, absensi, cuti, dan dokumen kepegawaian.',
        'Menyusun jadwal dan kebutuhan pelatihan sesuai hasil evaluasi kinerja.',
        'Mengkoordinasikan proses evaluasi kinerja karyawan (manual appraisal).',
        'Menangani keluhan karyawan, masalah kedisiplinan, dan tindakan disipliner.',
        'Menjaga hubungan kerja yang harmonis dan sesuai ketentuan ketenagakerjaan.',
        'Mengumpulkan dan memverifikasi data kehadiran untuk proses payroll.',
        'Mengelola administrasi BPJS Ketenagakerjaan dan Kesehatan.',
        'Membuat laporan HR bulanan untuk manajemen.',
      ],
      qualifications: [
        'Pendidikan minimal S1 Psikologi / Hukum / Manajemen SDM atau bidang terkait.',
        'Pengalaman minimal 3 tahun di bidang HRD, dengan 1–2 tahun sebagai Supervisor atau Leader.',
        'Memahami UU Ketenagakerjaan, BPJS, dan peraturan pemerintah terkait ketenagakerjaan.',
        'Mahir menggunakan Microsoft Excel dan administrasi dokumen HR manual.',
        'Mampu bekerja di bawah tekanan dan tetap menjaga kualitas hasil kerja.',
        'Mempunyai kemampuan komunikasi, koordinasi, dan kepemimpinan yang baik.',
        'Teliti, disiplin, dan mampu mengatur prioritas kerja.',
      ],
      benefits: [
        'Gaji kompetitif sesuai pengalaman.',
        'Tunjangan makan, transport, dan insentif lembur.',
        'Kesempatan pelatihan dan pengembangan keterampilan.',
        'Lingkungan kerja yang mendukung dan profesional.',
      ],
    },
  },
  {
    jobId: 4, category: 'Mill', location: 'Kubu Raya – West Kalimantan', type: 'Contract', open: false,
    en: {
      title: 'Production Supervisor', subtitle: 'Woodchip Factory',
      description: 'Supervise all woodchip production activities, manage work schedules, and ensure production targets and quality standards are met.',
      responsibilities: [
        'Supervise all woodchip production activities to meet targets and quality standards.',
        'Organize work schedules, assign tasks, and ensure smooth production operations.',
        'Monitor raw wood material usage, chipping machine efficiency, and production output.',
        'Coordinate with the maintenance team to keep machines and equipment in optimal condition.',
        'Ensure compliance with SOPs, safety standards (OHS/K3), and maintain workplace cleanliness.',
        'Prepare daily, weekly, and monthly production reports for management.',
      ],
      qualifications: [
        "Minimum Diploma (D3) / Bachelor's Degree (S1) in Industrial Engineering, Mechanical Engineering, or related fields.",
        'At least 3 years of experience in manufacturing/production, preferably in woodchip, wood processing, or pulp & paper industry.',
        'Strong knowledge of chipping, drying, packaging processes, and quality control.',
        'Able to plan production schedules, manage workflow, and ensure targets are achieved.',
        'Good leadership, communication, and team coordination skills.',
        'Familiar with occupational health & safety (OHS/K3) standards, waste management, and energy efficiency.',
        'Willing to work in a shift system and capable of making quick decisions on the production floor.',
      ],
      benefits: [
        'Competitive salary based on experience and qualifications.',
        'Position, meal, transport, and overtime allowances.',
        'Career development opportunities and training in the woodchip industry.',
        'Professional, safe, and supportive work environment.',
      ],
    },
    ind: {
      title: 'Supervisor Produksi', subtitle: 'Pabrik Woodchip',
      description: 'Mengawasi seluruh aktivitas produksi woodchip, mengatur jadwal kerja, dan memastikan target produksi serta standar kualitas terpenuhi.',
      responsibilities: [
        'Mengawasi seluruh aktivitas produksi woodchip agar berjalan sesuai target dan standar kualitas.',
        'Mengatur jadwal kerja, membagi tugas, serta memastikan kelancaran operasional lini produksi.',
        'Memantau penggunaan bahan baku kayu, efisiensi mesin chipping, dan hasil produksi.',
        'Berkoordinasi dengan bagian maintenance untuk memastikan mesin produksi dalam kondisi optimal.',
        'Menjamin penerapan SOP, keselamatan kerja (K3), serta menjaga kebersihan area produksi.',
        'Membuat laporan produksi harian, mingguan, dan bulanan serta melaporkannya ke manajemen.',
      ],
      qualifications: [
        'Pendidikan minimal D3/S1 Teknik Industri, Teknik Mesin, atau jurusan terkait.',
        'Pengalaman minimal 3 tahun di bidang produksi pabrik, lebih disukai di industri woodchip, pengolahan kayu, atau pulp & paper.',
        'Memahami proses chipping, pengeringan, pengemasan, serta pengendalian mutu dalam produksi woodchip.',
        'Mampu menyusun rencana produksi, mengatur alur kerja, dan memastikan target produksi tercapai.',
        'Memiliki kemampuan leadership, komunikasi, dan koordinasi tim yang baik.',
        'Memahami standar K3 (Keselamatan dan Kesehatan Kerja), pengendalian limbah, serta efisiensi energi di pabrik woodchip.',
        'Terbiasa bekerja dengan sistem shift dan mampu mengambil keputusan cepat di lapangan.',
      ],
      benefits: [
        'Gaji kompetitif sesuai pengalaman dan kualifikasi.',
        'Tunjangan jabatan, makan, transportasi, dan lembur.',
        'Kesempatan pengembangan karir dan pelatihan di industri woodchip.',
        'Lingkungan kerja yang profesional, aman, dan mendukung.',
      ],
    },
  },
  {
    jobId: 5, category: 'Logistics', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'Heavy Equipment Mechanic', subtitle: '',
      description: 'Conduct daily inspections, routine maintenance, and perform repairs on heavy equipment including excavators and loaders.',
      responsibilities: [
        'Conduct daily inspections and routine maintenance of heavy equipment.',
        'Perform minor to major repairs on excavators and loaders.',
        'Handle hydraulic, engine, and electrical system issues.',
        'Prepare reports on inspections and repairs.',
        'Maintain cleanliness, orderliness, and proper use of tools and equipment.',
      ],
      qualifications: [
        'Minimum Vocational High School (SMK) / Diploma in Mechanical Engineering, Automotive, or Heavy Equipment.',
        'At least 2–3 years of experience as a heavy equipment mechanic, especially for excavators and loaders.',
        'Strong knowledge of hydraulic systems, electrical systems, and diesel engine maintenance.',
        'Skilled in performing periodic maintenance, troubleshooting, and repair of heavy equipment.',
        'Able to read and understand machine manuals and diagrams.',
        'Having a Heavy Equipment Mechanic training certificate is a plus.',
        'Capable of working both independently and as part of a team in the field.',
        'Honest, disciplined, and willing to work under pressure with high mobility.',
      ],
      benefits: [
        'Competitive salary based on experience.',
        'Meal, transport allowance, and overtime incentives.',
        'Opportunities for training and skill development.',
        'Supportive and professional work environment.',
      ],
    },
    ind: {
      title: 'Mekanik Alat Berat', subtitle: '',
      description: 'Melakukan pemeriksaan harian, perawatan rutin, dan perbaikan pada alat berat termasuk excavator dan loader.',
      responsibilities: [
        'Melakukan pemeriksaan harian dan pemeliharaan rutin alat berat.',
        'Melakukan perbaikan kerusakan ringan hingga berat pada excavator dan loader.',
        'Menangani sistem hidrolik, mesin, serta kelistrikan unit.',
        'Membuat laporan hasil pemeriksaan dan perbaikan.',
        'Menjaga kerapian dan ketertiban area kerja serta peralatan.',
      ],
      qualifications: [
        'Pendidikan minimal SMK/D3 jurusan Teknik Mesin / Otomotif / Alat Berat atau setara.',
        'Memiliki pengalaman minimal 2–3 tahun sebagai mekanik alat berat.',
        'Menguasai sistem hidrolik, elektrikal, dan perawatan mesin diesel.',
        'Terbiasa melakukan perawatan berkala, troubleshooting, dan perbaikan unit alat berat.',
        'Mampu membaca manual book / diagram mesin.',
        'Diutamakan memiliki sertifikat pelatihan mekanik alat berat (nilai plus).',
        'Memiliki kemampuan bekerja secara tim maupun mandiri di lapangan.',
        'Jujur, disiplin, dan siap bekerja dengan target serta mobilitas tinggi.',
      ],
      benefits: [
        'Gaji kompetitif sesuai pengalaman.',
        'Tunjangan makan, transport, dan insentif lembur.',
        'Kesempatan pelatihan dan pengembangan keterampilan.',
        'Lingkungan kerja yang mendukung dan profesional.',
      ],
    },
  },
  {
    jobId: 6, category: 'Wood Supply', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'Excavator Operator', subtitle: '',
      description: 'Operate excavators safely and efficiently for digging, loading, leveling, and other earthmoving activities on project sites.',
      responsibilities: [
        'Operate excavators safely and efficiently according to project requirements.',
        'Conduct daily equipment checks before and after operation.',
        'Report any equipment issues or malfunctions to the supervisor/mechanic.',
        'Assist in minor maintenance and keep the equipment clean.',
        'Ensure compliance with safety regulations and company policies.',
      ],
      qualifications: [
        'Minimum Vocational High School (SMK) or equivalent.',
        'At least 2 years of proven experience operating excavators in construction, mining, or related fields.',
        'Possess a valid operator license/certification (SIO or equivalent).',
        'Skilled in operating excavators for digging, loading, leveling, and other earthmoving activities.',
        'Good knowledge of machine safety procedures and basic maintenance.',
        'Able to follow instructions and work effectively with the site team.',
        'Physically fit, disciplined, and committed to workplace safety.',
      ],
      benefits: [
        'Competitive salary based on skills and experience.',
        'Allowances (meal, transport, overtime).',
        'Training opportunities and career development.',
        'Supportive and safety-focused work environment.',
      ],
    },
    ind: {
      title: 'Operator Excavator', subtitle: '',
      description: 'Mengoperasikan excavator dengan aman dan efisien untuk penggalian, pemuatan, perataan, serta pekerjaan pemindahan tanah lainnya.',
      responsibilities: [
        'Mengoperasikan excavator dengan aman dan efisien sesuai kebutuhan proyek.',
        'Melakukan pemeriksaan harian pada unit sebelum dan sesudah digunakan.',
        'Melaporkan setiap masalah atau kerusakan unit kepada supervisor/mekanik.',
        'Membantu perawatan ringan dan menjaga kebersihan unit.',
        'Memastikan kepatuhan terhadap prosedur keselamatan dan kebijakan perusahaan.',
      ],
      qualifications: [
        'Pendidikan minimal SMK atau setara.',
        'Memiliki pengalaman kerja minimal 2 tahun sebagai operator excavator di bidang konstruksi, pertambangan, atau industri terkait.',
        'Memiliki lisensi/sertifikat operator (SIO atau setara) yang masih berlaku.',
        'Mampu mengoperasikan excavator untuk penggalian, pemuatan, perataan, serta pekerjaan pemindahan tanah lainnya.',
        'Memahami prosedur keselamatan kerja mesin serta perawatan dasar.',
        'Mampu mengikuti instruksi dan bekerja sama dengan tim di lapangan.',
        'Sehat jasmani, disiplin, serta memiliki komitmen tinggi terhadap keselamatan kerja.',
      ],
      benefits: [
        'Gaji kompetitif sesuai keterampilan dan pengalaman.',
        'Tunjangan (makan, transportasi, lembur).',
        'Kesempatan pelatihan dan pengembangan karir.',
        'Lingkungan kerja yang aman dan mendukung.',
      ],
    },
  },
  {
    jobId: 7, category: 'Logistics', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'Loader Operator', subtitle: '',
      description: 'Operate loaders safely and efficiently for loading, stockpiling, leveling, and material handling on daily site operations.',
      responsibilities: [
        'Operate loaders safely and efficiently to support daily site operations.',
        'Perform pre-start checks and ensure the loader is in good condition before use.',
        'Load materials into trucks and move stockpiles as instructed.',
        'Report any equipment damage or malfunction immediately.',
        'Follow company safety standards and operational procedures.',
      ],
      qualifications: [
        'Minimum Vocational High School (SMK) or equivalent.',
        'At least 2 years of experience operating loaders in construction, mining, or related industries.',
        'Possess a valid operator license/certification (SIO or equivalent).',
        'Skilled in operating loaders for loading, stockpiling, leveling, and material handling.',
        'Good knowledge of equipment safety procedures and basic maintenance.',
        'Able to work in coordination with truck drivers and site supervisors.',
        'Physically fit, disciplined, and safety-oriented.',
      ],
      benefits: [
        'Competitive salary depending on skills and experience.',
        'Allowances (meal, transport, overtime).',
        'Training and career development opportunities.',
        'Supportive and professional working environment.',
      ],
    },
    ind: {
      title: 'Operator Loader', subtitle: '',
      description: 'Mengoperasikan loader dengan aman dan efisien untuk pemindahan material, penumpukan, perataan, dan operasional harian di lapangan.',
      responsibilities: [
        'Mengoperasikan loader dengan aman dan efisien untuk mendukung kegiatan operasional harian di lapangan.',
        'Melakukan pemeriksaan awal (pre-start check) dan memastikan kondisi loader baik sebelum digunakan.',
        'Memuat material ke dalam truk serta memindahkan tumpukan material sesuai instruksi.',
        'Segera melaporkan kerusakan atau gangguan pada unit kepada atasan.',
        'Mematuhi standar keselamatan kerja dan prosedur operasional perusahaan.',
      ],
      qualifications: [
        'Pendidikan minimal SMK atau setara.',
        'Memiliki pengalaman kerja minimal 2 tahun sebagai operator loader di bidang konstruksi, pertambangan, atau industri terkait.',
        'Memiliki lisensi/sertifikat operator (SIO atau setara) yang masih berlaku.',
        'Terampil mengoperasikan loader untuk pemindahan material, penumpukan, perataan, dan penanganan material lainnya.',
        'Memahami prosedur keselamatan kerja alat serta perawatan dasar.',
        'Mampu bekerja sama dengan sopir truk dan supervisor lapangan.',
        'Sehat jasmani, disiplin, serta berorientasi pada keselamatan kerja.',
      ],
      benefits: [
        'Gaji kompetitif sesuai keterampilan dan pengalaman.',
        'Tunjangan (makan, transportasi, lembur).',
        'Kesempatan pelatihan dan pengembangan karir.',
        'Lingkungan kerja yang profesional dan mendukung.',
      ],
    },
  },
  {
    jobId: 8, category: 'Mill', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'Production Helper', subtitle: 'Woodchip Factory',
      description: 'Assist in the woodchip manufacturing process including sorting, feeding raw materials, packaging, and supporting machine operators.',
      responsibilities: [
        'Assist in the production process of woodchip manufacturing (sorting, feeding raw materials, packaging, etc.).',
        'Support machine operators during daily production activities.',
        'Maintain cleanliness and orderliness in the production area.',
        'Follow safety regulations and use protective equipment as required.',
        'Report any irregularities or problems to the supervisor.',
      ],
      qualifications: [
        'Minimum High School (SMA/SMK) or equivalent.',
        'Prior experience in a factory or production environment is an advantage, but fresh graduates are welcome.',
        'Physically fit and able to work in a factory setting (lifting, standing for long periods, working in shifts).',
        'Willing to learn machine operation and follow work instructions.',
        'Basic knowledge of workplace safety (K3) is a plus.',
        'Disciplined, hardworking, and able to work in a team.',
      ],
      benefits: [
        'Competitive salary in line with company standards.',
        'Overtime, meal, and transport allowances.',
        'Training opportunities for skill development.',
        'Safe and supportive work environment.',
      ],
    },
    ind: {
      title: 'Helper Produksi', subtitle: 'Pabrik Woodchip',
      description: 'Membantu proses pembuatan woodchip termasuk penyortiran, memasukkan bahan baku, pengemasan, dan mendukung operator mesin.',
      responsibilities: [
        'Membantu proses produksi pembuatan woodchip (penyortiran, memasukkan bahan baku, pengemasan, dll.).',
        'Mendukung operator mesin dalam kegiatan produksi harian.',
        'Menjaga kebersihan dan kerapian area produksi.',
        'Mematuhi aturan keselamatan kerja serta menggunakan APD yang diwajibkan.',
        'Melaporkan setiap kendala atau masalah kepada supervisor.',
      ],
      qualifications: [
        'Pendidikan minimal SMA/SMK atau setara.',
        'Pengalaman sebelumnya di pabrik atau lingkungan produksi menjadi nilai tambah, namun lulusan baru dipersilakan melamar.',
        'Sehat jasmani dan mampu bekerja di lingkungan pabrik (mengangkat beban, berdiri dalam waktu lama, bekerja dengan sistem shift).',
        'Bersedia belajar mengoperasikan mesin dan mengikuti instruksi kerja.',
        'Memiliki pengetahuan dasar tentang Keselamatan dan Kesehatan Kerja (K3) menjadi nilai tambah.',
        'Disiplin, rajin, dan mampu bekerja sama dalam tim.',
      ],
      benefits: [
        'Gaji kompetitif sesuai standar perusahaan.',
        'Tunjangan lembur, makan, dan transportasi.',
        'Kesempatan pelatihan untuk pengembangan keterampilan.',
        'Lingkungan kerja yang aman dan mendukung.',
      ],
    },
  },
  {
    jobId: 9, category: 'Mill', location: 'Kubu Raya – West Kalimantan', type: 'Contract',
    en: {
      title: 'Production Administrator', subtitle: '',
      description: 'Manage daily production data, prepare reports, and coordinate administrative needs with the production team.',
      responsibilities: [
        'Input and manage daily production data.',
        'Prepare daily, weekly, and monthly production reports.',
        'Monitor and record the use of raw materials and production outputs.',
        'Coordinate with the production team regarding operational data and administrative needs.',
        'Organize and maintain production documents and records systematically.',
        'Support the production team by ensuring the completeness and accuracy of operational data.',
      ],
      qualifications: [
        'Minimum Vocational High School (SMK) / Diploma (D3) in Office Administration, Management, Accounting, Industrial Engineering, or related field.',
        'Minimum 1–2 years of experience as a Production Admin / Operational Admin / Warehouse Admin.',
        'Proficient in computer operation, especially Microsoft Excel and Word for data processing and reporting.',
        'Experienced in preparing daily, weekly, and monthly production reports.',
        'Strong administrative, documentation, and data management skills.',
        'Good communication skills and able to coordinate with production teams and related departments.',
        'Detail-oriented, disciplined, and able to work with targets and deadlines.',
      ],
      benefits: [
        'Competitive salary based on experience.',
        'Meal allowance, transportation allowance, and overtime incentives.',
        'Opportunities for training and skill development.',
        'Supportive and professional working environment.',
      ],
    },
    ind: {
      title: 'Admin Produksi', subtitle: '',
      description: 'Mengelola data produksi harian, membuat laporan, dan mengkoordinasikan kebutuhan administrasi dengan tim produksi.',
      responsibilities: [
        'Menginput dan mengelola data hasil produksi harian.',
        'Membuat laporan produksi harian, mingguan, dan bulanan.',
        'Mengontrol dan mencatat penggunaan bahan baku serta hasil produksi.',
        'Berkoordinasi dengan tim produksi terkait data pekerjaan dan kebutuhan administrasi.',
        'Mengarsipkan dokumen produksi dengan rapi dan terstruktur.',
        'Membantu memastikan kelengkapan data operasional produksi.',
      ],
      qualifications: [
        'Pendidikan minimal SMK/D3 jurusan Administrasi Perkantoran / Manajemen / Akuntansi / Teknik Industri atau setara.',
        'Memiliki pengalaman minimal 1–2 tahun sebagai Admin Produksi / Admin Operasional / Admin Gudang.',
        'Mampu mengoperasikan komputer dengan baik (Microsoft Excel, Word, dan pengolahan data).',
        'Terbiasa membuat laporan produksi harian, mingguan, dan bulanan.',
        'Memiliki kemampuan administrasi, pengarsipan, dan pengolahan data yang rapi dan sistematis.',
        'Mampu berkomunikasi dengan baik dan berkoordinasi dengan tim produksi serta bagian terkait.',
        'Teliti, disiplin, dan mampu bekerja dengan target serta deadline.',
      ],
      benefits: [
        'Gaji kompetitif sesuai pengalaman.',
        'Tunjangan makan, transport, dan insentif lembur.',
        'Kesempatan pelatihan dan pengembangan keterampilan.',
        'Lingkungan kerja yang mendukung dan profesional.',
      ],
    },
  },
];

// ─── Email body builders ───────────────────────────────────────────────────────
function buildEmailBody(lang, title, location, type) {
  if (lang === 'en') {
    return `Dear PT Padas Mustapa Jaya Recruitment Team,\n\nI am writing to formally express my interest in applying for the ${title} position (Location: ${location}, Employment Type: ${type}) as advertised.\n\nBelow are my personal details for your consideration:\n\nFull Name           :\nDate of Birth       :\nPhone Number        :\nEmail Address       :\nCurrent Address     :\nHighest Education   :\nYears of Experience :\nCurrent/Last Position:\nCurrent/Last Company :\n\nI believe my background and qualifications align well with the requirements for this role. I am eager to contribute to the team and grow alongside PT Padas Mustapa Jaya.\n\nPlease find my Resume/CV and Portfolio attached to this email for your review.\n\n** IMPORTANT: Please attach your Resume/CV and Portfolio before sending this email. **\n\nThank you for your time and consideration. I look forward to the opportunity to discuss my application further.\n\nSincerely,\n[Your Full Name]`;
  }
  return `Yth. Tim Rekrutmen PT Padas Mustapa Jaya,\n\nDengan hormat,\n\nSaya menulis surat ini untuk menyampaikan ketertarikan saya dalam melamar posisi ${title} (Lokasi: ${location}, Jenis Kerja: ${type}) sebagaimana yang telah diiklankan.\n\nBerikut adalah data pribadi saya untuk pertimbangan Bapak/Ibu:\n\nNama Lengkap         :\nTanggal Lahir        :\nNomor Telepon        :\nAlamat Email         :\nAlamat Domisili      :\nPendidikan Terakhir  :\nPengalaman Kerja     :\nJabatan Terakhir     :\nPerusahaan Terakhir  :\n\nSaya percaya bahwa latar belakang dan kualifikasi saya sesuai dengan persyaratan posisi ini. Saya sangat antusias untuk berkontribusi bagi tim dan berkembang bersama PT Padas Mustapa Jaya.\n\nBersama email ini, saya lampirkan Resume/CV dan Portofolio saya untuk ditinjau.\n\n** PENTING: Harap lampirkan Resume/CV dan Portofolio Anda sebelum mengirim email ini. **\n\nAtas perhatian dan pertimbangannya, saya ucapkan terima kasih. Saya berharap dapat mendiskusikan lamaran ini lebih lanjut.\n\nHormat saya,\n[Nama Lengkap Anda]`;
}

function buildGeneralEmailBody(lang) {
  if (lang === 'en') {
    return `Dear PT Padas Mustapa Jaya Recruitment Team,\n\nI am writing to express my interest in joining PT Padas Mustapa Jaya and to submit my application for any suitable positions that may be available or upcoming.\n\nBelow are my personal details for your consideration:\n\nFull Name           :\nDate of Birth       :\nPhone Number        :\nEmail Address       :\nCurrent Address     :\nHighest Education   :\nYears of Experience :\nCurrent/Last Position:\nCurrent/Last Company :\nPosition of Interest :\n\nI am enthusiastic about the opportunity to contribute to your team and am open to discussing how my skills and experience can add value to PT Padas Mustapa Jaya.\n\nPlease find my Resume/CV and Portfolio attached to this email for your review.\n\n** IMPORTANT: Please attach your Resume/CV and Portfolio before sending this email. **\n\nThank you for your time and consideration. I look forward to hearing from you.\n\nSincerely,\n[Your Full Name]`;
  }
  return `Yth. Tim Rekrutmen PT Padas Mustapa Jaya,\n\nDengan hormat,\n\nSaya menulis surat ini untuk menyampaikan ketertarikan saya dalam bergabung dengan PT Padas Mustapa Jaya dan mengajukan lamaran untuk posisi yang tersedia atau yang akan datang.\n\nBerikut adalah data pribadi saya untuk pertimbangan Bapak/Ibu:\n\nNama Lengkap         :\nTanggal Lahir        :\nNomor Telepon        :\nAlamat Email         :\nAlamat Domisili      :\nPendidikan Terakhir  :\nPengalaman Kerja     :\nJabatan Terakhir     :\nPerusahaan Terakhir  :\nPosisi yang Diminati :\n\nSaya sangat antusias untuk berkontribusi bagi tim Anda dan terbuka untuk mendiskusikan bagaimana keterampilan serta pengalaman saya dapat memberikan nilai tambah bagi PT Padas Mustapa Jaya.\n\nBersama email ini, saya lampirkan Resume/CV dan Portofolio saya untuk ditinjau.\n\n** PENTING: Harap lampirkan Resume/CV dan Portofolio Anda sebelum mengirim email ini. **\n\nAtas perhatian dan pertimbangannya, saya ucapkan terima kasih.\n\nHormat saya,\n[Nama Lengkap Anda]`;
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default function CareerPage() {
  const { lang, t: pmj } = useLanguage();
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const t = ui[lang];
  const jobLang = lang === 'en' ? 'en' : 'ind';
  const activeCategory = filterToCategory[lang][t.categories[activeFilter]];
  const filteredJobs = jobs.filter((j) => j.open !== false && (!activeCategory || j.category === activeCategory));

  // lock body scroll while modal is open
  useEffect(() => {
    if (selectedJob) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [selectedJob]);

  return (
    <div>
      {/* PAGE HERO */}
      <section className="pmj-page-hero">
        <div className="pmj-page-hero-media">
          <img src="/materi/PMJ-AREA-84.jpg" alt="" />
        </div>
        <div className="pmj-container pmj-page-hero-inner">
          <div className="pmj-breadcrumb">
            <Link href="/">{pmj.nav.home}</Link> / <span>{pmj.nav.career}</span>
          </div>
          <h1>{t.heroTitle}</h1>
          <p className="pmj-sub">{t.heroDesc}</p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="pmj-block">
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{t.whyKicker}</div>
              <h2 className="pmj-section-title">{t.whyJoin}</h2>
            </div>
            <p className="pmj-section-sub">{t.whyJoinDesc}</p>
          </Reveal>
          <div className="pmj-testi-grid">
            <Reveal className="pmj-testi">
              <div className="pmj-val-n">01</div>
              <h4 style={{ fontSize: 22, margin: '8px 0 12px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                {t.benefit1Title}
              </h4>
              <p style={{ fontSize: 15, color: 'var(--pmj-gray-700)', lineHeight: 1.55, margin: 0 }}>
                {t.benefit1Desc}
              </p>
            </Reveal>
            <Reveal className="pmj-testi">
              <div className="pmj-val-n">02</div>
              <h4 style={{ fontSize: 22, margin: '8px 0 12px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                {t.benefit2Title}
              </h4>
              <p style={{ fontSize: 15, color: 'var(--pmj-gray-700)', lineHeight: 1.55, margin: 0 }}>
                {t.benefit2Desc}
              </p>
            </Reveal>
            <Reveal className="pmj-testi">
              <div className="pmj-val-n">03</div>
              <h4 style={{ fontSize: 22, margin: '8px 0 12px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                {t.benefit3Title}
              </h4>
              <p style={{ fontSize: 15, color: 'var(--pmj-gray-700)', lineHeight: 1.55, margin: 0 }}>
                {t.benefit3Desc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="pmj-block" style={{ background: 'var(--pmj-gray-50)', paddingTop: 80, paddingBottom: 100 }}>
        <div className="pmj-container">
          <Reveal className="pmj-section-head">
            <div>
              <div className="pmj-kicker">{t.openKicker}</div>
              <h2 className="pmj-section-title">{t.openPositions}</h2>
            </div>
            <p className="pmj-section-sub">{t.openPositionsDesc}</p>
          </Reveal>

          {/* Filter chips */}
          <div className="pmj-career-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {t.categories.map((cat, idx) => {
              const active = activeFilter === idx;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(idx)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 4,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all .2s',
                    border: active ? '1px solid var(--pmj-red)' : '1px solid var(--pmj-line)',
                    background: active ? 'var(--pmj-red)' : '#fff',
                    color: active ? '#fff' : 'var(--pmj-gray-700)',
                    fontFamily: 'inherit',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Job grid */}
          {filteredJobs.length === 0 ? (
            <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--pmj-gray-500)', fontSize: 16 }}>
              {t.noPositions}
            </div>
          ) : (
            <div className="pmj-career-grid">
              {filteredJobs.map((job) => {
                const d = job[jobLang];
                return (
                  <Reveal key={job.jobId} className="pmj-career-card">
                    <div className="pmj-career-card-accent" />
                    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div className="pmj-kicker" style={{ marginBottom: 14 }}>
                        {categoryMap[lang][job.category]}
                      </div>
                      <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                        {d.title}
                      </h3>
                      {d.subtitle && (
                        <div style={{ fontSize: 14, color: 'var(--pmj-gray-500)', fontWeight: 500, marginBottom: 12 }}>
                          {d.subtitle}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, margin: '12px 0 16px', fontSize: 13, color: 'var(--pmj-gray-500)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <MapPin size={14} color="var(--pmj-red)" />{job.location}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <Briefcase size={14} color="var(--pmj-gray-500)" />{job.type}
                        </span>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--pmj-gray-700)', lineHeight: 1.55, margin: '0 0 24px', flex: 1 }}>
                        {d.description}
                      </p>
                      <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className="pmj-btn pmj-btn-primary"
                          style={{ flex: 1, padding: '12px 18px', fontSize: 13 }}
                        >
                          {t.viewDetails}
                          <ArrowIcon />
                        </button>
                        <a
                          href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent((lang === 'en' ? '[Job Application] ' : '[Lamaran Kerja] ') + d.title + ' – PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildEmailBody(lang, d.title, job.location, job.type))}`}
                          className="pmj-btn pmj-btn-dark"
                          style={{ flex: 1, padding: '12px 18px', fontSize: 13, justifyContent: 'center' }}
                        >
                          {t.applyNow}
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA CALLOUT */}
      <section className="pmj-callout">
        <div className="pmj-container pmj-callout-inner">
          <div>
            <div className="pmj-kicker" style={{ color: 'var(--pmj-red)' }}>{t.ctaKicker}</div>
            <h2>{t.ctaTitle}</h2>
          </div>
          <div>
            <p>{t.ctaDesc}</p>
            <div style={{ marginTop: 24 }}>
              <a
                href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent(lang === 'en' ? '[General Application] PT Padas Mustapa Jaya' : '[Lamaran Umum] PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildGeneralEmailBody(lang))}`}
                className="pmj-btn pmj-btn-primary"
              >
                {t.ctaBtn}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JOB DETAIL MODAL */}
      {selectedJob && (() => {
        const d = selectedJob[jobLang];
        return (
          <div
            className="pmj-modal-overlay"
            onClick={() => setSelectedJob(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="pmj-modal" onClick={(e) => e.stopPropagation()}>
              <div className="pmj-modal-header">
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                    <span className="pmj-kicker" style={{ margin: 0 }}>{categoryMap[lang][selectedJob.category]}</span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        border: '1px solid var(--pmj-line)',
                        borderRadius: 4,
                        color: 'var(--pmj-gray-500)',
                      }}
                    >
                      {selectedJob.type}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.15 }}>
                    {d.title}
                  </h2>
                  {d.subtitle && (
                    <div style={{ fontSize: 14, color: 'var(--pmj-gray-500)', fontWeight: 500, marginTop: 6 }}>
                      {d.subtitle}
                    </div>
                  )}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 13, color: 'var(--pmj-gray-500)' }}>
                    <MapPin size={14} color="var(--pmj-red)" />{selectedJob.location}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  aria-label={t.close}
                  className="pmj-modal-close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="pmj-modal-body">
                <div className="pmj-modal-section">
                  <h3>
                    <span className="pmj-modal-bar" style={{ background: 'var(--pmj-red)' }} />
                    {t.responsibilities}
                  </h3>
                  <ul>
                    {d.responsibilities.map((r, i) => (
                      <li key={i}>
                        <ChevronRight size={14} color="var(--pmj-red)" style={{ flexShrink: 0, marginTop: 4 }} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pmj-modal-section">
                  <h3>
                    <span className="pmj-modal-bar" style={{ background: 'var(--pmj-ink)' }} />
                    {t.qualifications}
                  </h3>
                  <ul>
                    {d.qualifications.map((q, i) => (
                      <li key={i}>
                        <ChevronRight size={14} color="var(--pmj-gray-500)" style={{ flexShrink: 0, marginTop: 4 }} />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="pmj-modal-section"
                  style={{ background: 'var(--pmj-gray-50)', border: '1px solid var(--pmj-line)', borderRadius: 4, padding: 24 }}
                >
                  <h3>
                    <span className="pmj-modal-bar" style={{ background: 'var(--pmj-red)' }} />
                    {t.benefits}
                  </h3>
                  <ul>
                    {d.benefits.map((b, i) => (
                      <li key={i} style={{ alignItems: 'flex-start' }}>
                        <span style={{ width: 6, height: 6, background: 'var(--pmj-red)', transform: 'rotate(45deg)', marginTop: 8, flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}>
                  <a
                    href={`mailto:recruitment@pmjsystem.com?subject=${encodeURIComponent((lang === 'en' ? '[Job Application] ' : '[Lamaran Kerja] ') + d.title + ' – PT Padas Mustapa Jaya')}&body=${encodeURIComponent(buildEmailBody(lang, d.title, selectedJob.location, selectedJob.type))}`}
                    className="pmj-btn pmj-btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    {t.applyEmail}
                    <ArrowIcon />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="pmj-btn"
                    style={{
                      padding: '14px 22px',
                      border: '1px solid var(--pmj-line)',
                      background: '#fff',
                      color: 'var(--pmj-gray-700)',
                    }}
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

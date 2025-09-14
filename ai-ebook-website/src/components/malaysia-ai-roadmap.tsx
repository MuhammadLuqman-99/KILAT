"use client";

import { useState } from 'react';

interface RoadmapPhase {
  year: string;
  title: string;
  description: string;
  initiatives: string[];
  status: 'completed' | 'in_progress' | 'upcoming';
  agency: string;
}

const roadmapData: RoadmapPhase[] = [
  {
    year: "2021",
    title: "Pelancaran Roadmap AI Kebangsaan",
    description: "MOSTI melancarkan Roadmap AI Kebangsaan 2021-2025 pada 1 Disember 2021",
    initiatives: [
      "Pembentukan rangka kerja AI Innovation Ecosystem",
      "Penubuhan AI-Catalyst Hub",
      "Garis Panduan AI Governance dan Ethics",
      "Kolaborasi dengan akademia dan industri"
    ],
    status: 'completed',
    agency: 'MOSTI'
  },
  {
    year: "2022-2023",
    title: "Pembangunan Infrastruktur & Ekosistem",
    description: "Pembinaan asas ekosistem AI dan pembangunan bakat",
    initiatives: [
      "121 syarikat AI dikenal pasti oleh MDEC",
      "41 syarikat memperoleh status Digital Malaysia",
      "RM1 bilion hasil dijana oleh 140 penyedia solusi AI",
      "Pembangunan infrastruktur AI kebangsaan"
    ],
    status: 'completed',
    agency: 'MDEC'
  },
  {
    year: "2024",
    title: "Pelaksanaan Garis Panduan AI Ethics",
    description: "Pelancuran garis panduan komprehensif untuk AI yang bertanggungjawab",
    initiatives: [
      "Garis Panduan AI Governance & Ethics (20 Sep 2024)",
      "7 prinsip teras AI yang bertanggungjawab",
      "Keadilan, keselamatan, privasi dalam AI",
      "Pengawalan dan campur tangan manusia"
    ],
    status: 'completed',
    agency: 'MOSTI'
  },
  {
    year: "2025",
    title: "Pencapaian Target 2025",
    description: "Realisasi matlamat Roadmap AI 2021-2025",
    initiatives: [
      "RM15.6B nilai pasaran AI Malaysia",
      "10,000 profesional AI dilatih",
      "Integrasi AI dalam pertanian, kesihatan, pendidikan",
      "Penilaian dan pengukuhan ekosistem AI"
    ],
    status: 'in_progress',
    agency: 'MOSTI & MDEC'
  },
  {
    year: "2026-2030",
    title: "Pelan Tindakan AI Kebangsaan 2026-2030",
    description: "Fasa kedua pembangunan AI Malaysia menuju hab serantau",
    initiatives: [
      "30,000 profesional AI dijangka (daripada 3,000 semasa)",
      "Malaysia sebagai hab AI ASEAN",
      "Pengintegrasian AI dalam semua sektor ekonomi",
      "Kolaborasi antarabangsa dan pertukaran pengetahuan"
    ],
    status: 'upcoming',
    agency: 'Kementerian Digital'
  }
];

const principles = [
  {
    title: "Keadilan",
    description: "AI mestilah bebas daripada berat sebelah dan memastikan hasil yang saksama",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    title: "Kebolehpercayaan",
    description: "AI mesti berfungsi seperti yang dimaksudkan dan membenarkan campur tangan manusia",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Privasi & Keselamatan",
    description: "Sistem AI mesti melindungi data peribadi dan mencegah penyalahgunaan",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export function MalaysiaAIRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'upcoming':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Selesai';
      case 'in_progress':
        return 'Sedang Berjalan';
      case 'upcoming':
        return 'Akan Datang';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Roadmap AI Kebangsaan Malaysia
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Perjalanan transformasi AI Malaysia dari 2021 hingga 2030, berdasarkan inisiatif sebenar
            MOSTI, MDEC, dan Kementerian Digital untuk menjadikan Malaysia hab AI terdepan di ASEAN.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {roadmapData.map((phase, index) => (
            <button
              key={index}
              onClick={() => setSelectedPhase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedPhase === index
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:border-accent/50'
              }`}
            >
              {phase.year}
            </button>
          ))}
        </div>

        {/* Selected Phase Details */}
        <div className="bg-background border rounded-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-accent">
                  {roadmapData[selectedPhase].year}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(roadmapData[selectedPhase].status)}`}>
                  {getStatusText(roadmapData[selectedPhase].status)}
                </span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                  {roadmapData[selectedPhase].agency}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {roadmapData[selectedPhase].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {roadmapData[selectedPhase].description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Inisiatif Utama:</h4>
              <ul className="space-y-3">
                {roadmapData[selectedPhase].initiatives.map((initiative, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* AI Ethics Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            7 Prinsip Teras AI Governance Malaysia
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center text-accent">
                  {principle.icon}
                </div>
                <h4 className="font-semibold mb-2">{principle.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-8 border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Pencapaian AI Malaysia Setakat Ini
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">121</div>
              <div className="text-sm text-muted-foreground">Syarikat AI dikenal pasti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">RM1B</div>
              <div className="text-sm text-muted-foreground">Hasil dijana oleh AI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">41</div>
              <div className="text-sm text-muted-foreground">Status Digital Malaysia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3K→30K</div>
              <div className="text-sm text-muted-foreground">Profesional AI (2024→2030)</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Sertai perjalanan transformasi AI Malaysia bersama KILAT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
              Pelajari Lebih Lanjut
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
              Lihat Dasar AI Penuh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
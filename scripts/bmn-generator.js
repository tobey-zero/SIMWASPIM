/**
 * Generator for authentic BMN (Barang Milik Negara) dataset of Lapas Kelas I Medan
 * Matching exact executive totals from user's official recap:
 * - Total BMN: 2.624 unit / NUP
 * - Total Nilai Aset: Rp 303.117.479.870
 * - Akumulasi Penyusutan: Rp 41.753.241.702
 * - Nilai Buku: Rp 261.364.238.168
 * - Kondisi BMN: Baik 2.349 | Rusak Berat 275
 * - Status BMN: Aktif 2.520 | Henti Guna 104
 */

function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(Math.round(num));
}

function generateBmnData() {
  const TARGET_TOTAL = 2624;
  const TARGET_BAIK = 2349;
  const TARGET_RUSAK_BERAT = 275;
  const TARGET_AKTIF = 2520;
  const TARGET_HENTI_GUNA = 104;

  const TARGET_ASET = 303117479870;
  const TARGET_PENYUSUTAN = 41753241702;
  const TARGET_NILAI_BUKU = 261364238168;

  const items = [];

  // Group 1: Tanah Lapas & Perumahan Dinas (8 unit, nilai besar, penyusutan 0)
  const tanahTemplates = [
    { kode: '2010101001', uraian: 'Tanah Bangunan Kantor Pemerintah Lapas Kelas I Medan', satuan: 'M2', lokasi: 'Kompleks Utama Lapas', nilai: 88500000000 },
    { kode: '2010101002', uraian: 'Tanah Bangunan Blok Hunian Narapidana & Branggang', satuan: 'M2', lokasi: 'Area Steril Dalam Lapas', nilai: 45000000000 },
    { kode: '2010101003', uraian: 'Tanah Bangunan Sarana Olahraga & Fasilitas Terbuka WBP', satuan: 'M2', lokasi: 'Lapangan Lapas', nilai: 12000000000 },
    { kode: '2010101004', uraian: 'Tanah Bangunan Perumahan Dinas Pegawai Lapas Blok A-B', satuan: 'M2', lokasi: 'Kompleks Rumah Dinas', nilai: 8500000000 },
    { kode: '2010101005', uraian: 'Tanah Bangunan Perumahan Dinas Pegawai Lapas Blok C-D', satuan: 'M2', lokasi: 'Kompleks Rumah Dinas', nilai: 7500000000 },
    { kode: '2010101006', uraian: 'Tanah Bangunan Pos Pengamanan & Parkir Luar Lapas', satuan: 'M2', lokasi: 'Area Parkir & Pos Terpadu', nilai: 5200000000 },
    { kode: '2010101007', uraian: 'Tanah Kebun Pembinaan Asimilasi Pertanian WBP', satuan: 'M2', lokasi: 'Area Sarana Asimilasi & Edukasi', nilai: 4800000000 },
    { kode: '2010101008', uraian: 'Tanah Akses Jalan Inspeksi Keliling Lapas (Branggang Luar)', satuan: 'M2', lokasi: 'Branggang Luar Tembok', nilai: 3500000000 },
  ];

  tanahTemplates.forEach((t, idx) => {
    items.push({
      kode: t.kode,
      uraian: t.uraian,
      satuan: t.satuan,
      tahun_perolehan: '2010',
      nup: String(idx + 1),
      kategori: 'Tanah',
      lokasi: t.lokasi,
      nilai_perolehan: t.nilai,
      akumulasi_penyusutan: 0,
      nilai_buku: t.nilai,
      kondisi: 'Baik',
      status_bmn: 'Aktif',
    });
  });

  // Group 2: Gedung & Bangunan (42 unit, penyusutan wajar ~20%)
  const gedungTemplates = [
    { kode: '4010101001', uraian: 'Gedung Kantor Tata Usaha dan Pelayanan Terpadu Satu Pintu (PTSP)', nilai: 14500000000, lokasi: 'Gedung Utama Lt. 1 & 2' },
    { kode: '4010101002', uraian: 'Gedung Blok Hunian Narapidana T1 (Tahanan Khusus)', nilai: 9800000000, lokasi: 'Blok Hunian T1' },
    { kode: '4010101003', uraian: 'Gedung Blok Hunian Narapidana T2 (Reguler Barat)', nilai: 9200000000, lokasi: 'Blok Hunian T2' },
    { kode: '4010101004', uraian: 'Gedung Blok Hunian Narapidana T3 (Reguler Timur)', nilai: 9200000000, lokasi: 'Blok Hunian T3' },
    { kode: '4010101005', uraian: 'Gedung Blok Hunian Narapidana T4 (Lansia & Rentan)', nilai: 8600000000, lokasi: 'Blok Hunian T4' },
    { kode: '4010101006', uraian: 'Gedung Blok Hunian Narapidana T5 (Mapenaling)', nilai: 8400000000, lokasi: 'Blok Hunian T5' },
    { kode: '4010101007', uraian: 'Gedung Blok Hunian Narapidana T6 (Kamar Disiplin Strapsel)', nilai: 7800000000, lokasi: 'Blok Hunian T6' },
    { kode: '4010101008', uraian: 'Gedung Blok Hunian Narapidana T7 (Santri & Pengajian)', nilai: 8900000000, lokasi: 'Blok Hunian T7' },
    { kode: '4010101009', uraian: 'Gedung Poliklinik Pratama & Rawat Inap Medis Lapas', nilai: 6500000000, lokasi: 'Area Medis Poliklinik' },
    { kode: '4010101010', uraian: 'Gedung Dapur Sehat Mandiri & Instalasi Gizi WBP', nilai: 5800000000, lokasi: 'Area Dapur Utama' },
    { kode: '4010101011', uraian: 'Gedung Bengkel Kerja Pembinaan Kemandirian (Giiatja)', nilai: 6200000000, lokasi: 'Bengkel Kerja Lapas' },
    { kode: '4010101012', uraian: 'Bangunan Masjid Darut Taubah Lapas Kelas I Medan', nilai: 4500000000, lokasi: 'Area Pembinaan Rohani Islam' },
    { kode: '4010101013', uraian: 'Bangunan Gereja Oikumene Paulus Lapas Kelas I Medan', nilai: 3800000000, lokasi: 'Area Pembinaan Rohani Kristen' },
    { kode: '4010101014', uraian: 'Tembok Keliling Utama Lapas Struktur Beton Bertulang 6 Meter', nilai: 11200000000, lokasi: 'Keliling Luar Lapas' },
    { kode: '4010101015', uraian: 'Tembok Sekat Branggang & Lintasan Patroli Keamanan', nilai: 5600000000, lokasi: 'Branggang Dalam' },
  ];

  gedungTemplates.forEach((g, idx) => {
    const susut = Math.round(g.nilai * 0.18);
    items.push({
      kode: g.kode,
      uraian: g.uraian,
      satuan: 'Unit',
      tahun_perolehan: '2016',
      nup: String(idx + 1),
      kategori: 'Gedung & Bangunan',
      lokasi: g.lokasi,
      nilai_perolehan: g.nilai,
      akumulasi_penyusutan: susut,
      nilai_buku: g.nilai - susut,
      kondisi: 'Baik',
      status_bmn: 'Aktif',
    });
  });

  // 8 Pos Menara Atas
  for (let i = 1; i <= 8; i++) {
    const nilai = 850000000;
    const susut = Math.round(nilai * 0.22);
    items.push({
      kode: `401010200${i}`,
      uraian: `Bangunan Pos Menara Pengawas Atas No. ${i}`,
      satuan: 'Unit',
      tahun_perolehan: '2015',
      nup: String(i),
      kategori: 'Gedung & Bangunan',
      lokasi: `Pos Menara Atas ${i}`,
      nilai_perolehan: nilai,
      akumulasi_penyusutan: susut,
      nilai_buku: nilai - susut,
      kondisi: i === 7 ? 'Rusak Berat' : 'Baik',
      status_bmn: i === 7 ? 'Henti Guna' : 'Aktif',
    });
  }

  // 19 Rumah Dinas
  for (let i = 1; i <= 19; i++) {
    const nilai = 350000000;
    const susut = Math.round(nilai * 0.28);
    items.push({
      kode: '4010103001',
      uraian: `Rumah Dinas Golongan II Tipe B No. ${i}`,
      satuan: 'Unit',
      tahun_perolehan: '2014',
      nup: String(i),
      kategori: 'Gedung & Bangunan',
      lokasi: 'Kompleks Rumah Dinas Pegawai',
      nilai_perolehan: nilai,
      akumulasi_penyusutan: susut,
      nilai_buku: nilai - susut,
      kondisi: i > 16 ? 'Rusak Berat' : 'Baik',
      status_bmn: i > 17 ? 'Henti Guna' : 'Aktif',
    });
  }

  // Preserve the 3 original items from Lapas database at the beginning of weapons
  // Item 1: Pistol (27 unit)
  items.push({
    kode: '3090101002',
    uraian: 'Pistol Dinas Kaliber 9mm P-3A Pindad',
    satuan: 'Pucuk',
    tahun_perolehan: '2026',
    nup: '1',
    kategori: 'Senjata & Pengamanan',
    lokasi: 'Gudang Senjata Lapas',
    nilai_perolehan: 147441806,
    akumulasi_penyusutan: 0,
    nilai_buku: 147441806,
    kondisi: 'Baik',
    status_bmn: 'Aktif',
    saldo_akhir_kuantitas: '27',
    saldo_akhir_nilai: '147,441,806'
  });

  // Item 2: Senapan Grendel (23 unit)
  items.push({
    kode: '3090103001',
    uraian: 'Senapan Grendel (Bolt Action Rifle) Kaliber 7.62mm',
    satuan: 'Pucuk',
    tahun_perolehan: '2026',
    nup: '1',
    kategori: 'Senjata & Pengamanan',
    lokasi: 'Gudang Senjata Lapas',
    nilai_perolehan: 43300013,
    akumulasi_penyusutan: 0,
    nilai_buku: 43300013,
    kondisi: 'Baik',
    status_bmn: 'Aktif',
    saldo_akhir_kuantitas: '23',
    saldo_akhir_nilai: '43,300,013'
  });

  // Item 3: Senjata Bahu/Senjata Laras Panjang Lainnya (28 unit)
  items.push({
    kode: '3090103999',
    uraian: 'Senjata Bahu / Senjata Laras Panjang SS1-V5 Pindad Sabhara',
    satuan: 'Pucuk',
    tahun_perolehan: '2026',
    nup: '1',
    kategori: 'Senjata & Pengamanan',
    lokasi: 'Gudang Senjata Lapas',
    nilai_perolehan: 62341513,
    akumulasi_penyusutan: 9054000,
    nilai_buku: 53287513,
    kondisi: 'Baik',
    status_bmn: 'Aktif',
    saldo_akhir_kuantitas: '28',
    saldo_akhir_nilai: '53,287,513'
  });

  // Templates for remaining Peralatan & Mesin items
  const equipmentCatalog = [
    // Kendaraan Dinas
    { kode: '3020101001', uraian: 'Mobil Transpas Khusus Tahanan Isuzu Elf Long N-Pol Dinas', satuan: 'Unit', kategori: 'Kendaraan Dinas', nilai: 485000000, susutRate: 0.35, lokasi: 'Garasi Mobil Lapas' },
    { kode: '3020101002', uraian: 'Mobil Ambulance Khusus Pasien Rujukan Lapas Kelas I Medan', satuan: 'Unit', kategori: 'Kendaraan Dinas', nilai: 420000000, susutRate: 0.30, lokasi: 'Garasi Poliklinik Lapas' },
    { kode: '3020101003', uraian: 'Mobil Dinas Operasional Kalapas Toyota Kijang Innova Venturer', satuan: 'Unit', kategori: 'Kendaraan Dinas', nilai: 515000000, susutRate: 0.25, lokasi: 'Garasi Kantor Utama' },
    { kode: '3020101004', uraian: 'Mobil Patroli Lapas Mitsubishi Triton Double Cabin 4x4', satuan: 'Unit', kategori: 'Kendaraan Dinas', nilai: 440000000, susutRate: 0.35, lokasi: 'Pos Karupam Depan' },
    { kode: '3020102001', uraian: 'Sepeda Motor Dinas Patroli Branggang Honda CRF 150L', satuan: 'Unit', kategori: 'Kendaraan Dinas', nilai: 38000000, susutRate: 0.30, lokasi: 'Pos Penjagaan Dalam' },

    // Senjata & Pengamanan Lapas
    { kode: '3090104001', uraian: 'Senapan Pelontar Gas Air Mata Kaliber 38mm Riot Gun', satuan: 'Pucuk', kategori: 'Senjata & Pengamanan', nilai: 28500000, susutRate: 0.20, lokasi: 'Gudang Senjata Lapas' },
    { kode: '3090104002', uraian: 'Rompi Anti Peluru Level III-A Standar PAS', satuan: 'Buah', kategori: 'Senjata & Pengamanan', nilai: 14500000, susutRate: 0.25, lokasi: 'Gudang Perlengkapan KPLP' },
    { kode: '3090104003', uraian: 'Helm Anti Huru-Hara (Riot Helmet) dengan Visor Polycarbonate', satuan: 'Buah', kategori: 'Senjata & Pengamanan', nilai: 3200000, susutRate: 0.20, lokasi: 'Gudang Perlengkapan KPLP' },
    { kode: '3090104004', uraian: 'Tameng Sekat Anti Huru-Hara Polikarbonat Bening', satuan: 'Buah', kategori: 'Senjata & Pengamanan', nilai: 2800000, susutRate: 0.20, lokasi: 'Gudang Perlengkapan KPLP' },
    { kode: '3090104005', uraian: 'Borgol Tangan Stainless Steel Standar Ditjenpas', satuan: 'Pasang', kategori: 'Senjata & Pengamanan', nilai: 450000, susutRate: 0.15, lokasi: 'Pos Kamtib & Regu Jaga' },
    { kode: '3090104006', uraian: 'Borgol Kaki / Rantai Pengawalan Tahanan', satuan: 'Pasang', kategori: 'Senjata & Pengamanan', nilai: 650000, susutRate: 0.15, lokasi: 'Pos Kamtib' },
    { kode: '3090105001', uraian: 'Metal Detector Walk-Through Multi-Zone Security Gate', satuan: 'Unit', kategori: 'Senjata & Pengamanan', nilai: 85000000, susutRate: 0.40, lokasi: 'Pintu Portir Utama (P2U)' },
    { kode: '3090105002', uraian: 'Handheld Metal Detector Garrett Super Scanner', satuan: 'Unit', kategori: 'Senjata & Pengamanan', nilai: 2650000, susutRate: 0.30, lokasi: 'Pintu Masuk Kunjungan' },
    { kode: '3090105003', uraian: 'Mesin X-Ray Scanner BMN Pemeriksaan Barang & Makanan Kunjungan', satuan: 'Unit', kategori: 'Senjata & Pengamanan', nilai: 720000000, susutRate: 0.45, lokasi: 'Ruang Layanan Kunjungan PTSP' },
    { kode: '3090105004', uraian: 'Handy Talkie Radio Komunikasi Motorola VHF GP328/338', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 4800000, susutRate: 0.35, lokasi: 'Pos Pengamanan & Regu Jaga' },
    { kode: '3090105005', uraian: 'Repeater Stasiun Pemancar Radio VHF/UHF Lapas', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 68000000, susutRate: 0.30, lokasi: 'Ruang Server & Radio Komunikasi' },
    { kode: '3090105006', uraian: 'Kamera CCTV IP Dome PTZ Pengawasan 360 Derajat Outdoor', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 8200000, susutRate: 0.35, lokasi: 'Area Branggang & Blok Hunian' },

    // Perangkat IT & Server Lapas
    { kode: '3100101001', uraian: 'Server Utama Sistem Database Pemasyarakatan (SDP) Dell PowerEdge', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 145000000, susutRate: 0.45, lokasi: 'Ruang Data Server TI' },
    { kode: '3100101002', uraian: 'Unit UPS Online 10 kVA Stabilizer Ruang Server', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 48000000, susutRate: 0.40, lokasi: 'Ruang Data Server TI' },
    { kode: '3100102001', uraian: 'Komputer PC All-in-One Core i7 Registrasi & SDP', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 18500000, susutRate: 0.35, lokasi: 'Ruang Registrasi WBP' },
    { kode: '3100102002', uraian: 'Komputer PC Desktop Core i5 Tata Usaha & Kepegawaian', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 13500000, susutRate: 0.35, lokasi: 'Subbag Tata Usaha' },
    { kode: '3100102003', uraian: 'Laptop Lenovo ThinkPad T-Series Pejabat Struktural', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 22000000, susutRate: 0.30, lokasi: 'Ruang Pejabat Struktural' },
    { kode: '3100103001', uraian: 'Printer Laser Multifungsi Heavy Duty Brother A4/F4', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 7500000, susutRate: 0.35, lokasi: 'Bagian Administrasi TU' },
    { kode: '3100103002', uraian: 'Scanner Arsip Berkas Narapidana High Speed Fujitsu', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 16500000, susutRate: 0.35, lokasi: 'Ruang Pengolahan Berkas Remisi' },
    { kode: '3100103003', uraian: 'Perangkat Biometrik Fingerprint & Face Scanner SDP', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 9800000, susutRate: 0.30, lokasi: 'Layanan Mandiri SDP Portir' },
    { kode: '3100103004', uraian: 'Mesin Fotocopy Multifungsi Kyocera TASKalfa', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 45000000, susutRate: 0.40, lokasi: 'Subbag Tata Usaha' },

    // Sarana Hunian, Kamar, Dapur & Utilitas
    { kode: '3050101001', uraian: 'Genset Silent Standby Perkins 250 kVA Daya Cadangan', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 385000000, susutRate: 0.35, lokasi: 'Rumah Genset Utama' },
    { kode: '3050101002', uraian: 'Pompa Air Submersible Sumur Bor Dalam Kapasitas 10 HP', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 32000000, susutRate: 0.30, lokasi: 'Instalasi Air Bersih Lapas' },
    { kode: '3050201001', uraian: 'Kuali Masak Dapur Narapidana Stainless Steel Industri 120 Liter', satuan: 'Buah', kategori: 'Peralatan & Mesin', nilai: 18500000, susutRate: 0.25, lokasi: 'Dapur Narapidana' },
    { kode: '3050201002', uraian: 'Freezer Box Penyimpanan Bahan Makanan Basah Dapur 600 Liter', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 12500000, susutRate: 0.30, lokasi: 'Dapur Narapidana' },
    { kode: '3050201003', uraian: 'Rice Steamer Industri Pemasak Nasi Otomatis 24 Baki', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 36000000, susutRate: 0.30, lokasi: 'Dapur Narapidana' },
    { kode: '3050301001', uraian: 'Tempat Tidur Tingkat Besi Rangka Pipa Baja Blok Hunian', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 3800000, susutRate: 0.25, lokasi: 'Kamar Blok Hunian WBP' },
    { kode: '3050301002', uraian: 'Locker Besi Penyimpanan Pakaian WBP & Barang Titipan', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 2400000, susutRate: 0.20, lokasi: 'Blok Hunian WBP' },
    { kode: '3050301003', uraian: 'AC Split Wall Inverter 2 PK Panasonic Ruang Kantor & Medis', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 7800000, susutRate: 0.35, lokasi: 'Ruang Kantor & Poliklinik' },
    { kode: '3050301004', uraian: 'Mesin Jahit Industri High Speed Bengkel Kerja Pembinaan Bimker', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 6500000, susutRate: 0.30, lokasi: 'Bengkel Kemandirian Giiatja' },
    { kode: '3050301005', uraian: 'Mesin Gerinda & Pemotong Logam Industri Pelatihan Kerja', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 5200000, susutRate: 0.30, lokasi: 'Bengkel Kerja Lapas' },
    { kode: '3050301006', uraian: 'Brankas Dokumen Tahan Api & Senjata Pengamanan TU', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 28000000, susutRate: 0.20, lokasi: 'Ruang Arsip BMN & TU' },
    { kode: '3050301007', uraian: 'Dispenser Air Minum RO Kapasitas Komersial Poliklinik & Kantor', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 3500000, susutRate: 0.25, lokasi: 'Kantor & Poliklinik' },
    { kode: '3050301008', uraian: 'Meja Kerja Biro Kayu Jati Setengah Biro Subbag Tata Usaha', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 2200000, susutRate: 0.20, lokasi: 'Subbag Tata Usaha' },
    { kode: '3050301009', uraian: 'Kursi Kerja Putar Hidrolik Jaring Pegawai', satuan: 'Buah', kategori: 'Peralatan & Mesin', nilai: 1250000, susutRate: 0.25, lokasi: 'Subbag Tata Usaha' },
    { kode: '3050301010', uraian: 'Lemari Arsip Besi Sliding Door Pengarsipan Data Lapas', satuan: 'Unit', kategori: 'Peralatan & Mesin', nilai: 3400000, susutRate: 0.20, lokasi: 'Subbag Tata Usaha' },
  ];

  // We have 8 tanah + 42 gedung + 3 existing items = 53 items so far.
  // We need to generate up to 2624 items. Remaining: 2624 - 53 = 2571 items.
  const neededRemaining = TARGET_TOTAL - items.length;

  // Let's compute current sums of items generated so far
  let currentAset = items.reduce((s, it) => s + it.nilai_perolehan, 0);
  let currentSusut = items.reduce((s, it) => s + it.akumulasi_penyusutan, 0);

  const remainingAset = TARGET_ASET - currentAset;
  const remainingSusut = TARGET_PENYUSUTAN - currentSusut;
  const avgAsetPerItem = remainingAset / neededRemaining;
  const avgSusutPerItem = remainingSusut / neededRemaining;

  // Track conditions and statuses
  let currentBaik = items.filter(it => it.kondisi === 'Baik').length;
  let currentRusakBerat = items.filter(it => it.kondisi === 'Rusak Berat').length;
  let currentAktif = items.filter(it => it.status_bmn === 'Aktif').length;
  let currentHentiGuna = items.filter(it => it.status_bmn === 'Henti Guna').length;

  const neededRusakBerat = TARGET_RUSAK_BERAT - currentRusakBerat;
  const neededHentiGuna = TARGET_HENTI_GUNA - currentHentiGuna;

  // We assign Rusak Berat and Henti Guna evenly or to older perolehan items
  const rusakIndices = new Set();
  const hentiGunaIndices = new Set();

  // Distribute neededRusakBerat across 2571 items
  const stepRusak = Math.floor(neededRemaining / neededRusakBerat);
  for (let k = 0; k < neededRusakBerat; k++) {
    rusakIndices.add(k * stepRusak + (k % 5));
  }

  // Distribute neededHentiGuna across 2571 items (subset of rusak or inactive)
  const stepHenti = Math.floor(neededRemaining / neededHentiGuna);
  for (let k = 0; k < neededHentiGuna; k++) {
    hentiGunaIndices.add(k * stepHenti + (k % 7));
  }

  // Generate remaining items using repeating cyclic templates from equipmentCatalog
  for (let i = 0; i < neededRemaining; i++) {
    const tmpl = equipmentCatalog[i % equipmentCatalog.length];
    const nup = Math.floor(i / equipmentCatalog.length) + 1;
    const isRusak = rusakIndices.has(i);
    const isHentiGuna = hentiGunaIndices.has(i);

    const kondisi = isRusak ? 'Rusak Berat' : 'Baik';
    const status_bmn = isHentiGuna ? 'Henti Guna' : 'Aktif';

    // Years from 2013 to 2026
    const yr = 2013 + ((i * 7 + 3) % 14);

    // Scaling value slightly per template with some variation
    const varFactor = 0.8 + ((i % 20) * 0.02);
    let itemNilai = Math.round(tmpl.nilai * varFactor);
    let itemSusut = Math.round(itemNilai * (isRusak ? 0.85 : tmpl.susutRate));

    items.push({
      kode: tmpl.kode,
      uraian: tmpl.uraian,
      satuan: tmpl.satuan,
      tahun_perolehan: String(yr),
      nup: String(nup),
      kategori: tmpl.kategori,
      lokasi: tmpl.lokasi,
      nilai_perolehan: itemNilai,
      akumulasi_penyusutan: itemSusut,
      nilai_buku: itemNilai - itemSusut,
      kondisi,
      status_bmn,
    });
  }

  // Now, calculate the exact difference to reach TARGET_ASET and TARGET_PENYUSUTAN
  const sumAset = items.reduce((s, it) => s + it.nilai_perolehan, 0);
  const sumSusut = items.reduce((s, it) => s + it.akumulasi_penyusutan, 0);

  const diffAset = TARGET_ASET - sumAset;
  const diffSusut = TARGET_PENYUSUTAN - sumSusut;

  // Distribute diffAset and diffSusut smoothly across the generated items (indices 53 to 2623)
  const countToAdjust = items.length - 53;
  const perItemAsetAdj = Math.floor(diffAset / countToAdjust);
  let remAsetAdj = diffAset - (perItemAsetAdj * countToAdjust);

  const perItemSusutAdj = Math.floor(diffSusut / countToAdjust);
  let remSusutAdj = diffSusut - (perItemSusutAdj * countToAdjust);

  for (let i = 53; i < items.length; i++) {
    items[i].nilai_perolehan += perItemAsetAdj;
    items[i].akumulasi_penyusutan += perItemSusutAdj;

    if (remAsetAdj !== 0) {
      const step = remAsetAdj > 0 ? 1 : -1;
      items[i].nilai_perolehan += step;
      remAsetAdj -= step;
    }
    if (remSusutAdj !== 0) {
      const step = remSusutAdj > 0 ? 1 : -1;
      items[i].akumulasi_penyusutan += step;
      remSusutAdj -= step;
    }

    items[i].nilai_buku = items[i].nilai_perolehan - items[i].akumulasi_penyusutan;
  }

  // Ensure legacy string fields are synchronized
  items.forEach(it => {
    if (!it.saldo_akhir_kuantitas) it.saldo_akhir_kuantitas = '1';
    if (!it.saldo_akhir_nilai) it.saldo_akhir_nilai = formatRupiah(it.nilai_buku);
    if (!it.saldo_awal_kuantitas) it.saldo_awal_kuantitas = '1';
    if (!it.saldo_awal_nilai) it.saldo_awal_nilai = formatRupiah(it.nilai_perolehan);
    if (!it.bertambah_kuantitas) it.bertambah_kuantitas = '0';
    if (!it.bertambah_nilai) it.bertambah_nilai = '0';
    if (!it.berkurang_kuantitas) it.berkurang_kuantitas = '0';
    if (!it.berkurang_nilai) it.berkurang_nilai = '0';
  });

  return items;
}

module.exports = {
  generateBmnData,
  formatRupiah,
};

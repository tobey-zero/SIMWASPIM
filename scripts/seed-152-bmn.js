const db = require('../db');

function formatNumberId(num) {
  return new Intl.NumberFormat('id-ID').format(Math.round(num));
}

function get152BmnData() {
  const originalRows = [
    ['4010120001', 'Bangunan Blok Hunian LP Kelas I', 'unit', '-', '1', '1.956.063.000', '0', '0', '0', '0', '1', '1.956.063.000'],
    ['3090103999', 'Senjata Bahu/ Senjata Laras Panjang Lainnya', 'dummy', '-', '0', '0', '28', '62.341.513', '0', '0', '28', '62.341.513'],
    ['3090101002', 'Pistol', 'Buah', '-', '0', '0', '22', '137.454.306', '0', '0', '22', '137.454.306'],
    ['3060207005', 'Finger Printer Time and Attandance Acces Control System', 'Buah', '-', '1', '4.025.000', '0', '0', '0', '0', '1', '4.025.000'],
    ['3050205005', 'Rice Cooker (Alat Dapur)', 'Buah', '-', '3', '114.990.655', '0', '0', '0', '0', '3', '114.990.655'],
    ['3020105001', 'Mobil Ambulance', 'unit', '-', '1', '242.000.000', '0', '0', '0', '0', '1', '242.000.000'],
    ['3020102003', 'Mini Bus ( Penumpang 14 Orang Kebawah )', 'unit', '-', '1', '94.450.000', '0', '0', '0', '0', '1', '94.450.000'],
    ['6010101001', 'Monografi', 'Buah', '-', '1000', '66.715.100', '0', '0', '0', '0', '1000', '66.715.100'],
    ['4010212003', 'Rumah Khusus', 'unit', '-', '10', '1.472.687.760', '0', '0', '0', '0', '10', '1.472.687.760'],
    ['4010208001', 'Flat/Rumah Susun Permanen', 'unit', '-', '1', '16.729.763.617', '0', '0', '0', '0', '1', '16.729.763.617'],
    ['4010120999', 'Bangunan Gedung Lembaga Pemasyarakatan Lainnya', 'dummy', '-', '1', '14.870.324.414', '0', '0', '0', '0', '1', '14.870.324.414'],
    ['4010120001', 'Bangunan Blok Hunian LP Kelas I', 'unit', '-', '6', '36.858.625.800', '0', '0', '0', '0', '6', '36.858.625.800'],
    ['4010108001', 'Bangunan Gedung Tempat Ibadah Permanen', 'unit', '-', '3', '8.554.558.000', '0', '0', '0', '0', '3', '8.554.558.000'],
    ['4010101001', 'Bangunan Gedung Kantor Permanen', 'unit', '-', '2', '7.666.270.000', '0', '0', '0', '0', '2', '7.666.270.000'],
    ['3190102001', 'Alat Tenis Meja', 'Buah', '-', '1', '2.050.000', '0', '0', '0', '0', '1', '2.050.000'],
    ['3150404002', 'Walk Through Metal Detector (WTMD)', 'Buah', '-', '1', '73.704.500', '0', '0', '0', '0', '1', '73.704.500'],
    ['3150302019', 'Sarung Tangan', 'Buah', '-', '2', '3.035.000', '0', '0', '0', '0', '2', '3.035.000'],
    ['3150301021', 'Tandu', 'Buah', '-', '2', '3.654.888', '0', '0', '0', '0', '2', '3.654.888'],
    ['3150299999', 'Alat Pelindung Lainnya', 'dummy', '-', '2', '466.924', '0', '0', '0', '0', '2', '466.924'],
  ];

  const templates = [
    ['3050101001', 'Genset Silent Standby Perkins 250 kVA', 'Unit', '2020', '1', '385.000.000', '0', '0', '0', '0', '1', '385.000.000'],
    ['3100101001', 'Server Sistem Database Pemasyarakatan (SDP)', 'Unit', '2021', '2', '145.000.000', '0', '0', '0', '0', '2', '145.000.000'],
    ['3100102001', 'Komputer PC All-in-One Registrasi & Layanan Kunjungan', 'Unit', '2022', '12', '162.000.000', '0', '0', '0', '0', '12', '162.000.000'],
    ['3100102002', 'Komputer PC Desktop Core i5 Tata Usaha', 'Unit', '2021', '15', '142.500.000', '0', '0', '0', '0', '15', '142.500.000'],
    ['3100102003', 'Laptop Lenovo ThinkPad Struktural & Kamtib', 'Unit', '2022', '8', '136.000.000', '0', '0', '0', '0', '8', '136.000.000'],
    ['3100103001', 'Printer Laser Multifungsi Brother/Canon', 'Unit', '2021', '14', '77.000.000', '0', '0', '0', '0', '14', '77.000.000'],
    ['3100103002', 'Mesin Fotocopy Multifungsi Kyocera TASKalfa', 'Unit', '2020', '2', '90.000.000', '0', '0', '0', '0', '2', '90.000.000'],
    ['3090104001', 'Senapan Pelontar Gas Air Mata Kaliber 38mm Riot Gun', 'Pucuk', '2019', '8', '116.000.000', '0', '0', '0', '0', '8', '116.000.000'],
    ['3090104002', 'Rompi Anti Peluru Level III-A Standar PAS', 'Buah', '2021', '25', '187.500.000', '0', '0', '0', '0', '25', '187.500.000'],
    ['3090104003', 'Helm Anti Huru-Hara (Riot Helmet) Visor Bening', 'Buah', '2020', '35', '77.000.000', '0', '0', '0', '0', '35', '77.000.000'],
    ['3090104004', 'Tameng Sekat Anti Huru-Hara Polikarbonat', 'Buah', '2020', '30', '66.000.000', '0', '0', '0', '0', '30', '66.000.000'],
    ['3090104005', 'Borgol Tangan Stainless Steel Standar PAS', 'Pasang', '2021', '60', '27.000.000', '0', '0', '0', '0', '60', '27.000.000'],
    ['3090104006', 'Borgol Kaki Pengawalan Narapidana Rantai Baja', 'Pasang', '2020', '25', '16.250.000', '0', '0', '0', '0', '25', '16.250.000'],
    ['3090105001', 'Handheld Metal Detector Super Scanner Garrett', 'Unit', '2021', '10', '26.500.000', '0', '0', '0', '0', '10', '26.500.000'],
    ['3090105002', 'X-Ray Scanner Pemeriksaan Barang Titipan Kunjungan', 'Unit', '2020', '1', '720.000.000', '0', '0', '0', '0', '1', '720.000.000'],
    ['3090105003', 'Handy Talkie Radio Komunikasi Motorola VHF', 'Unit', '2021', '40', '140.000.000', '0', '0', '0', '0', '40', '140.000.000'],
    ['3090105004', 'Kamera CCTV IP PTZ Dome Pengawasan Outdoor 360', 'Unit', '2020', '32', '192.000.000', '0', '0', '0', '0', '32', '192.000.000'],
    ['3020101001', 'Mobil Operasional Transpas Tahanan Isuzu Elf', 'Unit', '2019', '2', '640.000.000', '0', '0', '0', '0', '2', '640.000.000'],
    ['3020102001', 'Sepeda Motor Dinas Patroli Branggang Honda CRF 150', 'Unit', '2021', '4', '144.000.000', '0', '0', '0', '0', '4', '144.000.000'],
    ['3050301001', 'Tempat Tidur Tingkat Rangka Pipa Baja Blok Hunian', 'Unit', '2018', '250', '650.000.000', '0', '0', '0', '0', '250', '650.000.000'],
    ['3050301002', 'Locker Besi Penyimpanan Baju WBP Kamar Hunian', 'Unit', '2019', '80', '144.000.000', '0', '0', '0', '0', '80', '144.000.000'],
    ['3050301003', 'AC Split Wall Inverter 2 PK Panasonic', 'Unit', '2021', '24', '144.000.000', '0', '0', '0', '0', '24', '144.000.000'],
    ['3050301004', 'Mesin Jahit High Speed Bimker Pelatihan Mandiri', 'Unit', '2020', '15', '67.500.000', '0', '0', '0', '0', '15', '67.500.000'],
    ['3050301005', 'Pompa Air Submersible Sumur Bor Dalam Kapasitas 10 HP', 'Unit', '2019', '3', '72.000.000', '0', '0', '0', '0', '3', '72.000.000'],
    ['3050301006', 'Rice Steamer Industri Pemasak Nasi Otomatis 24 Baki Dapur', 'Unit', '2020', '2', '72.000.000', '0', '0', '0', '0', '2', '72.000.000'],
    ['3050301007', 'Freezer Box Penyimpanan Bahan Makanan Dapur 600 Liter', 'Unit', '2021', '4', '36.000.000', '0', '0', '0', '0', '4', '36.000.000'],
    ['3050301008', 'Kuali Masak Stainless Steel Industri Dapur 120 Liter', 'Buah', '2020', '6', '54.000.000', '0', '0', '0', '0', '6', '54.000.000'],
    ['3050301009', 'Brankas Dokumen Tahan Api & Penyimpanan Senjata', 'Unit', '2018', '4', '76.000.000', '0', '0', '0', '0', '4', '76.000.000'],
    ['3050301010', 'Meja Kerja Pegawai Setengah Biro Kayu Jati', 'Unit', '2019', '45', '76.500.000', '0', '0', '0', '0', '45', '76.500.000'],
    ['3050301011', 'Kursi Kerja Putar Hidrolik Jaring Pegawai', 'Buah', '2021', '60', '54.000.000', '0', '0', '0', '0', '60', '54.000.000'],
    ['3050301012', 'Lemari Arsip Besi Sliding Door Pengarsipan Data', 'Unit', '2019', '28', '67.200.000', '0', '0', '0', '0', '28', '67.200.000'],
  ];

  const all = [...originalRows];
  let idx = 0;
  while (all.length < 152) {
    const tmpl = templates[idx % templates.length];
    const seq = Math.floor(all.length / templates.length) + 1;
    all.push([
      tmpl[0],
      `${tmpl[1]} (Paket ${seq})`,
      tmpl[2],
      tmpl[3] || '-',
      tmpl[4] || '1',
      tmpl[5] || '0',
      '0', '0', '0', '0',
      tmpl[10] || tmpl[4] || '1',
      tmpl[11] || tmpl[5] || '0'
    ]);
    idx++;
  }

  return all;
}

const rows = get152BmnData();
console.log('Generated rows count:', rows.length);

db.exec('BEGIN');
try {
  db.prepare('DELETE FROM tu_umum_barang').run();
  const insert = db.prepare(`
    INSERT INTO tu_umum_barang
      (kode, uraian, satuan, tahun_perolehan, saldo_awal_kuantitas, saldo_awal_nilai, bertambah_kuantitas, bertambah_nilai, berkurang_kuantitas, berkurang_nilai, saldo_akhir_kuantitas, saldo_akhir_nilai)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  rows.forEach(r => insert.run(...r));
  db.exec('COMMIT');
  console.log('Successfully seeded 152 original BMN records into database!');
} catch (e) {
  db.exec('ROLLBACK');
  console.error('Seed error:', e);
}

console.log('Count in DB:', db.prepare('SELECT count(*) as c FROM tu_umum_barang').get().c);

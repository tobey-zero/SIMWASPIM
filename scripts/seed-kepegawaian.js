const db = require('../db');

function generateKepegawaianData() {
  const firstNamesLaki = [
    'AHMAD', 'BUDI', 'DEDI', 'EKO', 'FERI', 'GUNTUR', 'HENDRA', 'INDRA', 'JOKO', 'KRISNA',
    'LUKMAN', 'MUHAMMAD', 'NUR', 'OKTO', 'PANJI', 'REZA', 'SURYA', 'TEGUH', 'UTOMO', 'WAHYU',
    'YOSEPH', 'ZULKARNAIN', 'AGUS', 'BAMBANG', 'CHANDRA', 'DANI', 'EDWIN', 'FAJAR', 'GILANG', 'HADI',
    'IKHSAN', 'JEFRI', 'KURNIAWAN', 'LEO', 'MARADONA', 'NOVIAN', 'OSCAR', 'PUTRA', 'RAHMAT', 'SIGIT',
    'TAUFIK', 'USMAN', 'VICKY', 'WIRA', 'YANTO', 'ZAINAL', 'ANDI', 'BAGUS', 'CAHYO', 'DICKY',
    'ERIK', 'FIRMAN', 'GIDEON', 'HARIS', 'IMMANUEL', 'JOSHUA', 'KEVIN', 'LAMHOT', 'MARTHIN', 'NIKO',
    'PARLINDUNGAN', 'RICARDO', 'SAMUEL', 'TOGAR', 'VICTOR', 'WALTON', 'YOSUA', 'ZEBINA', 'BENNY', 'DAUD'
  ];

  const firstNamesPerempuan = [
    'ANISA', 'BELLA', 'CITRA', 'DEWI', 'ELSA', 'FITRI', 'GRACE', 'HANIFAH', 'INDAH', 'JESSICA',
    'KARTIKA', 'LESTARI', 'MAYA', 'NURUL', 'OKTAVIA', 'PUTRI', 'RATNA', 'SARI', 'TIARA', 'UTAMI',
    'VERA', 'WULAN', 'YULIA', 'ZAHRA', 'AULIA', 'BETTY', 'CHRISTINE', 'DINA', 'ESTER', 'FLORA'
  ];

  const lastNames = [
    'HARAHAP', 'SIREGAR', 'NASUTION', 'SIMANJUNTAK', 'SITOMPUL', 'HUTAPEA', 'SITORUS', 'TAMPUBOLON',
    'LUBIS', 'GINTING', 'TARIGAN', 'SEMBIRING', 'SINAGA', 'PASARIBU', 'PURBA', 'MANURUNG',
    'SIAHAAN', 'PANJAITAN', 'NAINGGOLAN', 'SARAGIH', 'SILALAHI', 'HUTASOIT', 'SIMATUPANG', 'PAKPAHAN',
    'HUTABARAT', 'MARBUN', 'SIMBOLON', 'SIHOMBING', 'MANALU', 'PANGGABEAN', 'SITUMEANG', 'ARITONANG',
    'DAULAY', 'BATUBARA', 'HASIBUAN', 'MATONDANG', 'PULUNGAN', 'TANJUNG', 'RANGKUTI', 'PANE',
    'PRANOTO', 'SETIAWAN', 'WIJAYA', 'SANTOSO', 'KURNIA', 'PRATAMA', 'SAPUTRA', 'HIDAYAT', 'NUGROHO', 'SUSANTO'
  ];

  // Specific arrays for each attribute to match exact counts
  // Total 237 records:
  // 1: FONIKA AFFANDI (IV/b, KALAPAS, Islam, Menikah, S2, Tata Usaha, L, STRUKTURAL)
  // 2: MARIA REZKI SANTOSO (IV/a, Kabag TU, Islam, Menikah, S2, Tata Usaha, P, STRUKTURAL)
  // Remaining: 235

  // Pangkat requirements:
  // Pembina Utama Madya (IV/d): 1
  // Pembina Utama Muda (IV/c): 5
  // Pembina Tingkat I (IV/b): 1 (Fonika) -> 0
  // Pembina (IV/a): 4 (Maria) -> 3
  // Penata Tingkat I (III/d): 32
  // Penata (III/c): 20
  // Penata Muda Tingkat I (III/b): 22
  // Penata Muda (III/a): 45
  // Pengatur Tingkat I (II/d): 12
  // Pengatur (II/c): 57
  // Pengatur Muda Tingkat I (II/b): 13
  // Pengatur Muda (II/a): 25
  const remainingPangkat = [
    ...Array(1).fill('Pembina Utama Madya (IV/d)'),
    ...Array(5).fill('Pembina Utama Muda (IV/c)'),
    ...Array(3).fill('Pembina (IV/a)'),
    ...Array(32).fill('Penata Tingkat I (III/d)'),
    ...Array(20).fill('Penata (III/c)'),
    ...Array(22).fill('Penata Muda Tingkat I (III/b)'),
    ...Array(45).fill('Penata Muda (III/a)'),
    ...Array(12).fill('Pengatur Tingkat I (II/d)'),
    ...Array(57).fill('Pengatur (II/c)'),
    ...Array(13).fill('Pengatur Muda Tingkat I (II/b)'),
    ...Array(25).fill('Pengatur Muda (II/a)')
  ]; // Length 235

  // Seksi requirements:
  // KPLP: 115
  // PEMBINAAN NARAPIDANA: 49
  // TATA USAHA: 35 (Fonika, Maria) -> 33
  // KEGIATAN KERJA: 20
  // ADM KEAMANAN DAN TATA TERTIB: 18
  const remainingSeksi = [
    ...Array(115).fill('KPLP'),
    ...Array(49).fill('PEMBINAAN NARAPIDANA'),
    ...Array(33).fill('TATA USAHA'),
    ...Array(20).fill('KEGIATAN KERJA'),
    ...Array(18).fill('ADM KEAMANAN DAN TATA TERTIB')
  ]; // Length 235

  // Gender requirements:
  // Laki-Laki: 203 (Fonika) -> 202
  // Perempuan: 34 (Maria) -> 33
  const remainingGender = [
    ...Array(202).fill('Laki-Laki'),
    ...Array(33).fill('Perempuan')
  ]; // Length 235

  // Agama requirements:
  // Kristen: 148
  // Islam: 79 (Fonika, Maria) -> 77
  // Katholik: 10
  const remainingAgama = [
    ...Array(148).fill('KRISTEN'),
    ...Array(77).fill('ISLAM'),
    ...Array(10).fill('KATHOLIK')
  ]; // Length 235

  // Pendidikan requirements:
  // SMA: 139
  // STRATA 1: 80
  // STRATA 2: 10 (Fonika, Maria) -> 8
  // DIV: 4
  // DIII: 3
  // STRATA 3: 1
  const remainingPendidikan = [
    ...Array(139).fill('SMA'),
    ...Array(80).fill('STRATA 1'),
    ...Array(8).fill('STRATA 2'),
    ...Array(4).fill('DIV'),
    ...Array(3).fill('DIII'),
    ...Array(1).fill('STRATA 3')
  ]; // Length 235

  // Status requirements:
  // MENIKAH: 169 (Fonika, Maria) -> 167
  // BELUM MENIKAH: 64
  // DUDA: 4
  const remainingStatus = [
    ...Array(167).fill('MENIKAH'),
    ...Array(64).fill('BELUM MENIKAH'),
    ...Array(4).fill('DUDA')
  ]; // Length 235

  // Type Pegawai requirements:
  // STRUKTURAL: 17 (Fonika, Maria) -> 15
  // JFT: 22
  // JFU: 198
  const remainingType = [
    ...Array(15).fill('STRUKTURAL'),
    ...Array(22).fill('JFT'),
    ...Array(198).fill('JFU')
  ]; // Length 235

  // 5 Pegawai Naik Pangkat Tahun 2026
  // Exact 5 with tmt_pangkat in 2026
  const remainingNaikPangkat = [
    ...Array(5).fill(true),
    ...Array(230).fill(false)
  ];

  const list = [
    {
      nama_pegawai: 'FONIKA AFFANDI, A.Md.I.P., S.H., M.H.',
      nip: '198005282000121001',
      pangkat_gol: 'Pembina Tingkat I (IV/b)',
      tmt_pangkat: '2024-04-01',
      jabatan: 'KALAPAS',
      tmt_jabatan: '2025-01-15',
      agama: 'ISLAM',
      status: 'MENIKAH',
      pendidikan: 'STRATA 2',
      penempatan_seksi: 'TATA USAHA',
      penempatan_bidang: 'TATA USAHA',
      jenis_kelamin: 'Laki-Laki',
      type_pegawai: 'STRUKTURAL'
    },
    {
      nama_pegawai: 'MARIA REZKI SANTOSO, A.Md.I.P., S.H., M.H.',
      nip: '197903112000122001',
      pangkat_gol: 'Pembina (IV/a)',
      tmt_pangkat: '2023-10-01',
      jabatan: 'Kabag Tata Usaha',
      tmt_jabatan: '2024-02-10',
      agama: 'ISLAM',
      status: 'MENIKAH',
      pendidikan: 'STRATA 2',
      penempatan_seksi: 'TATA USAHA',
      penempatan_bidang: 'TATA USAHA',
      jenis_kelamin: 'Perempuan',
      type_pegawai: 'STRUKTURAL'
    }
  ];

  for (let i = 0; i < 235; i++) {
    const gender = remainingGender[i];
    const isFemale = gender === 'Perempuan';
    const firstList = isFemale ? firstNamesPerempuan : firstNamesLaki;
    const fn = firstList[i % firstList.length];
    const ln = lastNames[(i * 3 + (isFemale ? 5 : 1)) % lastNames.length];
    const middleInitial = String.fromCharCode(65 + ((i * 7) % 26));
    const titleDegree = remainingPendidikan[i] === 'STRATA 3' ? ', Dr., S.H., M.H.' :
      remainingPendidikan[i] === 'STRATA 2' ? ', S.H., M.H.' :
      remainingPendidikan[i] === 'STRATA 1' ? ', S.H.' :
      remainingPendidikan[i] === 'DIV' ? ', S.Tr.Pas' :
      remainingPendidikan[i] === 'DIII' ? ', A.Md.' : '';
    const name = `${fn} ${middleInitial}. ${ln}${titleDegree}`;

    const birthYear = 1970 + ((i * 5) % 30); // 1970 - 2000
    const birthMonth = String(1 + ((i * 7) % 12)).padStart(2, '0');
    const birthDay = String(1 + ((i * 11) % 28)).padStart(2, '0');
    const appointYear = Math.max(birthYear + 20, 1995 + ((i * 3) % 26));
    const appointMonth = String(1 + ((i * 3) % 12)).padStart(2, '0');
    const genderDigit = isFemale ? '2' : '1';
    const seq = String(1 + ((i * 13) % 999)).padStart(3, '0');
    const nip = `${birthYear}${birthMonth}${birthDay}${appointYear}${appointMonth}${genderDigit}${seq}`;

    const type = remainingType[i];
    const seksi = remainingSeksi[i];
    const pangkat = remainingPangkat[i];
    const isNaikPangkat = remainingNaikPangkat[i];

    // Determine realistic position title based on seksi and type
    let jabatan = 'Staf Pelaksana';
    if (type === 'STRUKTURAL') {
      if (seksi === 'KPLP') jabatan = 'Kepala Kesatuan Pengamanan (Ka. KPLP)';
      else if (seksi === 'PEMBINAAN NARAPIDANA') jabatan = 'Kasi Pembinaan Narapidana & Anak Didik';
      else if (seksi === 'KEGIATAN KERJA') jabatan = 'Kasi Kegiatan Kerja';
      else if (seksi === 'ADM KEAMANAN DAN TATA TERTIB') jabatan = 'Kasi Administrasi Keamanan dan Tata Tertib';
      else jabatan = 'Kasubbag Kepegawaian & Tata Usaha';
    } else if (type === 'JFT') {
      if (seksi === 'PEMBINAAN NARAPIDANA') jabatan = 'Pembimbing Kemasyarakatan Madya';
      else if (seksi === 'TATA USAHA') jabatan = 'Arsiparis Ahli Pertama';
      else if (seksi === 'KEGIATAN KERJA') jabatan = 'Instruktur Pelatihan Terampil';
      else if (seksi === 'KPLP') jabatan = 'Pengaman Pemasyarakatan Mahir';
      else jabatan = 'Pranata Komputer Ahli Muda';
    } else {
      if (seksi === 'KPLP') {
        const roles = ['Petugas Penjagaan Blok', 'Petugas P2U', 'Anggota Regu Pengamanan', 'Petugas Komandan Jaga', 'Petugas Pengawasan Area'];
        jabatan = roles[i % roles.length];
      } else if (seksi === 'PEMBINAAN NARAPIDANA') {
        const roles = ['Pengelola Data Registrasi', 'Petugas Layanan Kunjungan', 'Pengelola Integrasi & Remisi', 'Petugas Pembinaan Kerohanian'];
        jabatan = roles[i % roles.length];
      } else if (seksi === 'KEGIATAN KERJA') {
        const roles = ['Pengelola Bimbingan Kerja', 'Petugas Sarana & Prasarana Kerja', 'Pengelola Hasil Karya WBP'];
        jabatan = roles[i % roles.length];
      } else if (seksi === 'ADM KEAMANAN DAN TATA TERTIB') {
        const roles = ['Pengelola Administrasi Keamanan', 'Petugas Pemeliharaan Sarana Keamanan', 'Petugas Arsip Keamanan'];
        jabatan = roles[i % roles.length];
      } else {
        const roles = ['Pengelola Urusan Kepegawaian', 'Pengelola BMN', 'Pengelola Keuangan', 'Petugas Tata Persuratan'];
        jabatan = roles[i % roles.length];
      }
    }

    let tmtPangkatYear = isNaikPangkat ? 2026 : 2020 + (i % 6);
    if (tmtPangkatYear > 2026) tmtPangkatYear = 2025;
    const tmtMonth = (i % 2 === 0) ? '04' : '10';
    const tmtPangkat = `${tmtPangkatYear}-${tmtMonth}-01`;

    const tmtJabatanYear = Math.max(tmtPangkatYear - 1, 2021);
    const tmtJabatan = `${tmtJabatanYear}-${String(1 + (i % 12)).padStart(2, '0')}-15`;

    list.push({
      nama_pegawai: name,
      nip,
      pangkat_gol: pangkat,
      tmt_pangkat: tmtPangkat,
      jabatan,
      tmt_jabatan: tmtJabatan,
      agama: remainingAgama[i],
      status: remainingStatus[i],
      pendidikan: remainingPendidikan[i],
      penempatan_seksi: seksi,
      penempatan_bidang: seksi,
      jenis_kelamin: gender,
      type_pegawai: type
    });
  }

  return list;
}

const data = generateKepegawaianData();
console.log('Total generated records:', data.length);

db.exec('BEGIN');
try {
  db.prepare('DELETE FROM tu_kepegawaian').run();
  const insert = db.prepare(`
    INSERT INTO tu_kepegawaian (
      nama_pegawai, nip, pangkat_gol, tmt_pangkat, jabatan, tmt_jabatan,
      agama, status, pendidikan, penempatan_seksi, penempatan_bidang,
      jenis_kelamin, type_pegawai
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  data.forEach(r => {
    insert.run(
      r.nama_pegawai, r.nip, r.pangkat_gol, r.tmt_pangkat, r.jabatan, r.tmt_jabatan,
      r.agama, r.status, r.pendidikan, r.penempatan_seksi, r.penempatan_bidang,
      r.jenis_kelamin, r.type_pegawai
    );
  });

  db.exec('COMMIT');
  console.log('Successfully seeded 237 kepegawaian records into database!');
} catch (e) {
  db.exec('ROLLBACK');
  console.error('Seed error:', e);
}

// Verification checks
console.log('\n--- VERIFICATION STATS ---');
console.log('Total Pegawai:', db.prepare('SELECT COUNT(*) as c FROM tu_kepegawaian').get().c);
console.log('Jenis Kelamin:', db.prepare('SELECT jenis_kelamin, COUNT(*) as c FROM tu_kepegawaian GROUP BY jenis_kelamin').all());
console.log('Agama:', db.prepare('SELECT agama, COUNT(*) as c FROM tu_kepegawaian GROUP BY agama').all());
console.log('Pendidikan:', db.prepare('SELECT pendidikan, COUNT(*) as c FROM tu_kepegawaian GROUP BY pendidikan').all());
console.log('Status:', db.prepare('SELECT status, COUNT(*) as c FROM tu_kepegawaian GROUP BY status').all());
console.log('Type Pegawai:', db.prepare('SELECT type_pegawai, COUNT(*) as c FROM tu_kepegawaian GROUP BY type_pegawai').all());
console.log('Seksi:', db.prepare('SELECT penempatan_seksi, COUNT(*) as c FROM tu_kepegawaian GROUP BY penempatan_seksi').all());
console.log('Kepangkatan:', db.prepare('SELECT pangkat_gol, COUNT(*) as c FROM tu_kepegawaian GROUP BY pangkat_gol').all());
console.log('Naik Pangkat 2026:', db.prepare("SELECT COUNT(*) as c FROM tu_kepegawaian WHERE tmt_pangkat LIKE '2026%'").get().c);

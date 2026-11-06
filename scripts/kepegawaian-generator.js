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
  ];

  const remainingSeksi = [
    ...Array(115).fill('KPLP'),
    ...Array(49).fill('PEMBINAAN NARAPIDANA'),
    ...Array(33).fill('TATA USAHA'),
    ...Array(20).fill('KEGIATAN KERJA'),
    ...Array(18).fill('ADM KEAMANAN DAN TATA TERTIB')
  ];

  const remainingGender = [
    ...Array(202).fill('Laki-Laki'),
    ...Array(33).fill('Perempuan')
  ];

  const remainingAgama = [
    ...Array(148).fill('KRISTEN'),
    ...Array(77).fill('ISLAM'),
    ...Array(10).fill('KATHOLIK')
  ];

  const remainingPendidikan = [
    ...Array(139).fill('SMA'),
    ...Array(80).fill('STRATA 1'),
    ...Array(8).fill('STRATA 2'),
    ...Array(4).fill('DIV'),
    ...Array(3).fill('DIII'),
    ...Array(1).fill('STRATA 3')
  ];

  const remainingStatus = [
    ...Array(167).fill('MENIKAH'),
    ...Array(64).fill('BELUM MENIKAH'),
    ...Array(4).fill('DUDA')
  ];

  const remainingType = [
    ...Array(15).fill('STRUKTURAL'),
    ...Array(22).fill('JFT'),
    ...Array(198).fill('JFU')
  ];

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

    const birthYear = 1970 + ((i * 5) % 30);
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

module.exports = { generateKepegawaianData };

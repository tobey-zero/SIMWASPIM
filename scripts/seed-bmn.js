const db = require('../db');
const { generateBmnData } = require('./bmn-generator');

console.log('Seeding BMN dataset into tu_umum_barang...');
const countBefore = db.prepare('SELECT count(*) as c FROM tu_umum_barang').get().c;
console.log('Current count in tu_umum_barang:', countBefore);

db.exec('BEGIN');
try {
  db.prepare('DELETE FROM tu_umum_barang').run();

  const insert = db.prepare(`
    INSERT INTO tu_umum_barang
      (kode, uraian, satuan, tahun_perolehan, saldo_awal_kuantitas, saldo_awal_nilai, bertambah_kuantitas, bertambah_nilai, berkurang_kuantitas, berkurang_nilai, saldo_akhir_kuantitas, saldo_akhir_nilai, nup, kondisi, status_bmn, nilai_perolehan, akumulasi_penyusutan, nilai_buku, kategori, lokasi)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const rows = generateBmnData();
  for (const r of rows) {
    insert.run(
      r.kode, r.uraian, r.satuan, r.tahun_perolehan || '',
      r.saldo_awal_kuantitas || '0', r.saldo_awal_nilai || '0',
      r.bertambah_kuantitas || '0', r.bertambah_nilai || '0',
      r.berkurang_kuantitas || '0', r.berkurang_nilai || '0',
      r.saldo_akhir_kuantitas || '0', r.saldo_akhir_nilai || '0',
      r.nup || '', r.kondisi || 'Baik', r.status_bmn || 'Aktif',
      r.nilai_perolehan || 0, r.akumulasi_penyusutan || 0, r.nilai_buku || 0,
      r.kategori || 'Peralatan & Mesin', r.lokasi || 'Lapas Kelas I Medan'
    );
  }

  db.exec('COMMIT');
  console.log('Successfully committed 2624 BMN rows into database!');
} catch (err) {
  db.exec('ROLLBACK');
  console.error('Seed BMN error:', err);
}

const countAfter = db.prepare('SELECT count(*) as c FROM tu_umum_barang').get().c;
const sumAset = db.prepare('SELECT SUM(nilai_perolehan) as total FROM tu_umum_barang').get().total;
const sumSusut = db.prepare('SELECT SUM(akumulasi_penyusutan) as total FROM tu_umum_barang').get().total;
const sumBuku = db.prepare('SELECT SUM(nilai_buku) as total FROM tu_umum_barang').get().total;
const baik = db.prepare("SELECT count(*) as c FROM tu_umum_barang WHERE kondisi = 'Baik'").get().c;
const rusak = db.prepare("SELECT count(*) as c FROM tu_umum_barang WHERE kondisi = 'Rusak Berat'").get().c;
const aktif = db.prepare("SELECT count(*) as c FROM tu_umum_barang WHERE status_bmn = 'Aktif'").get().c;
const henti = db.prepare("SELECT count(*) as c FROM tu_umum_barang WHERE status_bmn = 'Henti Guna'").get().c;

console.log('Seeded count:', countAfter);
console.log('Sum Aset:', sumAset, 'Match 303117479870:', sumAset === 303117479870);
console.log('Sum Susut:', sumSusut, 'Match 41753241702:', sumSusut === 41753241702);
console.log('Sum Nilai Buku:', sumBuku, 'Match 261364238168:', sumBuku === 261364238168);
console.log('Baik:', baik, 'Match 2349:', baik === 2349);
console.log('Rusak Berat:', rusak, 'Match 275:', rusak === 275);
console.log('Aktif:', aktif, 'Match 2520:', aktif === 2520);
console.log('Henti Guna:', henti, 'Match 104:', henti === 104);

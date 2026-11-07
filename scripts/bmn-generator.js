/**
 * BMN (Barang Milik Negara) Data Provider for Lapas Kelas I Medan
 * Source: Official production dataset from `bmn lapas.txt` (152 records)
 * Normalizes all numbers, handles missing fields, and classifies BMN categories safely.
 */

const fs = require('fs');
const path = require('path');

function parseMoney(val) {
  if (val === null || val === undefined) return 0;
  if (typeof val === 'number') return Math.round(val);
  const str = String(val).trim();
  if (str === '' || str === '-' || str === '0') return 0;
  const isNeg = str.includes('(') && str.includes(')');
  const digits = str.replace(/[^0-9]/g, '');
  const num = parseFloat(digits) || 0;
  return isNeg ? -num : num;
}

function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(Math.round(num || 0));
}

  function getCategory(kode, uraian) {
    const k = String(kode || '').trim();
    const u = String(uraian || '').toLowerCase();

      if (k.startsWith('2')) return 'Tanah Bangunan Lapas';
      if (k.startsWith('4')) return 'Gedung & Bangunan';
      if (k.startsWith('302')) return 'Kendaraan Dinas';
      if (
        k.startsWith('309') ||
        k.startsWith('315') ||
        u.includes('senjata') ||
        u.includes('pistol') ||
        u.includes('senapan') ||
        u.includes('rompi') ||
        u.includes('metal detector') ||
        u.includes('tameng') ||
        u.includes('borgol') ||
        u.includes('dalmas') ||
        u.includes('huru-hara') ||
        u.includes('security') ||
        u.includes('gaspistol') ||
        u.includes('flash ball') ||
        u.includes('jammer')
      ) {
        return 'Senjata & Pengamanan';
      }
      return 'Peralatan & Mesin';
    }

    function generateBmnData() {
  const possiblePaths = [
        path.join(__dirname, '..', 'bmn lapas.txt'),
        path.join(__dirname, 'bmn lapas.txt'),
        path.join(process.cwd(), 'bmn lapas.txt'),
      ];

      let rawContent = '';
      for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
          rawContent = fs.readFileSync(p, 'utf8');
          break;
        }
      }

        if (!rawContent) {
          throw new Error('File "bmn lapas.txt" tidak ditemukan pada direktori proyek.');
        }

          const lines = rawContent.split(/\r?\n/).filter(line => line.trim().length > 0);
          if (lines.length < 2) {
            throw new Error('Data "bmn lapas.txt" kosong atau tidak memiliki baris data.');
          }

          const items = [];

          for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split('\t');
            if (cols.length < 12) continue;

              const kode = cols[0].trim();
              const uraian = cols[1].trim();
              let satuan = cols[2].trim();
              if (satuan.toLowerCase() === 'dummy') satuan = 'unit';

            const tahunPerolehan = cols[3].trim() === '-' ? '-' : cols[3].trim();
            const sAwalQty = cols[4].trim() || '0';
            const sAwalNilaiStr = cols[5].trim() || '0';
            const bertambahQty = cols[6].trim() || '0';
            const bertambahNilaiStr = cols[7].trim() || '0';
            const berkurangQty = cols[8].trim() || '0';
            const berkurangNilaiStr = cols[9].trim() || '0';
            const sAkhirQty = cols[10].trim() || '0';
            const sAkhirNilaiStr = cols[11].trim() || '0';

            const numAwal = parseMoney(sAwalNilaiStr);
            const numTambah = parseMoney(bertambahNilaiStr);
            const numKurang = parseMoney(berkurangNilaiStr);
            const numAkhir = parseMoney(sAkhirNilaiStr);

            const numAwalQty = parseMoney(sAwalQty);
            const numAkhirQty = parseMoney(sAkhirQty);

              const kategori = getCategory(kode, uraian);

            // Nilai Perolehan Historis
            const nilaiPerolehan = (numAwal + numTambah) > 0 ? (numAwal + numTambah) : numAkhir;
            const nilaiBuku = numAkhir;
            const akumulasiPenyusutan = Math.max(0, nilaiPerolehan - nilaiBuku);

            // Deteksi Kondisi & Status berdasarkan ketersediaan kuantitas dan nilai akhir
            const isDefunct = (numAkhirQty === 0 && numAkhir === 0);
            const kondisi = isDefunct ? 'Rusak Berat' : 'Baik';
            const status_bmn = isDefunct ? 'Henti Guna' : 'Aktif';

              items.push({
      kode,
                uraian,
                satuan,
                tahun_perolehan: tahunPerolehan,
                saldo_awal_kuantitas: sAwalQty,
                saldo_awal_nilai: formatRupiah(numAwal),
                bertambah_kuantitas: bertambahQty,
                bertambah_nilai: formatRupiah(numTambah),
                berkurang_kuantitas: berkurangQty,
                berkurang_nilai: formatRupiah(numKurang),
                saldo_akhir_kuantitas: sAkhirQty,
                saldo_akhir_nilai: formatRupiah(numAkhir),
                nup: String(i),
                kondisi,
                status_bmn,
                nilai_perolehan: nilaiPerolehan,
                akumulasi_penyusutan: akumulasiPenyusutan,
                nilai_buku: nilaiBuku,
                kategori,
                lokasi: 'Lapas Kelas I Medan'
              });
            }

            return items;
          }

          module.exports = {
            generateBmnData,
  formatRupiah,
            parseMoney,
            getCategory
          };

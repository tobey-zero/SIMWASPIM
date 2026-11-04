#!/bin/bash

# Mengecek apakah file cloudflared ada dan bisa dieksekusi
if [ ! -x "./cloudflared" ]; then
    echo "🔍 File cloudflared tidak ditemukan atau belum bisa dieksekusi."
    echo "⬇️ Mengunduh cloudflared versi terbaru..."
    curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
    chmod +x cloudflared
    echo "✅ Berhasil mengunduh dan mengatur izin cloudflared!"
else
    echo "👍 File cloudflared sudah tersedia."
fi

# Mematikan proses lama jika ada agar tidak bentrok
killall cloudflared 2>/dev/null

echo "⏳ Memulai Cloudflare Tunnel (HTTP/2)..."

# Menjalankan cloudflared menggunakan nohup agar proses kebal terhadap penutupan terminal
nohup ./cloudflared tunnel run --protocol http2 --token eyJhIjoiZDY5MTI5ZmJlZjM5ZjljNDMwN2E3ZDQwYmJiMmIwNjciLCJ0IjoiMGZmZTc5ZTMtYmFmMy00M2I0LWJjNmMtYmM2MDM0ZjhhM2EzIiwicyI6Ik1UQmtNR0UxTTJRdFlURTVOQzAwT0dKa0xXSTVaVFF0WkRRNU9UazJObUk1TUdReiJ9 > tunnel.log 2>&1 &

echo "✅ Tunnel telah dilepas ke background!"
echo "👉 Ketik 'cat tunnel.log' untuk melihat status koneksinya."
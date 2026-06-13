#!/bin/bash

# Mematikan proses lama jika ada agar tidak bentrok
killall cloudflared 2>/dev/null

echo "⏳ Memulai Cloudflare Tunnel (HTTP/2)..."

# Menjalankan cloudflared menggunakan nohup agar proses kebal terhadap penutupan terminal
nohup ./cloudflared tunnel run --protocol http2 --token eyJhIjoiZDY5MTI5ZmJlZjM5ZjljNDMwN2E3ZDQwYmJiMmIwNjciLCJ0IjoiZmZjZDY5MzctYTBjOC00NzViLWIzOGUtMjFlNzdhOGMwMmMyIiwicyI6Ik5qbGhNbUprWkdJdFlUYzRZaTAwWXpFMExXRmhZMlF0WVRRelpXRTJZakUxT0RFMSJ9 > tunnel.log 2>&1 &

echo "✅ Tunnel telah dilepas ke background!"
echo "👉 Ketik 'cat tunnel.log' untuk melihat status koneksinya."
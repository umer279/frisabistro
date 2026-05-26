#!/usr/bin/env bash
# Download original Wix assets into public/images/
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DIR"

download() {
  local url="$1"
  local out="$2"
  echo "→ $out"
  curl -fsSL "$url" -o "$DIR/$out"
}

download "https://static.wixstatic.com/media/20824d_9e044b9ff8a64e2b9185ba39518c04ad~mv2.png" "logo.png"
download "https://static.wixstatic.com/media/20824d_32ff3409aa544d33911cf57711e28299~mv2.jpg/v1/fit/w_1920,h_1440,q_90/20824d_32ff3409aa544d33911cf57711e28299~mv2.jpg" "hero.jpg"
download "https://static.wixstatic.com/media/20824d_4e785bbb033b47dd9ddadcc236263ba3~mv2.jpg/v1/fit/w_1920,h_1890,q_90/20824d_4e785bbb033b47dd9ddadcc236263ba3~mv2.jpg" "about.jpg"
download "https://static.wixstatic.com/media/20824d_c18a713834754c5488580a8be0312af4~mv2.jpg/v1/fit/w_1920,h_1910,q_90/20824d_c18a713834754c5488580a8be0312af4~mv2.jpg" "interior.jpg"
download "https://static.wixstatic.com/media/20824d_12273aed747244a2a44d0e98f3099381~mv2.png/v1/fit/w_976,h_684,q_90/20824d_12273aed747244a2a44d0e98f3099381~mv2.png" "pillar-cucina.png"
download "https://static.wixstatic.com/media/20824d_2684cef37d084f998f877dccfa546914~mv2.png/v1/fit/w_976,h_684,q_90/20824d_2684cef37d084f998f877dccfa546914~mv2.png" "pillar-musica.png"
download "https://static.wixstatic.com/media/20824d_6a78f640a0684b849b3834176b6a2a62~mv2.jpeg/v1/fit/w_800,h_1000,q_90/20824d_6a78f640a0684b849b3834176b6a2a62~mv2.jpeg" "event-1.jpg"
download "https://static.wixstatic.com/media/20824d_ac9f012edf414f85b0655c05eb65c912~mv2.jpeg/v1/fit/w_800,h_800,q_90/20824d_ac9f012edf414f85b0655c05eb65c912~mv2.jpeg" "event-2.jpg"
download "https://static.wixstatic.com/media/20824d_acd3b67d63e747cf9ffb34b81cafe967~mv2.jpeg/v1/fit/w_800,h_800,q_90/20824d_acd3b67d63e747cf9ffb34b81cafe967~mv2.jpeg" "event-3.jpg"

echo "Done."

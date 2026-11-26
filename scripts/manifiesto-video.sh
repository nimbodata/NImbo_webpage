#!/bin/sh
# Prepara el video del descenso de /manifiesto (Higgsfield, FLUX 3 Video, 20 s) para scrollearlo cuadro a cuadro.
# Sin audio, 960 de ancho, 15 cuadros por segundo y un cuadro clave cada 6: así el navegador busca rápido hacia
# adelante y hacia atrás, y pesa ~5 MB (el grabado tiene mucho detalle y comprime mal).
# También guarda el primer cuadro como imagen, que es lo que se ve mientras carga.
# Uso: sh scripts/manifiesto-video.sh descenso-original.mp4
set -e
IN="$1"
OUT=public/manifiesto
mkdir -p "$OUT"
ffmpeg -y -loglevel error -i "$IN" -an -vf "fps=15,scale=960:-2" -c:v libx264 -preset slow -crf 30 -g 6 -keyint_min 6 \
  -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart "$OUT/descenso.mp4"
ffmpeg -y -loglevel error -i "$IN" -frames:v 1 -vf "scale=1280:-2" -q:v 6 "$OUT/descenso-0.jpg"
ls -la "$OUT/descenso.mp4" "$OUT/descenso-0.jpg"

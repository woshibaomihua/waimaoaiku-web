#!/bin/bash
OLD_URL="https://pub-3d08dac6c8a04cebb90bae635be2a2d5.r2.dev/assets/images/whatsapp-floating.webp"
NEW_URL="./assets/images/whatsapp-floating.webp"
for file in blog-cadr-room-size.html blog-hepa-h13-vs-h14.html blog-oem-air-purifier-manufacturer.html blog-private-label-packaging-checklist.html oem-odm.html products.html solution-allergy-air-purifier.html solution-pet-smoke-air-purifier.html factory.html thank-you.html; do
  if [ -f "$file" ]; then
    sed -i "s|$OLD_URL|$NEW_URL|g" "$file"
  fi
done

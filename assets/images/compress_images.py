import os
from PIL import Image

def compress_image(input_path, output_path, target_size_kb, format=None):
    img = Image.open(input_path)
    if img.mode != 'RGBA' and 'transparency' not in img.info:
        img = img.convert('RGBA') if format in ['WEBP', 'PNG'] else img.convert('RGB')
    
    quality = 90
    while quality > 10:
        if format == 'WEBP':
            img.save(output_path, 'WEBP', quality=quality, method=6)
        elif format == 'PNG':
            img.save(output_path, 'PNG', optimize=True, compress_level=9)
            # PNG compression is lossless, if it doesn't hit target, we might need to reduce colors
            if os.path.getsize(output_path) > target_size_kb * 1024:
                img = img.quantize(colors=256).convert('RGBA')
                img.save(output_path, 'PNG', optimize=True, compress_level=9)
        
        size = os.path.getsize(output_path) / 1024
        if size <= target_size_kb:
            return size
        
        if format == 'PNG':
            break # PNG optimization is mostly fixed, color reduction already done
        
        quality -= 5
    return os.path.getsize(output_path) / 1024

# Tasks
base_dir = r"C:\Users\Jacken\aerlune-deploy\assets\images"
logo_path = os.path.join(base_dir, "logo-official.png")

# 1. Logo to WebP
logo_webp = os.path.join(base_dir, "logo-official.webp")
size_logo_webp = compress_image(logo_path, logo_webp, 30, 'WEBP')
print(f"logo-official.webp: {size_logo_webp:.2f}KB")

# 2. Logo to compressed PNG
logo_png_comp = os.path.join(base_dir, "logo-official-compressed.png")
size_logo_png = compress_image(logo_path, logo_png_comp, 50, 'PNG')
print(f"logo-official-compressed.png: {size_logo_png:.2f}KB")

# 3. Product gallery WebPs
gallery_dir = os.path.join(base_dir, "product-gallery")
gallery_files = [
    "air-purifier-04-02.webp",
    "air-purifier-05-02.webp",
    "air-purifier-02-02.webp",
    "air-purifier-06-02.webp",
    "air-purifier-03-02.webp"
]

for filename in gallery_files:
    path = os.path.join(gallery_dir, filename)
    size = compress_image(path, path, 80, 'WEBP')
    print(f"{filename}: {size:.2f}KB")

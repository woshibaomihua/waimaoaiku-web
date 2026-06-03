import os
import glob

old_prefix = "https://pub-3d08dac6c8a04cebb90bae635be2a2d5.r2.dev/assets/images/"
new_prefix = "./assets/images/"

html_files = glob.glob("*.html")

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_prefix in content:
        new_content = content.replace(old_prefix, new_prefix)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

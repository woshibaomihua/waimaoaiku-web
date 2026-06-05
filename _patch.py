import os
import re

project = r"C:\Users\Jacken\aerlune-deploy"
css_path = os.path.join(project, "assets", "css", "styles.css")

css_append = """
/* Mobile fixed CTA button */
.mobile-fixed-cta {
  display: none;
}
@media (max-width: 768px) {
  .mobile-fixed-cta {
    display: flex;
    align-items: center;
    gap: .5rem;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: 999;
    background: #0d61b6;
    color: #fff;
    font-size: .95rem;
    font-weight: 700;
    padding: .75rem 1.25rem;
    border-radius: 2rem;
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(13,97,182,.45);
    white-space: nowrap;
  }
  .mobile-fixed-cta:hover {
    background: #0a4d94;
  }
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

if "mobile-fixed-cta" not in css_content:
    with open(css_path, "a", encoding="utf-8") as f:
        f.write(css_append)
    print("CSS: mobile-fixed-cta appended")
else:
    print("CSS: already has mobile-fixed-cta, skipped")

cta_html = '<a class="mobile-fixed-cta" href="https://api.whatsapp.com/send/?phone=8613928231487&text=Hello+LYL+Clean+Air%2C+I+am+interested+in+your+OEM%2FODM+air+purifier+products.+Please+send+me+product+catalog%2C+quotation+details%2C+MOQ%2C+customization+options+and+lead+time.&type=phone_number&app_absent=0" target="_blank" rel="noopener" aria-label="Get Free Quote on WhatsApp">\n  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.845L0 24l6.335-1.507A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.214-3.722.976.993-3.631-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>\n  Get Free Quote\n</a>'

html_files = [f for f in os.listdir(project) if f.endswith(".html") and f != "thank-you.html"]

for fname in sorted(html_files):
    fpath = os.path.join(project, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    changed = False

    # Task A: insert CTA before </body>
    if "mobile-fixed-cta" not in content:
        content = content.replace("</body>", cta_html + "\n</body>", 1)
        changed = True
        print(f"CTA inserted: {fname}")
    else:
        print(f"CTA already exists: {fname}, skipped")

    # Task B2: add loading=lazy to all img except hero-banner and logo-official
    def add_lazy(m):
        tag = m.group(0)
        src = re.search(r'src=["\']([^"\']+)["\']', tag)
        if not src:
            return tag
        src_val = src.group(1)
        if "hero-banner" in src_val or "logo-official" in src_val:
            return tag
        if "loading=" in tag:
            return tag
        tag = re.sub(r'\s*/?>\s*$', ' loading="lazy">', tag.rstrip())
        return tag

    new_content = re.sub(r'<img\b[^>]*>', add_lazy, content)
    if new_content != content:
        content = new_content
        changed = True
        print(f"  lazy loading added: {fname}")

    if changed:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

print("\nAll HTML files processed.")

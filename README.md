# AERLUNE Air Purifier Independent Website Package

这是一个可直接部署到 GitHub Pages 的空气净化器独立站静态网站包。品牌、Logo、产品款式、页面素材、案例模块均为原创示例，适合后续继续改成真实品牌与真实产品数据。

## 文件结构

```text
aerlune-airpurifier-site/
├── index.html              # 首页
├── products.html           # 产品集合页 / 分类筛选
├── oem.html                # OEM / 批发询盘页
├── case-studies.html       # 案例页
├── learn.html              # SEO内容页
├── assets/
│   ├── css/styles.css      # 全站样式
│   ├── js/main.js          # 移动菜单、筛选、表单演示、选择器
│   └── images/*.svg        # 原创Logo、产品图、场景图、案例图
└── README.md
```

## GitHub Pages 部署方式

1. 新建一个 GitHub 仓库，例如：`aerlune-airpurifier-site`
2. 把本文件夹内所有文件上传到仓库根目录
3. 进入 GitHub 仓库：Settings → Pages
4. Source 选择：Deploy from a branch
5. Branch 选择：`main` / root
6. 保存后等待 GitHub Pages 自动生成网址

## 后续上线前建议修改

- 把 AERLUNE 改成你的真实品牌名
- 替换邮箱、电话、政策页面、公司信息
- 把产品 CADR、噪音、适用面积、认证等改为真实检测数据
- 询盘表单需要接入 Formspree、Netlify Forms、Shopify、HubSpot 或你的CRM
- 如果涉及 H13 HEPA、CADR、CE、ETL、CARB、Energy Star 等认证宣称，请上传真实证书和报告

## 页面特点

- 响应式布局，手机端可用
- 无外部依赖，不需要安装 Node.js
- 原创 SVG 素材，上传后不依赖第三方图片链接
- 包含首页、产品页、OEM页、案例页、内容页
- 适合 GitHub Pages、Netlify、Vercel、Cloudflare Pages 静态部署


## Included generated image
- `generated-images/aerlune-homepage-full-preview.png`: full-page generated website visual preview.
- `assets/images/aerlune-homepage-full-preview.png`: same image duplicated inside assets for convenience.


## v2 updates
- Added new generated product images for LUNA Mini, S1, Pro 600, H2, lineup, living room, about page, and contact page.
- Added `about.html`, `contact.html`, and `faq.html`.
- Updated existing pages to use the new generated images.


## v3 update
- Reorganized package and included the additional requested image as `assets/images/user-added-image.png` and `generated-images/user-added-image.png`.
- Added a featured section in `products.html` using the added image.
- Further expanded the About Us, Contact Us, and FAQ pages with more complete supporting sections.


## v4 update
- Added standalone product detail pages:
  - `product-luna-mini.html`
  - `product-s1.html`
  - `product-pro-600.html`
  - `product-h2.html`
  - `product-detail.html` as a flagship template alias
- Added support and policy pages:
  - `support.html`
  - `warranty.html`
  - `shipping-policy.html`
  - `returns-policy.html`
- Updated product collection buttons to link to product detail pages.
- Updated footer and sitemap with the new pages.

### Important launch note
Performance values are no longer presented as unsupported final AERLUNE specifications. Product pages now use public competitor benchmark data and mark AERLUNE final lab results as pending factory verification.


## v6 SEO + Premium Brand Upgrade
- Added premium SEO stylesheet: `assets/css/seo-premium.css`.
- Added canonical tags, Open Graph tags, robots meta and JSON-LD schema to key pages.
- Fixed robots.txt and sitemap.xml to use the GitHub Pages domain instead of placeholder domains.
- Added high-intent SEO landing pages: allergy, pet, smoke, bedroom, large room, HEPA guide, replacement filter guide and OEM private label page.
- Rebuilt `learn.html` as a content hub with internal links to SEO articles.
- Removed low-end/internal product gallery and download-image sections from product listing page.
- Added `llms.txt` for AI-search/AEO context.
- Softened unverified performance wording and added notes to replace benchmark specs with verified AERLUNE product data before launch.


## v7 real benchmark data update
- Removed unsupported placeholder product-performance claims from core product pages.
- Added `verified-data.html` and `assets/data/air-purifier-real-benchmark-data.json`.
- Product pages now show public benchmark data from named market models and explicitly separate benchmark data from final AERLUNE lab claims.
- Added real-data internal links for SEO and trust.


## v8 Premium Growth + SEO update
See `README-V8-GROWTH-SEO.md` for the full upgrade list.


## V9 Lead Capture Update
- Added real inquiry forms using FormSubmit endpoint: `https://formsubmit.co/cjb18244889592@gmail.com`.
- Added `inquiry.html` and `thank-you.html`.
- Added lead capture sections on home, contact, OEM, and product detail pages.
- Added floating inquiry CTA across pages.
- Form submissions include source page and UTM fields.
- Important: submit the form once after deployment and confirm the email activation message in `cjb18244889592@gmail.com` inbox.

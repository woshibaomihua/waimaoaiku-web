# AERLUNE V5 Layout Fix

本版本解决的问题：

1. 原包里有 `assets/images/aerlune-homepage-full-preview.png`，它是“整页视觉预览图”，不是实际网页布局。
2. 原 `index.html` 没有按这张预览图还原布局，而是使用了另一套 hero/card/section 结构。
3. 首页产品卡片已改为进入单独产品详情页：
   - product-luna-mini.html
   - product-s1.html
   - product-pro-600.html
   - product-h2.html
4. 新增 `assets/css/homepage-v5.css`，专门用于首页高保真还原参考图的排版。
5. 从设计预览图中切出了部分真实视觉素材，避免首页继续大量使用占位 SVG。

部署方式：
- 将本文件夹所有内容上传到 GitHub 仓库根目录。
- GitHub Pages 设置：Deploy from branch -> main -> /root。
- 访问：https://你的用户名.github.io/aerlune-airpurifier-site/

注意：
- 首页已尽量贴近参考图，但正式商用仍建议替换成真实拍摄图与真实产品参数。

# waimaoaiku.com 项目规划书 (脚本付费系统)

## 1. 业务目标
通过极简的独立站系统，向外贸从业者/开发者售卖自动化脚本（Python, JavaScript, PowerShell等）。
- **支付方式**: 微信、支付宝 (通过 Lemon Squeezy 处理)。
- **交付方式**: 支付成功后即时显示完整脚本内容 + 下载链接。

## 2. 技术架构
- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI
- **Payment**: [Lemon Squeezy](https://www.lemonsqueezy.com/)
- **Storage**: Cloudflare R2 (托管脚本 zip/py 文件)
- **Deployment**: Vercel

## 3. 功能模块
- [ ] **Home Page**: 脚本搜索与分类列表。
- [ ] **Script Detail**:
    - 代码高亮预览 (使用 `shiki`)。
    - 购买按钮 (Lemon Squeezy Overlay)。
- [ ] **Webhook Listener**: 接收 Lemon Squeezy 支付成功回调。
- [ ] **Delivery Page**: 支付成功后的跳转页，展示完整代码。

## 4. 交付清单
- [ ] Next.js 脚手架初始化。
- [ ] 模拟脚本数据集 (data/scripts.ts)。
- [ ] Lemon Squeezy Checkout 组件。
- [ ] Webhook API Route。

---
Created by Accio Work AI Assistant.

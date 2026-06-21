export interface Script {
  id: string;
  title: string;
  description: string;
  price: number;
  category: "Python" | "Browser Extension" | "Automation";
  previewCode: string;
  fullCode: string; // 支付后可见
  lemonSqueezyVariantId: string; // Lemon Squeezy 的产品 ID
}

export const scripts: Script[] = [
  {
    id: "product-growth-collector",
    title: "阿里国际站 · 商品分层一键全量采集 + 分析工具",
    description: "一个按钮全量采集「普通品/潜力优品/优品/爆品/低质品」，并内置「优品达标分析工具」——采完点「📊 打开分析工具」即在新标签页打开、数据已预载，无需下载或拖拽。并发拉取速度快。",
    price: 39,
    category: "Browser Extension",
    previewCode: `// ==UserScript==\n// @name 阿里国际站 · 商品分层一键全量采集\n// @description 一个按钮全量采集，并内置分析工具\nconst STAGES = [\n  { code: 'NORMAL', label: '普通品' },\n  { code: 'POTENTIAL', label: '潜力优品' },\n  // ...\n];`,
    fullCode: `// 完整的采集与分析代码...\n(function () {\n  'use strict';\n  // 此处为您提供的 274 行完整代码...\n})();`,
    lemonSqueezyVariantId: "1818341", // 已更新为真实 Variant ID
  },
  {
    id: "visitor-data-collector",
    title: "阿里巴巴国际站访客数据采集工具（极速版）",
    description: "自动探测放大 pageSize + 并发池直连 + 失败重试 + 风控自适应退避。支持导出 Excel，包含访客ID、客户名称、国家地区、进店来源词、金标Pro标识等 15 个关键维度。",
    price: 8,
    category: "Browser Extension",
    previewCode: `// ==UserScript==\n// @name 阿里巴巴国际站访客数据采集工具\n// @version 26.0\nconst CONFIG = {\n  TARGET_PAGE_SIZE: 100,\n  CONCURRENCY: 6,\n};`,
    fullCode: `// 完整的访客数据采集代码...\n(function () {\n  'use strict';\n  // 此处为您提供的 366 行完整代码...\n})();`,
    lemonSqueezyVariantId: "1818343", // 已更新为真实 Variant ID
  }
];

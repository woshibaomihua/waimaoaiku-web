"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    createLemonSqueezy: () => void;
    LemonSqueezy: any;
  }
}

export default function BuyButton({ variantId }: { variantId: string }) {
  useEffect(() => {
    // 加载 Lemon Squeezy 的脚本
    const script = document.createElement("script");
    script.src = "https://app.lemonsqueezy.com/js/lemon.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.createLemonSqueezy) {
        window.createLemonSqueezy();
      }
    };
  }, []);

  const handleBuy = () => {
    // 这里跳转到你的 Lemon Squeezy Checkout 链接
    // 实际使用时，variantId 对应你后台创建的产品
    const checkoutUrl = `https://waimaoaiku.lemonsqueezy.com/checkout/buy/${variantId}?embed=1`;
    
    if (window.LemonSqueezy) {
      window.LemonSqueezy.Url.Open(checkoutUrl);
    } else {
      window.open(checkoutUrl, "_blank");
    }
  };

  return (
    <button
      onClick={handleBuy}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
    >
      立即支付并解锁脚本
    </button>
  );
}

"use client";

import { useEffect } from "react";

export default function BuyButton({ url }: { url: string }) {
  const handleBuy = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleBuy}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:scale-105"
    >
      立即通过支付宝/信用卡购买
    </button>
  );
}

import { scripts } from "@/lib/data";
import BuyButton from "@/components/BuyButton";
import { notFound } from "next/navigation";

export default function ScriptDetail({ params }: { params: { id: string } }) {
  const script = scripts.find((s) => s.id === params.id);

  if (!script) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {script.category}
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900 mt-2">{script.title}</h1>
            </div>
            <div className="text-2xl font-mono font-bold text-green-600">
              ${script.price}
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {script.description}
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">代码片段预览 (付费后查看完整版)</h3>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed shadow-inner">
              <code>{script.previewCode}</code>
            </pre>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">准备好自动化你的外贸流程了吗？</h2>
            <BuyButton variantId={script.lemonSqueezyVariantId} />
            <p className="mt-4 text-xs text-gray-400 text-center">
              支持微信/支付宝付款。支付成功后将立即解锁完整代码及下载链接。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

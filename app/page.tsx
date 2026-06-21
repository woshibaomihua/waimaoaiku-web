import { scripts } from "@/lib/data";
import ScriptCard from "@/components/ScriptCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            外贸 AI 酷 <span className="text-blue-600">脚本库</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            专为外贸从业者设计的自动化脚本，一键采集、批量分析，让你的外贸开发效率提升 10 倍。
          </p>
          <div className="flex justify-center gap-4 text-sm font-medium text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              即买即用
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              微信/支付宝支持
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              代码永久可查
            </div>
          </div>
        </div>
      </div>

      {/* Script Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scripts.map((script) => (
            <ScriptCard key={script.id} script={script} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          © 2026 waimaoaiku.com · 专注外贸自动化工具
        </div>
      </footer>
    </main>
  );
}

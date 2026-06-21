import { scripts } from "@/lib/data";
import ScriptCard from "@/components/ScriptCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              把你的外贸流程<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">全部自动化</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              外贸AI酷不仅仅是脚本库，更是你的自动化实战手册。购买脚本，获取配套视频教程，让繁琐的工作一去不复返。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#scripts" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all">
                浏览脚本库
              </a>
              <a href="#learning" className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:border-gray-900 transition-all">
                了解学习路径
              </a>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">极速提效</h3>
              <p className="text-gray-500">所有脚本均经过真实外贸场景实测，一键采集，无需手动操作。</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">学习手册</h3>
              <p className="text-gray-500">每个付费脚本都附赠详细的部署文档和视频教程，包教包会。</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">安全合规</h3>
              <p className="text-gray-500">代码本地运行，不存储任何敏感数据，保护您的客户隐私。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Script Grid */}
      <section className="py-24" id="scripts">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">精选自动化脚本</h2>
            <div className="h-1 w-20 bg-blue-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scripts.map((script) => (
              <ScriptCard key={script.id} script={script} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Placeholder */}
      <section className="py-24 bg-gray-900 text-white" id="learning">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8 italic">外贸自动化零基础学习路径</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-bold">环境搭建</h4>
                    <p className="text-gray-400 text-sm">安装 Python 与浏览器扩展，配置国内加速镜像。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-bold">数据采集实战</h4>
                    <p className="text-gray-400 text-sm">学习如何使用我们的脚本采集访客与产品数据。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-bold">AI 智能回复</h4>
                    <p className="text-gray-400 text-sm">配合 GPT-4o 自动化回复询盘，24小时在线抢单。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800 p-8 rounded-3xl border border-gray-700">
              <p className="text-blue-400 font-mono text-sm mb-4">$ learning-progress --status</p>
              <h3 className="text-2xl font-bold mb-6">即将推出：外贸获客情报大师班</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                正在录制 12 节系统课程，从 LinkedIn 自动开发到独立站自动化 SEO。现在购买任一脚本，即享课程 5 折预购优惠。
              </p>
              <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors">
                订阅上线提醒
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8 font-bold text-gray-900">waimaoaiku.com</div>
          <div className="text-gray-400 text-sm">
            专注外贸效率工具与自动化技术实战。让 AI 真正为你的业绩服务。
          </div>
        </div>
      </footer>
    </main>
  );
}

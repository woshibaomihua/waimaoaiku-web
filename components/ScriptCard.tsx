import Link from "next/link";
import { Script } from "@/lib/data";

export default function ScriptCard({ script }: { script: Script }) {
  return (
    <Link href={`/scripts/${script.id}`}>
      <div className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            {script.category}
          </span>
          <span className="text-lg font-mono font-bold text-green-600">
            ${script.price}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {script.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
          {script.description}
        </p>
        
        <div className="flex items-center text-blue-600 text-sm font-semibold">
          查看详情并购买
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

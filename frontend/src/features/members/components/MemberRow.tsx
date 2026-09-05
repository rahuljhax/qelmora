import Link from "next/link";
import { Edit3, Eye, UserX } from "lucide-react";

export default function MemberRow() {
    return (
        <tr className="hover:bg-slate-800/40 transition-colors">
            <td className="px-5 py-4 font-semibold text-slate-100 whitespace-nowrap">
                Rahul Jha
            </td>
            <td className="px-5 py-4 text-slate-400 whitespace-nowrap">
                rahuljha.189244@gmail.com
            </td>
            <td className="px-5 py-4 whitespace-nowrap">
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700/60 rounded-md">
                    Admin
                </span>
            </td>
            <td className="px-5 py-4 whitespace-nowrap text-right">
                <div className="flex items-center justify-end gap-2">
                    <Link
                        href={'/dashboard/members/edit/123'}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                    >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg transition-colors cursor-pointer"
                    >
                        <UserX className="w-3.5 h-3.5" />
                        <span>Deactivate</span>
                    </button>
                </div>
            </td>
        </tr>
    );
}
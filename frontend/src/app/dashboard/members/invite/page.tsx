import MemberForm from "@/features/members/components/MemberForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function page() {
    return (
        <div className="space-y-6">
            <Link
                href="/dashboard/members"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Members</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Invite Member</h1>
            <MemberForm />
        </div>
    );
}
'use client';
import Link from "next/link";
import MemberRow from "./MemberRow";
import { UserPlus, Search } from "lucide-react";
import { fetchMembersList } from "../services/members.service";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/shared/types/shared.type";

export default function MemberListing() {
    const fetchMembers = async () => {
        const response = await fetchMembersList();
        if (!response.success) {
            throw new Error(response.message)
        }
        return response.data
    }
    const { data: members = [], isPending, error } = useQuery({
        queryKey: ['members'],
        queryFn: fetchMembers
    })

    if (isPending) {
        return <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-slate-200"></div>
        </div>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                    <h1 className="text-xl font-bold text-slate-100 tracking-tight">Members</h1>
                    <p className="text-xs text-slate-400 mt-0.5">Manage organization members and their permission roles</p>
                </div>
                <Link
                    href={'/dashboard/members/invite'}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100"
                >
                    <UserPlus className="w-4 h-4" />
                    <span>Invite Member</span>
                </Link>
            </div>
            {members.length === 0 ?
                <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <p className="text-slate-400 text-sm">As of today, there are no active members.</p>
                </div> : <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-slate-800">
                        <div className="relative max-w-xs">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search member..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-300 border-collapse">
                            <thead className="bg-slate-950/70 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                <tr>
                                    <th className="px-5 py-3.5">Name</th>
                                    <th className="px-5 py-3.5">Email</th>
                                    <th className="px-5 py-3.5">Role</th>
                                    <th className="px-5 py-3.5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {
                                    members.map((member: User) => <MemberRow key={member.id} member={member} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>}

        </div>
    );
}

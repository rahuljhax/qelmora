import AcceptInviteForm from "@/features/auth/components/AcceptInviteForm";
import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 select-none">
            <div className="mb-8">
                <Link href="/" className="text-xl font-bold text-slate-100 tracking-tight">
                    Qelmora
                </Link>
            </div>
            <AcceptInviteForm />
        </div>
    );
};
export default page;
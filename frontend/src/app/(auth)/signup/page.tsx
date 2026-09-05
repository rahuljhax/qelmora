import SignupForm from "@/features/auth/components/SignupForm";
import Footer from "@/features/landing/components/Footer";
import Header from "@/features/landing/components/Header";

const page = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
            <Header />
            <main className="flex-1 flex items-center justify-center p-6 my-8">
                <SignupForm />
            </main>
            <Footer />
        </div>
    )
}
export default page;
import Footer from "@/features/landing/components/Footer";
import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-slate-800 selection:text-slate-100">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
export default Home;

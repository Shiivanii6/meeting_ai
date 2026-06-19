import Navbar from "../components/Navbar";
import Footer  from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
       
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Turn Meetings Into Action
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          AI-powered meeting summaries, tasks, and follow-ups.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>
      <Footer />
    </main>
  );
}
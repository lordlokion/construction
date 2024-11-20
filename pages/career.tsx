import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function CareersPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">To join our team send your updated resume on</h1>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-lg text-center">
            {" "}
            <a href="mailto:hr@omnamosiwai.com" className="text-orange-500 md:text-5xl   hover:underline">
              hr@omnamosiwai.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
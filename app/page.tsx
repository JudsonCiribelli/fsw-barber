import { Button } from "./_components/ui/button"
import Header from "./_components/Header"
import { Input } from "./_components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* HEADER*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, User!</h2>
        <p className="font-bold">Terça-feira, 06 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende com os melhores"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
export default Home

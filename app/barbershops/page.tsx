import BarbershopItem from "../_components/barbershop-item"
import Header from "../_components/Header"
import Search from "../_components/search"
import { db } from "../_lib/prisma"

interface BarberShopsPageParams {
  searchParams: {
    search?: string
  }
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageParams) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  })
  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershops) => (
            <BarbershopItem key={barbershops.id} barbershop={barbershops} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarberShopsPage

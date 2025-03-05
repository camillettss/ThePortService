import { prisma } from "@/lib/prisma"; // Importa Prisma

export async function GET(req) {
  try {
    console.log("e qui ce semo"); // Logga i dati prima di restituirli
    const { searchParams } = new URL(req.url);
    const date = new Date(searchParams.get("date")); // Prendiamo la data dalla query string

    if (!date) {
      return new Response(JSON.stringify({ error: "Data non valida" }), { status: 400 });
    }

    console.log("prima di rentalbooking");
    // Trova tutte le auto prenotate in quella data
    const bookedCars = await prisma.RentalBooking.findMany({
      where: { date },
      select: { carId: true }
    });

    const bookedCarIds = bookedCars.map(b => b.carId); // Estrarre solo gli ID delle auto prenotate

    console.log("prima di car")
    // Trova tutte le auto che NON sono tra quelle già prenotate
    const availableCars = await prisma.Car.findMany({
      where: {
        NOT: bookedCarIds.length > 0 ? { id: { in: bookedCarIds } } : {}
      }
    });

    console.log("Available Cars:", availableCars); // Logga i dati prima di restituirli

    return new Response(JSON.stringify(availableCars), { status: 200 });
  } catch (_error) {
    return new Response(JSON.stringify({ error: "Errore nel server "+_error }), { status: 500 });
  }
}

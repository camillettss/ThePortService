import { prisma } from "@/lib/prisma"; // Assicurati di avere Prisma configurato

export async function GET(req, { params }) {
  const { id } = params; // Prende l'ID dell'auto dalla URL

  try {
    const car = await prisma.car.findUnique({
      where: { id: parseInt(id) }, // Converte id in numero se è un intero
    });

    if (!car) {
      return new Response(JSON.stringify({ error: "Auto non trovata" }), { status: 404 });
    }

    return new Response(JSON.stringify(car), { status: 200 });
    
  } catch (error) {
    console.error("Errore nel recupero dell'auto:", error);
    return new Response(JSON.stringify({ error: "Errore interno" }), { status: 500 });
  }
}

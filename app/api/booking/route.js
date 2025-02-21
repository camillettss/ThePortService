import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const formattedDate = new Date(`${body.date}T${body.time}:00.000Z`); // ISO-8601 format

        const existingBooking = await prisma.booking.findFirst({
            where: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                date: new Date(`${body.date}T${body.time}:00.000Z`)
            }
        });

        if (existingBooking) {
            return Response.json({ error: "Esiste già una prenotazione per questa data!" }, { status: 400 });
        }

        
        const booking = await prisma.booking.create({
            data: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                date: formattedDate, // Dio cane finalmente ho capito l'errore
                time: body.time,
                details: body.details
            }
        });

        return Response.json({ message: "Prenotazione salvata", booking });
    } catch (error) {
        console.error("Errore Prisma:", error);  // Logga l'errore nella console
        return Response.json({ error: "Errore nel salvataggio " + error.message }, { status: 500 });
    }
}

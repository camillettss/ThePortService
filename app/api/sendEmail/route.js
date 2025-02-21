import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, date, time, details } = body;

        const response = await resend.emails.send({
            from: 'onboarding@resend.dev', // Cambia con il tuo dominio
            to: 'ceccocamilletti3@gmail.com', // La mail della reception
            subject: 'Nuova prenotazione ricevuta',
            html: `
                <h2>Nuova prenotazione ricevuta</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefono:</strong> ${phone}</p>
                <p><strong>Data:</strong> ${date}</p>
                <p><strong>Ora:</strong> ${time}</p>
                <p><strong>Dettagli:</strong> ${details}</p>
            `,
        });

        return Response.json({ success: true, response });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: error.message });
    }
}

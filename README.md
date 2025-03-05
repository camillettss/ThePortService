# The Port Service
## Website's code
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Ho scritto questo codice per ThePortService s.r.l. , tutti i diritti di questo codice sono riservati all'autore, Francesco Camilletti.

## Funzionalità
L'azienda offre questi servizi:
- Noleggio veicoli
- NCC
- Deposito bagagli
- Lavanderia e Sartoria

ovviamente, le prenotazioni di questi servizi sono differenti quindi ho creato diversi form, uno per ogni servizio.
una cosa che tutti hanno in comune è la data e una referenza al cliente. innanzitutto chiederemo nome, cognome e data.

### Generic Form
un rettangolino in overlay che chiede delle informazioni di base, le useremo come filtri durante la ricerca nel database.
quando viene cliccato il tasto "submit" si attiva una href per la pagina di ricerca passata come prop.

### Book a Rental - Form
qui è possibile prenotare un veicolo. Innanzitutto bisogna scegliere quale.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
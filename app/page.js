import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bike, Calendar, Car, MapPin, Plane, Ship } from "lucide-react"
import Link from "next/link"

export default function RentalServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Ship className="h-6 w-6" />
          <span className="sr-only">Acme Rentals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Servizi
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Prezzi
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Chi Siamo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contatti
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Esplora il Mondo con Facilità
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Noleggia auto, bici e molto altro. Viaggia senza pensieri con i nostri servizi di trasporto
                    affidabili.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    Prenota Ora
                  </Button>
                  <Button
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    variant="outline"
                  >
                    Scopri di Più
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center space-y-4">
                <div className="rounded-lg border bg-gray-100 p-6 dark:bg-gray-800">
                  <h2 className="text-xl font-bold mb-4">Trova il Tuo Veicolo</h2>
                  <form className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo di Veicolo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectItem value="bici">Bicicletta</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex space-x-4">
                      <Input placeholder="Data di Inizio" type="date" />
                      <Input placeholder="Data di Fine" type="date" />
                    </div>
                    <Input placeholder="Luogo di Ritiro" />
                    <Button className="w-full" type="submit">
                      Cerca Disponibilità
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">I Nostri Servizi</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-950">
                <Car className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Noleggio Auto</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Ampia selezione di auto per ogni esigenza, dai viaggi di lavoro alle vacanze in famiglia.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-950">
                <Bike className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Noleggio Bici</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Esplora la città o la natura con le nostre biciclette di alta qualità.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-950">
                <Plane className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Servizi di Trasporto</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Trasferimenti aeroportuali e servizi di navetta per viaggiare senza stress.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Perché Sceglierci</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Ampia Copertura</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Presenti in numerose località per servirti ovunque tu sia.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Calendar className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Prenotazione Flessibile</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Modifica o cancella le tue prenotazioni con facilità.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Ship className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Veicoli di Qualità</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Flotta moderna e ben mantenuta per la tua sicurezza e comfort.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Plane className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Assistenza 24/7</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Supporto clienti sempre disponibile per ogni tua necessità.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pronto a Partire?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Prenota ora il tuo veicolo e inizia la tua prossima avventura con noi.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Inserisci la tua email" type="email" />
                  <Button type="submit">Iscriviti</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Iscriviti per ricevere le nostre ultime offerte.{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Termini & Condizioni
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Rentals. Tutti i diritti riservati.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termini di Servizio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


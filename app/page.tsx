import Link from "next/link";
import Image from "next/image"
import concertLogo from "@/assets/images/concert.jpg";
import foireLogo from "@/assets/images/foire.jpg";

export default function Home() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] p-8 sm:p-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Explorez Nos Événements à Venir
        </h1>
        <p className="text-lg text-gray-700 text-center sm:text-left max-w-3xl">
          Découvrez les moments inoubliables que nous avons préparés pour vous.
          Que vous soyez un amateur de musique ou passionné par les expositions
          locales, nos événements répondent à tous les goûts. Cliquez sur un
          événement pour plus de détails !
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Événement : Concert */}
          <Link href="https://event.eventozor.com/9GTYHXMBN3/">
            <div className="relative group w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={concertLogo}
                alt="Concert"
                width={100}
                height={20}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">Concert</h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Concert
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rejoignez-nous pour une soirée musicale extraordinaire avec des
              artistes de renom. Une expérience sonore et visuelle que vous ne
              voudrez pas manquer !
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Cliquez pour plus d informations.
            </p>
          </div>

          {/* Événement : Foire */}
          <Link href="https://event.eventozor.com/9GTYHXMBN3/">
            <div className="relative group w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={foireLogo}
                alt="Foire"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">Ndole city</h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Ndole city
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Plongez dans une ambiance conviviale et découvrez des produits
              locaux, des activités pour toute la famille et bien plus encore.
              Une occasion idéale pour se détendre et explorer.
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Cliquez pour en savoir plus.
            </p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex flex-col items-center justify-center gap-2 mt-16">
        <p className="text-sm text-gray-500">
          © 2024 Événements. Tous droits réservés.
        </p>
        <p className="text-sm text-gray-500">
          Besoin d aide ? Contactez-nous via notre page{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}


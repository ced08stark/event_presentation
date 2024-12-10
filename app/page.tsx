import Link from "next/link";
import Image from "next/image"
import concertLogo from "@/assets/images/concert.jpg";
//import foireLogo from "@/assets/images/foire.jpg";
import btob from "@/assets/images/btob.jpg";
import salonLogo from "@/assets/images/salon.jpeg";
import forumLogo from "@/assets/images/forum.jpeg";
import exposantLogo from "@/assets/images/exposant.jpg";

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
          <Link href="https://event.eventozor.com/RTWPUGKHK3/">
            <div className="relative group w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={exposantLogo}
                alt="Concert"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-xl text-center font-bold">
                  FORUM NDOLLE CITY{" "}
                </h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              FORUM NDOLLE CITY
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Découvrez en exclusivité la maquette de la ville en vous
              inscrivant gratuitement.
            </p>
            <p className="text-sm text-blue-600 mt-2 cursor-pointer">
              Cliquez pour plus d informations.
            </p>
          </div>
          <Link href="https://event.eventozor.com/9GTYHXMBN3/">
            <div className="relative group w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={salonLogo}
                alt="Concert"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-xl text-center font-bold">
                  RENCONTRE B2B{" "}
                </h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              RENCONTRE B2B
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Entreprise, saisissez l{"'"}opportunité d{"'"}affaire avec Ndolle
              City via le processus suivant :
              <br />
              <ul className="list-disc pl-5">
                <li>Inscrivez-vous</li>
                <li>Choisissez le thème dans la rubrique « Entreprises »</li>
                <li>
                  Payez votre inscription et vous recevrez votre pass pour le
                  rendez-vous
                </li>
              </ul>
            </p>

            <p className="text-sm text-blue-600 mt-2 cursor-pointer">
              Cliquez pour plus d informations.
            </p>
          </div>
          {/* Événement : Foire */}
          <Link href="https://event.eventozor.com/4TT236AFJF/">
            <div className="relative group w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={forumLogo}
                alt="Concert"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-center text-xl font-bold">
                  ESPACE EXPOSANTS
                </h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              ESPACE EXPOSANTS
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Profitez de notre vitrine pour promouvoir votre entreprise,
              choisissez la formule qui vous convient et inscrivez-vous<br/> nous
              nous chargeons de vous recontacter rapidement.
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Cliquez pour plus d informations.
            </p>
          </div>
          <Link href="https://event.eventozor.com/MZ5RNVWAEM/ ">
            <div className="relative group w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={btob}
                alt="Foire"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-xl text-center font-bold">
                  RECHERCHE D{"'"}EMPLOI
                </h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              RECHERCHE D{"'"}EMPLOI
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rejoignez nous et postulez pour un emploi chez impex trading sarl.
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Cliquez pour en savoir plus.
            </p>
          </div>

          {/* Événement : Concert */}
          <Link href="https://event.eventozor.com/MTAAKEQ73A/">
            <div className="relative group w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={concertLogo}
                alt="Concert"
                width={600}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-colors duration-500 flex items-center justify-center">
                <h2 className="text-white text-center text-xl font-bold">
                  CONCERT NDOLLE CITY
                </h2>
              </div>
            </div>
          </Link>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              CONCERT NDOLLE CITY
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Soyez parmi les 1000 premiers inscrits pour bénéficier d{"'"}une
              place gratuite. Au dela inscrivez-vous et obtenez votre place pour
              100 XAF.
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Cliquez pour plus d informations.
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


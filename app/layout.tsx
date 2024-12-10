"use client"
import { useState } from "react";
import Image from "next/image";
//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import concertLogo from "@/assets/images/logo.jpg";

// Importation des polices locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Métadonnées pour la page


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        {/* Ajout d'animations de chargement */}
        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            body {
              animation: fadeIn 0.8s ease-out;
            }
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-800 dark:text-gray-200 min-h-screen`}
      >
        {/* Contexte visuel de la page */}
        <div className="relative overflow-hidden">
          {/* Barre de navigation */}
          <nav className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
              {/* Logo */}

              <div className="text-2xl flex flex-row items-center space-x-2 font-bold">
                <Image
                  src={concertLogo}
                  alt="Concert"
                  width={50}
                  height={50}
                  className=""
                />
                <a href="/">NDOLE CITY</a>
              </div>

              {/* Liens de navigation (large écran) */}
              <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-gray-400">
                  Accueil
                </a>
                <a href="/" className="hover:text-gray-400">
                  Événements
                </a>
                <a
                  href="https://grandimpextrading.com/"
                  className="hover:text-gray-400"
                >
                  Contact
                </a>
              </div>

              {/* Menu Hamburger (petit écran) */}
              <button
                className="md:hidden flex items-center focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Menu déroulant (petit écran) */}
            {menuOpen && (
              <div className="md:hidden bg-gray-700">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm hover:bg-gray-600"
                >
                  Accueil
                </a>
                {/* <a
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-gray-600"
                >
                  À propos
                </a> */}
                <a
                  href="/"
                  className="block px-4 py-2 text-sm hover:bg-gray-600"
                >
                  Événements
                </a>
                <a
                  href="https://grandimpextrading.com/"
                  className="block px-4 py-2 text-sm hover:bg-gray-600"
                >
                  Contact
                </a>
              </div>
            )}
          </nav>

          {/* Contenu principal */}
          <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}

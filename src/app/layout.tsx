import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClimaPro - Instalação e Manutenção de Ar-Condicionado",
  description:
    "Especialistas em climatização: instalação, manutenção e limpeza de ar-condicionado residencial e comercial. Atendemos com agilidade, qualidade e conforto térmico garantido.",
  keywords: [
    "climatização",
    "ar-condicionado",
    "instalação de ar-condicionado",
    "manutenção de ar-condicionado",
    "limpeza de ar-condicionado",
    "climatização residencial",
    "climatização comercial",
    "conforto térmico",
    "serviço de climatização",
  ],
  authors: [{ name: "ClimaPro" }],
  creator: "ClimaPro",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

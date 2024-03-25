import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import "../globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-sourceSerif4",
});

const locales = ["en", "de"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} className={`${sourceSerif4.variable}`}>
      <body className="font-body">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../app/styles/styles.css";
import "../app/styles/globals.css";
import "../app/styles/Home.module.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Daniel Tolentino",
  description: "Portfólio de Daniel Tolentino, desenvolvedor web",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <>
      <html lang="pt-BR">
        <body>
          <NavBar />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}

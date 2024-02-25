import { Analytics } from "@vercel/analytics/react";
import "../../styles.css";
import NavBar from "../../components/NavBar";

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
      <NavBar />
      <body>{children}</body>
      <Analytics />
    </>
  );
}

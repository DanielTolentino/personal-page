import "../../styles.css";

export const metadata = {
  title: "Daniel Tolentino",
  description: "Portfólio de Daniel Tolentino, desenvolvedor web",
};

export default function About({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return <>{children}</>;
}

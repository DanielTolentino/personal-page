import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslations } from "next-intl";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const t = useTranslations("NavBar");

  return (
    <div className={styles.main}>
      <div className={styles.textrow}>
        <Link
          href="/"
          className={currentRoute === "/" ? styles.active : styles.a}>
          <h5 className={styles.title}>{t("home")}</h5>
        </Link>
        <Link
          className={styles.a}
          href="https://blog.danieltolentino.tech"
          target={"_blank"}>
          <h5 className={styles.title}>
            Blog{" "}
            <span className={styles.svg}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"></path>
              </svg>
            </span>
          </h5>
        </Link>
        <Link
          className={currentRoute === "/projects" ? styles.active : styles.a}
          href="/projects">
          <h5 className={styles.title}>{t("projects")}</h5>
        </Link>
        <Link
          className={currentRoute === "/about" ? styles.active : styles.a}
          href="/about">
          <h5 className={styles.title}>{t("about")}</h5>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  };
}

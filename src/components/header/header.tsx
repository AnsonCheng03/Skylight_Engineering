import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <nav class={styles.nav}>
      <input type="checkbox" class={styles.hiddenCheckbox} />
      <div class={styles.hamburger}>
        <div class={styles.bar}></div>
      </div>
      <a href="/">
        <h1 class={styles.icon}>Skylight</h1>
      </a>
      <div class={styles.blur}></div>
      <ul class={styles.menu}>
        <li class={styles.menuItem}>
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "/"
                : "/Skylight_Engineering"
            }
            class={styles.link}
          >
            首頁
          </a>
        </li>
        <li class={styles.menuItem}>
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "/about-us"
                : "/Skylight_Engineering/about-us"
            }
            class={styles.link}
          >
            裝修案例
          </a>
        </li>
        <li class={styles.menuItem}>
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "/contact"
                : "/Skylight_Engineering/contact"
            }
            class={styles.link}
          >
            聯絡我們
          </a>
        </li>
      </ul>
    </nav>
  );
});

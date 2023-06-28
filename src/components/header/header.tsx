import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <nav class={styles.nav}>
      <input type="checkbox" class={styles.hiddenCheckbox} />
      <div class={styles.hamburger}>
        <div class={styles.bar}></div>
      </div>
      <Link href="/">
        <h1 class={styles.icon}>Skylight</h1>
      </Link>
      <div class={styles.blur}></div>
      <ul class={styles.menu}>
        <li class={styles.menuItem}>
          <Link href={"/Skylight_Engineering/"} class={styles.link}>
            首頁
          </Link>
        </li>
        <li class={styles.menuItem}>
          <Link href={"/Skylight_Engineering/example"} class={styles.link}>
            裝修案例
          </Link>
        </li>
        <li class={styles.menuItem}>
          <Link href={"/Skylight_Engineering/contact"} class={styles.link}>
            聯絡我們
          </Link>
        </li>
      </ul>
    </nav>
  );
});

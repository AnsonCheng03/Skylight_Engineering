import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <h3 class={styles.title}>天晴工程有限公司</h3>
      <hr class={styles.line} />
      <div class={styles.extrainfo}>
        <div>
          <p class={styles.subtitle}>九龍官塘觀塘鴻圖道42號華寶中心9樓901室</p>
        </div>
        <div>
          <p class={styles.subtitle}>
            © 2023 Skylight Engineering (HK) Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

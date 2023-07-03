import { component$ } from "@builder.io/qwik";
import { BsTelephone, BsWhatsapp, BsInstagram } from "@qwikest/icons/bootstrap";
import { GoMail24 } from "@qwikest/icons/octicons";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <h3 class={styles.title}>天晴工程有限公司</h3>
        <div class={styles.icons}>
          <BsTelephone
            class={styles.icon}
            onClick$={() => {
              window.open("tel:+85290732506", "_blank");
            }}
          />
          <BsWhatsapp
            class={styles.icon}
            onClick$={() => {
              window.open("https://wa.me/85290732506", "_blank");
            }}
          />
          <GoMail24
            class={styles.icon}
            onClick$={() => {
              window.open(
                "mailto:contact@skylightengineering.com.hk",
                "_blank"
              );
            }}
          />
          <BsInstagram
            class={styles.icon}
            onClick$={() => {
              window.open(
                "https://www.instagram.com/skylight_engg_901/",
                "_blank"
              );
            }}
          />
        </div>
      </div>
      <hr class={styles.line} />
      <div class={styles.extraInfo}>
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

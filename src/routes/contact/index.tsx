import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import coverImage from "./images/cover.jpg";
import styles from "./contact.module.css";

export default component$(() => {
  return (
    <>
      <section class={styles.banner}>
        <h2 class={styles.title}>聯絡我們</h2>
      </section>

      <section class="contacts">
        <img class={styles.cover} src={coverImage} />
        <div class={styles.contactContainer}>
          <div>
            <div>
              <h3 class={styles.contactMethodTitle}>電話</h3>
              <a href="tel:+85290732506">9073 2506</a>
            </div>
            <div>
              <h3 class={styles.contactMethodTitle}>電郵</h3>
              <p class={styles.contactMethod}>
                <a href="mailto:contact@skylightengineering.com.hk">
                  contact@skylightengineering.com.hk
                </a>
              </p>
            </div>
            <div>
              <h3 class={styles.contactMethodTitle}>Instagram</h3>
              <div>
                <a
                  href="https://www.instagram.com/skylight_engg_901/"
                  target="_blank"
                >
                  @skylight_engg_901
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 class={styles.contactMethodTitle}>地址</h3>
            <p>九龍官塘觀塘鴻圖道42號華寶中心9樓901室</p>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.451576549996!2d114.21059257396709!3d22.311569774854092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040146068751a1%3A0xf453cc7260f035b4!2z6KeA5aGY6bS75ZyW6YGTNDLomZ_oj6_lr7bkuK3lv4M!5e0!3m2!1szh-TW!2shk!4v1685814816082!5m2!1szh-TW!2shk"
                loading="lazy"
                class={styles.mapFrame}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

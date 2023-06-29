import { component$ } from "@builder.io/qwik";
import icon from "./whatsapp.png";
import styles from "./floatingContact.module.css";

export default component$(() => {
  return (
    <div class={styles.contactFloat}>
      <div class={styles.whatsapp}>
        <a href="https://wa.me/85290732506" target="_blank">
          <img src={icon} alt="whatsapp" width={35} height={35} />
        </a>
      </div>
    </div>
  );
});

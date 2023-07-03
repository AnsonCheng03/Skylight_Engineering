import { component$ } from "@builder.io/qwik";
import { BsWhatsapp } from "@qwikest/icons/bootstrap";
import styles from "./floatingContact.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={styles.contactFloat}>
      <div class={styles.whatsapp}>
        <Link href="https://wa.me/85290732506" target="_blank">
          {/* <img src={icon} alt="whatsapp" width={35} height={35} /> */}
          <BsWhatsapp class={styles.icon} />
        </Link>
      </div>
    </div>
  );
});

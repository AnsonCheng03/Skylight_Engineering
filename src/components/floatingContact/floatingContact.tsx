import { component$ } from "@builder.io/qwik";
import { SiWhatsapp } from "@qwikest/icons/simpleicons";
import styles from "./floatingContact.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={styles.contactFloat}>
      <div class={styles.whatsapp}>
        <Link href="https://wa.me/85290732506" target="_blank">
          <SiWhatsapp class={styles.icon} />
        </Link>
      </div>
    </div>
  );
});

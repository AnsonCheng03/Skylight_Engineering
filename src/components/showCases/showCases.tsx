import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./showCases.module.css";
import SelectCase from "./selectCase/selectCase";
import DisplayCase from "./displayCase/displayCase";

export default component$(
  ({ photos, type, name, fullScreenSlideshow }: any) => {
    const activeType = useSignal<string>(type || photos.value[0]?.type);

    useVisibleTask$(({ track }: any) => {
      track(() => {
        photos.value;
      });

      activeType.value = type || photos.value[0]?.type;
    });

    return (
      <section class={styles.cases}>
        <SelectCase photos={photos} activeType={activeType} name={name} />
        <DisplayCase
          photos={photos}
          activeType={activeType}
          fullScreenSlideshow={fullScreenSlideshow}
        />
      </section>
    );
  },
);

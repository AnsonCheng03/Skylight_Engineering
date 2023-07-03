import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import ShowCases from "~/components/showCases/showCases";
import SlideShow from "~/components/slideShow/slideShow";
import styles from "./example.module.css";

export default component$(() => {
  const location = useLocation();
  const type = location.url.searchParams.get("type");
  const name = location.url.searchParams.get("name");
  const fullScreenSlideshow = useSignal<string | null>(null);

  const imageSource = useSignal([]);

  const fetchImageSource = $(() => {
    return fetch(
      location.url.origin +
        "/Skylight_Engineering/Images.json" +
        "?t=" +
        Date.now(),
      { cache: "no-store" }
    );
  });

  useVisibleTask$(async () => {
    const res = await fetchImageSource();
    try {
      const data = await res.json();
      const modifiedData = data.map((item: any) => ({
        ...item,
        path: location.url.origin + "/Skylight_Engineering" + item.path,
      }));
      imageSource.value = modifiedData;
    } catch (error) {
      imageSource.value = [];
    }
  });

  return (
    <>
      <section class={styles.banner}>
        <h2 class={styles.h2}>裝修案例</h2>
        <p class={styles.tag}>{imageSource.value.length}</p>
      </section>

      <ShowCases
        photos={imageSource}
        type={type}
        name={name}
        fullScreenSlideshow={fullScreenSlideshow}
      />

      <SlideShow
        photos={imageSource}
        fullScreenSlideshow={fullScreenSlideshow}
      />
    </>
  );
});

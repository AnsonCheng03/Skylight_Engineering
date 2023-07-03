import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import ShowCases from "~/components/showCases/showCases";
import SlideShow from "~/components/slideShow/slideShow";
import styles from "./example.module.css";

export const useImageSource = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    requestEvent.url.origin + "/Skylight_Engineering/Images.json",
    { cache: "no-store" }
  );
  try {
    const data = await res.json();
    const modifiedData = data.map((item: any) => ({
      ...item,
      path: requestEvent.url.origin + "/Skylight_Engineering" + item.path,
    }));
    return modifiedData;
  } catch (error) {
    return [[]];
  }
});

export default component$(() => {
  const location = useLocation();
  const imageSource = useImageSource().value;
  const type = location.url.searchParams.get("type");
  const name = location.url.searchParams.get("name");
  const fullScreenSlideshow = useSignal<string | null>(null);

  return (
    <>
      <section class={styles.banner}>
        <h2 class={styles.h2}>裝修案例</h2>
        <p class={styles.tag}>{imageSource.length}</p>
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

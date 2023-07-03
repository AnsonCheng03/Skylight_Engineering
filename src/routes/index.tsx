/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";
import AboutUs from "~/components/about-us/aboutUs";
import Examples from "~/components/examples/examples";
import Hero from "~/components/hero/hero";

export default component$(() => {
  const location = useLocation();
  const imageSource = useSignal([[]]);

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
      imageSource.value = [[]];
    }
  });

  return (
    <>
      <Hero photos={imageSource} />
      <Examples photos={imageSource} />
      <AboutUs />
    </>
  );
});

export const head: DocumentHead = {
  title: "天晴工程有限公司",
  meta: [
    {
      name: "description",
      content: "天晴工程有限公司",
    },
  ],
};

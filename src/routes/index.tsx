/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import AboutUs from "~/components/about-us/aboutUs";
import Examples from "~/components/examples/examples";
import Hero from "~/components/hero/hero";

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
  const imageSource = useImageSource().value;

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

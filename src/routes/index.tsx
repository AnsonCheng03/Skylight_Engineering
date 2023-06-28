import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import imageSource from "~/Images.json";
import AboutUs from "~/components/about-us/aboutUs";
import Examples from "~/components/examples/examples";
import Hero from "~/components/hero/hero";

export default component$(() => {
  useTask$(() => {
    // if is in github pages, append the repo name to the image path
    if (process.env.NODE_ENV !== "development") {
      imageSource.forEach((image) => {
        image.path = "/Skylight_Engineering" + image.path;
      });
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

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

  console.log("imageSource", imageSource);
  return (
    <>
      <Hero photos={imageSource} />
      <Examples photos={imageSource} />
      <AboutUs />
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

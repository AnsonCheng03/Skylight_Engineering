import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import AboutUs from "~/components/about-us/aboutUs";
import Examples from "~/components/examples/examples";
import Hero from "~/components/hero/hero";

export const useImageSource = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    requestEvent.url.origin + "/Skylight_Engineering/Images.json"
  );
  const data = await res.json();

  return data;
});

export default component$(() => {
  const imageSource = useImageSource().value;

  useVisibleTask$(() => {
    // scroll to top when navigating to this page
    window.scrollTo(0, 0);
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

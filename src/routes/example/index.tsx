import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section class="banner">
        <h2>裝修案例</h2>
        <p class="tag"></p>
      </section>

      <section class="cases">
        <section class="select-case"></section>
        <section class="display-case"></section>
      </section>

      <div class="full-screen-slideshow">
        <div class="close-button">×</div>
        <div class="slideshow-container">
          <div class="slideshow"></div>
        </div>
      </div>
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

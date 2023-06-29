import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/header/header";
import FloatingContact from "~/components/floatingContact/floatingContact";
import Footer from "~/components/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
});

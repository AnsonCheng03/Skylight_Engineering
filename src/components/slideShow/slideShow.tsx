import { component$, $ } from "@builder.io/qwik";
import styles from "./slideShow.module.css";

export default component$(({ photos }: any) => {
  const displaySlideshow = $(() => {
    //Create full screen slideshow
    const fullScreenSlideshow = document.querySelector(
      ".full-screen-slideshow"
    );
    fullScreenSlideshow.style.display = "flex";

    //Add images to slideshow
    const slideshow = document.querySelector(".slideshow");
    slideshow.innerHTML = "";

    photo.Images.forEach((image) => {
      const img = document.createElement("img");
      img.src = photo.path + "/" + image;
      img.addEventListener("click", () => {
        if (img.classList.contains("active")) {
          //remove active class
          img.classList.remove("active");
          img.parentElement.classList.remove("active");
          //scroll to the photo
          // img.parentElement.scrollTo({
          //   top: img.offsetTop,
          //   left: 0,
          //   behavior: "smooth",
          // });
        } else {
          img.classList.add("active");
          img.parentElement.classList.add("active");
        }
      });
      slideshow.appendChild(img);
    });
  });

  const closeSlideshow = $(() => {
    //Hide full screen slideshow
    const fullScreenSlideshow = document.querySelector(
      ".full-screen-slideshow"
    );
    fullScreenSlideshow.style.display = "none";
  });

  return (
    <div class={styles.fullScreenSlideshow}>
      <div class={styles.closeButton} onClick$={closeSlideshow}>
        ×
      </div>
      <div class={styles.slideshowContainer}>
        <div class={styles.slideshow}></div>
      </div>
    </div>
  );
});

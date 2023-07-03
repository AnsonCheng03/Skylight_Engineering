import { component$, $ } from "@builder.io/qwik";
import styles from "./slideShow.module.css";

export default component$(({ photos, fullScreenSlideshow }: any) => {
  const closeSlideshow = $(() => {
    fullScreenSlideshow.value = null;
  });

  return (
    fullScreenSlideshow.value && (
      <div class={styles.fullScreenSlideshow}>
        <div class={styles.closeButton} onClick$={closeSlideshow}>
          ×
        </div>
        <div class={styles.slideshowContainer}>
          <div class={styles.slideshow}>
            {/* 
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
    */}
            {photos.forEach((photo: any) => {
              return (
                <div class={styles.slide}>
                  <img src={photo.path + "/" + photo.Images[0]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
});

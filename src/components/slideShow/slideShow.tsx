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
            {photos.map((photo: any) => {
              if (photo.name === fullScreenSlideshow.value)
                return photo.Images.map((image: any) => {
                  return (
                    <img
                      src={photo.path + "/" + image}
                      onClick$={() => {
                        //                       if (img.classList.contains("active")) {
                        //   //remove active class
                        //   img.classList.remove("active");
                        //   img.parentElement.classList.remove("active");
                        //   //scroll to the photo
                        //   // img.parentElement.scrollTo({
                        //   //   top: img.offsetTop,
                        //   //   left: 0,
                        //   //   behavior: "smooth",
                        //   // });
                        // } else {
                        //   img.classList.add("active");
                        //   img.parentElement.classList.add("active");
                        //                       }
                      }}
                    />
                  );
                });
            })}
          </div>
        </div>
      </div>
    )
  );
});

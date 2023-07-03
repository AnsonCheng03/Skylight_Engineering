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
                      key={image}
                      src={photo.path + "/" + image}
                      onClick$={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.classList.contains(styles.active)) {
                          //remove active class
                          target.classList.remove(styles.active);
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.remove(styles.active);
                            //scroll to the photo
                            // parent.scrollTo({
                            //   top: target.offsetTop,
                            //   left: 0,
                            //   behavior: "smooth",
                            // });
                          }
                        } else {
                          target.classList.add(styles.active);
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add(styles.active);
                          }
                        }
                      }}
                    />
                  );
                });
            })}
            })}
          </div>
        </div>
      </div>
    )
  );
});

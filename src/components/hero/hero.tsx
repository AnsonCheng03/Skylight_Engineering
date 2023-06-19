import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export default component$(({ photos }: any) => {
  return (
    <section class={styles.hero}>
      <div class={styles.heroSlideshow}>
        {photos.map((photo: any) => {
          return photo.Slideshow?.map((photoName: any) => {
            return (
              <div class={styles.heroSlideshowSlide} key={photoName}>
                <img src={photo.path + "/" + photoName} />
                aaa
              </div>
            );
          });
        })}
      </div>
      <div class={styles.heroSlideshowControls}>
        <div class={styles.heroSlideshowControlsDots}>
          {photos.map((photo: any) => {
            return photo.Slideshow?.map((photoName: any) => {
              return (
                <div
                  class={styles.heroSlideshowControlsDotsDot}
                  key={photoName}
                  onClick$={() => {
                    console.log("click");
                  }}
                ></div>
              );
            });
          })}
        </div>
      </div>
    </section>
  );
});

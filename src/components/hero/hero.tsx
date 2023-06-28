/* eslint-disable qwik/jsx-img */
import {
  $,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { BsPause, BsPlay } from "@qwikest/icons/bootstrap";
import styles from "./hero.module.css";

export default component$(({ photos }: any) => {
  const changingDot = useSignal(false);
  const autoplay = useSignal(false);
  const autoplayInterval = useSignal<any>(undefined);
  const aspectRatioStyle = useSignal(1);

  const images = useSignal<string[]>([]);

  useTask$(() => {
    photos.forEach((photo: any) => {
      photo.Slideshow.forEach((photoName: any) => {
        // path, isActive
        images.value.push(photo.path + "/" + photoName);
      });
    });
  });

  const update_dots = $(() => {
    const dots = document.querySelectorAll(".dot");
    //get the 3rd image
    const thirdImage = document.querySelector(".hero-slideshow")?.children[2];
    //get the id of the 3rd image
    const thirdImageId = thirdImage?.id;
    //remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove(styles.active);
    });
    //add active class to the dot with the same id as the 3rd image
    if (thirdImageId) dots[parseInt(thirdImageId)].classList.add(styles.active);
  });

  //slideshow controls
  const next_slide = $(() => {
    // move the first child in hero-slideshow to the last child
    const firstChild =
      document.querySelector(".hero-slideshow")?.firstElementChild;
    if (firstChild)
      document.querySelector(".hero-slideshow")?.appendChild(firstChild);

    update_dots();
  });

  const prev_slide = $(() => {
    // move the last child in hero-slideshow to the first child
    const firstChild =
      document.querySelector(".hero-slideshow")?.firstElementChild;
    const lastChild =
      document.querySelector(".hero-slideshow")?.lastElementChild;

    if (firstChild && lastChild)
      document
        .querySelector(".hero-slideshow")
        ?.insertBefore(lastChild, firstChild);
    update_dots();
  });

  // function start_autoplay() {
  const start_autoplay = $(() => {
    autoplay.value = true;
    //check if autoplay interval is already running
    if (typeof autoplayInterval.value !== "undefined")
      clearInterval(autoplayInterval.value);
    //start autoplay
    autoplayInterval.value = setInterval(next_slide, 3000);
  });

  const stop_autoplay = $(() => {
    autoplay.value = false;
    clearInterval(autoplayInterval.value);
  });

  const clickOnDots = $((dot: any) => {
    if (changingDot.value === true) return;
    changingDot.value = true;

    //pause autoplay
    stop_autoplay();

    // find the index of the dot that was clicked
    const dotId = Array.from(dot.parentElement.children).indexOf(dot);
    //get the id of the active dot
    const activeDot = document.querySelector(".dot.active");
    const activeDotId = Array.from(dot.parentElement.children).indexOf(
      activeDot
    );

    //if the dot that was clicked is the active dot, return
    if (dotId === activeDotId) return;

    //perform next_slide() as many times as the difference between the dotId and activeDotId
    const difference = dotId - activeDotId;
    for (let i = 0; i < Math.abs(difference); i++)
      setTimeout(difference > 0 ? next_slide : prev_slide, 300 * i);

    //restart autoplay and update changingDot
    setTimeout(() => {
      start_autoplay();
      changingDot.value = false;
    }, 300 * Math.abs(difference));
  });

  useVisibleTask$(() => {
    if (images.value[0] === undefined) return;
    const img = new Image();
    img.src = images.value[0];
    img.onload = () => {
      aspectRatioStyle.value = img.width / img.height;
    };

    if (images.value.length > 1) {
      update_dots();
      start_autoplay();
    }
  });

  return images.value.length > 0 ? (
    <section
      class={
        images.value.length === 1 ? [styles.hero, styles.single] : styles.hero
      }
    >
      <div
        class={[styles.heroSlideshow, "hero-slideshow"]}
        style={{
          aspectRatio: aspectRatioStyle.value,
        }}
      >
        {images.value.length === 1 ? (
          <img src={images.value[0]} alt={images.value[0]} />
        ) : (
          <>
            {[
              ...Array(
                images.value.length <= 4
                  ? Math.ceil(6 / images.value.length)
                  : 1
              ),
            ].map((_, repeatIndex) => {
              return images.value.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt={image}
                    id={index.toString()}
                    key={repeatIndex + index}
                    class={styles.heroSlideshowSlide}
                  />
                );
              });
            })}
          </>
        )}
      </div>
      <div class={styles.heroSlideshowControls}>
        <div class={styles.heroSlideshowControlsDotsContainer}>
          <div class={styles.heroSlideshowControlsDots}>
            {images.value.map((_, index) => {
              return (
                <div
                  class={
                    index === 2
                      ? [styles.dot, styles.active, "dot"]
                      : [styles.dot, "dot"]
                  }
                  key={index}
                  id={index.toString()}
                  onClick$={(e: any) => {
                    clickOnDots(e.target);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div
          class={styles.heroSlideshowControlsPlayButton}
          onClick$={() => {
            if (autoplay.value === false) start_autoplay();
            else stop_autoplay();
          }}
        >
          {autoplay.value === true ? <BsPause /> : <BsPlay />}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
});

/* eslint-disable qwik/jsx-img */
import type { CSSProperties } from "@builder.io/qwik";
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { BsPause, BsPlay } from "@qwikest/icons/bootstrap";
import styles from "./hero.module.css";

export default component$(({ photos }: any) => {
  const changingDot = useSignal(false);
  const autoplay = useSignal(false);
  const autoplayInterval = useSignal<any>(undefined);
  const aspectRatioStyle = useSignal(1);
  const xDown = useSignal<number | null>(null);
  const yDown = useSignal<number | null>(null);

  const images = useSignal([]);

  const update_dots = $(() => {
    const dots = document.querySelectorAll(`.${styles.dot}`);
    //get the 3rd image
    const thirdImage = document.querySelector(`.${styles.heroSlideshow}`)
      ?.children[2];
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
    const firstChild = document.querySelector(
      `.${styles.heroSlideshow}`
    )?.firstElementChild;
    if (firstChild)
      document
        .querySelector(`.${styles.heroSlideshow}`)
        ?.appendChild(firstChild);

    update_dots();
  });

  const prev_slide = $(() => {
    // move the last child in hero-slideshow to the first child
    const firstChild = document.querySelector(
      `.${styles.heroSlideshow}`
    )?.firstElementChild;
    const lastChild = document.querySelector(
      `.${styles.heroSlideshow}`
    )?.lastElementChild;

    if (firstChild && lastChild)
      document
        .querySelector(`.${styles.heroSlideshow}`)
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
    autoplayInterval.value = setInterval(next_slide, 3500);
  });

  const stop_autoplay = $(() => {
    autoplay.value = false;
    clearInterval(autoplayInterval.value);
  });

  const clickOnDots = $((dot: any) => {
    if (changingDot.value === true) return;
    changingDot.value = true;

    const originalAutoplay = autoplay.value;

    //pause autoplay
    stop_autoplay();

    // find the index of the dot that was clicked
    const dotId = Array.from(dot.parentElement.children).indexOf(dot);
    //get the id of the active dot
    const activeDot = document.querySelector(`.${styles.active}`);
    const activeDotId = Array.from(dot.parentElement.children).indexOf(
      activeDot
    );

    const animationTime = 550;

    //perform next_slide() as many times as the difference between the dotId and activeDotId
    const difference = dotId - activeDotId;
    for (let i = 0; i < Math.abs(difference); i++)
      setTimeout(difference > 0 ? next_slide : prev_slide, animationTime * i);

    //restart autoplay and update changingDot
    setTimeout(() => {
      if (originalAutoplay) start_autoplay();
      changingDot.value = false;
    }, animationTime * Math.abs(difference));
  });

  useVisibleTask$(({ track }: any) => {
    track(() => {
      photos.value;
    });

    images.value = photos.value.flatMap((photo: any) =>
      photo.Slideshow?.map((slide: any) => photo.path + "/" + slide)
    );

    // remove all intervals when load
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);
    if (interval_id)
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }

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

  const getTouches = $((evt: any) => {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  });

  const handleTouchStart = $((evt: any) => {
    getTouches(evt).then((touches) => {
      xDown.value = touches[0].clientX;
      yDown.value = touches[0].clientY;
    });
  });

  const handleTouchMove = $((evt: any) => {
    if (changingDot.value) return;
    changingDot.value = true;

    if (!xDown.value || !yDown.value) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown.value - xUp;
    const yDiff = yDown.value - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //pause autoplay
      stop_autoplay();

      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        next_slide();
      } else {
        /* right swipe */
        prev_slide();
      }

      //restart autoplay
      start_autoplay();
    }
    /* reset values */
    xDown.value = null;
    yDown.value = null;

    //update changingDot
    setTimeout(() => {
      changingDot.value = false;
    }, 300);
  });

  return (
    images.value.length > 0 && (
      <section class={styles.heroContainer}>
        <div
          class={
            images.value.length === 1
              ? [styles.hero, styles.single]
              : styles.hero
          }
        >
          <div
            class={styles.heroSlideshow}
            onTouchStart$={handleTouchStart}
            onTouchMove$={handleTouchMove}
            style={
              {
                aspectRatio: aspectRatioStyle.value,
              } as CSSProperties
            }
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
                  return images.value.map((image: string, index: number) => {
                    return (
                      <img
                        src={image}
                        alt={image}
                        id={(
                          (index < 2 ? images.value.length : 0) +
                          index -
                          2
                        ).toString()}
                        key={repeatIndex + "_" + index}
                        class={styles.heroSlideshowSlide}
                      />
                    );
                  });
                })}
              </>
            )}
          </div>
          {images.value.length > 1 && (
            <div class={styles.heroSlideshowControls}>
              <div class={styles.heroSlideshowControlsDotsContainer}>
                <div class={styles.heroSlideshowControlsDots}>
                  {images.value.map((_: any, index: number) => {
                    return (
                      <div
                        class={
                          index === 0
                            ? [styles.dot, styles.active]
                            : [styles.dot]
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
          )}
        </div>
      </section>
    )
  );
});

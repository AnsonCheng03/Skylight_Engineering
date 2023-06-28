import { component$ } from "@builder.io/qwik";
import styles from "./examples.module.css";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(({ photos }: any) => {
  const loc = useLocation();
  const nav = useNavigate();
  return (
    <section class={styles.examples}>
      <h2>案例分享</h2>
      <div class={styles.cards}>
        <div class={styles.cardsContainer}>
          {photos.map((photo: any) => {
            return photo.Highlight?.map((photoName: any) => (
              <div
                class={styles.card}
                key={photo.id}
                onClick$={() => {
                  const url = new URL(loc.url.href);
                  url.pathname = "/Skylight_Engineering/example";
                  url.searchParams.set("type", photo.type);
                  url.searchParams.set("name", photo.name);
                  nav(url.href);
                }}
              >
                <img
                  src={photo.path + "/" + photoName}
                  class={styles.cardImg}
                />
                <div class={styles.cardContent}>
                  {photo.type && (
                    <h3 class={[styles.photoType, styles.photoTitle]}>
                      {photo.type}
                    </h3>
                  )}
                  {photo.data && (
                    <h3 class={[styles.photoData, styles.photoTitle]}>
                      {photo.data}
                    </h3>
                  )}
                  {photo.name && (
                    <h3 class={[styles.photoName, styles.photoTitle]}>
                      {photo.name}
                    </h3>
                  )}
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
});

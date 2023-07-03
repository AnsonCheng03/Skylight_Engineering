import { component$, $, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./selectCase.module.css";

export default component$(({ photos, activeType, name }: any) => {
  const caseTypes = photos.map((photo: any) => photo.type);
  const distinctCaseTypes = [...new Set(caseTypes)];

  const jumpToCaseByQuery = $((name: any) => {
    if (name) {
      const cases = document.querySelectorAll(`.${styles.case}`);
      cases.forEach((caseItem) => {
        if (caseItem.querySelector("h3")?.textContent == name) {
          //scroll to case below navigation bar
          window.scrollTo({
            top: (caseItem as HTMLElement).offsetTop - 125,
            behavior: "smooth",
          });
          return;
        }
      });
    }
  });

  useVisibleTask$(() => {
    jumpToCaseByQuery(name);
  });

  return (
    <section class={styles.selectCase}>
      <div class={styles.container}>
        {distinctCaseTypes.map((type: any) => {
          return (
            <div
              class={
                type == activeType.value
                  ? [styles.caseType, styles.active]
                  : styles.caseType
              }
              key={type}
              onClick$={() => {
                activeType.value = type;
              }}
            >
              <h3>{type}</h3>
              <div class={styles.caseTypeNavigation}>
                {photos.map((photo: any) => {
                  return (
                    photo.type == type && (
                      <h3
                        onClick$={() => {
                          //Jump to the case
                          jumpToCaseByQuery(photo.name);
                        }}
                      >
                        {photo.name}
                      </h3>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

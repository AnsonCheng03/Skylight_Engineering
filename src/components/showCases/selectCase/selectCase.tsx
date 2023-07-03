import { component$, $, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./selectCase.module.css";

export default component$(({ photos, activeType, name }: any) => {
  const caseTypes = photos.map((photo: any) => photo.type);
  const distinctCaseTypes = [...new Set(caseTypes)];

  const jumpToCaseByQuery = $((name: any, highlight = true) => {
    if (name) {
      const cases = document.querySelectorAll(".case");
      cases.forEach((caseItem) => {
        if (caseItem.querySelector("h3")?.textContent == name) {
          // push the case to the history
          window.history.pushState(
            {},
            "",
            window.location.href.split("?")[0] +
              "?type=" +
              activeType.value +
              "&name=" +
              name
          );
          //scroll to case below navigation bar
          window.scrollTo({
            top: (caseItem as HTMLElement).offsetTop - 125,
            behavior: "smooth",
          });
          // remove the highlight effect from other cases
          cases.forEach((caseItem) => {
            caseItem.classList.remove(styles.highlight);
          });
          // add a highlight effect
          if (highlight) caseItem.classList.add(styles.highlight);

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
                const changeType = activeType.value !== type;
                // change the active type
                activeType.value = type;
                // push the case to the history
                if (changeType)
                  setTimeout(() => {
                    jumpToCaseByQuery(
                      photos.find((photo: any) => photo.type == type)?.name,
                      false
                    );
                  }, 300);
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

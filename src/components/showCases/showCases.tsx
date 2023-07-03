import { component$, $, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from "./showCases.module.css";
import cameraIcon from "./assets/camera.png";
import copyLinkIcon from "./assets/copy-link.png";
import shareIcon from "./assets/share.png";

export default component$(
  ({ photos, type, name, fullScreenSlideshow }: any) => {
    const activeType = useSignal<string>(type || photos[0].type);
    const caseTypes = photos.map((photo: any) => photo.type);
    const distinctCaseTypes = [...new Set(caseTypes)];

    const copyLink = $((type: any, name: any) => {
      //Create a temporary input element
      const tempInput = document.createElement("input");
      const url = window.location.href.split("?")[0];
      tempInput.value = url + "?type=" + type + "&name=" + name;
      document.body.appendChild(tempInput);

      //Select the input element
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);

      //Copy the input element
      document.execCommand("copy");

      //Remove the input element
      document.body.removeChild(tempInput);
    });

    const shareLink = $((photo: any) => {
      const url = window.location.href.split("?")[0];
      const shareData = {
        title: photo.name,
        text: photo.name + "\n\n" + photo.Text + "\n\n" + "按此查看更多：",
        url: url + "?type=" + photo.type + "&name=" + photo.name,
      };
      if (navigator.share && navigator.canShare(shareData)) {
        navigator.share(shareData);
      } else {
        // do something else like copying the data to the clipboard
        window.alert("分享功能暫時未能使用，已為你複製連結。");
        copyLink(photo.type, photo.name);
      }
    });

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
      <section class={styles.cases}>
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
        <section class={styles.displayCase}>
          {photos.map((photo: any) => {
            return (
              photo.type == activeType.value && (
                <div class={styles.case}>
                  <h3>{photo.name}</h3>
                  <div class={styles.caseDetails}>
                    <div
                      class={styles.photoSelector}
                      onClick$={() => {
                        fullScreenSlideshow.value = photo.name;
                      }}
                    >
                      <img class={styles.cover} src={cameraIcon} />
                      <img
                        class={styles.background}
                        src={photo.path + "/" + photo.Cover}
                      />
                    </div>
                    <div class={styles.caseDescription}>
                      {photo.Text.split("\n").map((text: any) => {
                        return <p>{text}</p>;
                      })}
                    </div>
                    <div class={styles.buttonContainer}>
                      <button
                        class={styles.quotationButton}
                        onClick$={() => {
                          // send the quotation request via whatsapp
                          const message = `你好，我想查詢${photo.name}的報價。`;
                          const whatsAppNumber = "85290732506";
                          const url = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${message}`;
                          window.open(url, "_blank");
                        }}
                      >
                        報價
                      </button>
                      <button
                        class={styles.sharingButton}
                        onClick$={() => {
                          copyLink(photo.type, photo.name);
                        }}
                      >
                        <img src={copyLinkIcon} alt="copy link" />
                      </button>
                      <button
                        class={styles.sharingButton}
                        onClick$={() => {
                          shareLink(photo);
                        }}
                      >
                        <img src={shareIcon} alt="share" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </section>
      </section>
    );
  }
);

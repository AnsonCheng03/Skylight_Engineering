import { component$, $ } from "@builder.io/qwik";
import styles from "./displayCase.module.css";
import { BsCamera, BsLink, BsShare } from "@qwikest/icons/bootstrap";

export default component$(
  ({ photos, activeType, fullScreenSlideshow }: any) => {
    const copyLink = $((type: any, name: any, showAlert = true) => {
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

      //Show a alert
      if (showAlert) window.alert("連結已複製到剪貼簿。");
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
        copyLink(photo.type, photo.name, false);
      }
    });

    return (
      <section class={styles.displayCase}>
        {photos.value.map((photo: any) => {
          return (
            photo.type == activeType.value && (
              <div class={[styles.case, "case"]}>
                <h3>{photo.name}</h3>
                <div class={styles.caseDetails}>
                  <div
                    class={styles.photoSelector}
                    onClick$={() => {
                      fullScreenSlideshow.value = photo.name;
                    }}
                  >
                    <BsCamera class={styles.cover} />
                    <img
                      class={styles.background}
                      src={photo.path + "/" + photo.Cover}
                    />
                  </div>
                  <div class={styles.caseDescription}>
                    {photo.Text?.split("\n").map((text: any) => {
                      return <p key={text}>{text}</p>;
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
                      <BsLink class={styles.buttonImage} />
                    </button>
                    <button
                      class={styles.sharingButton}
                      onClick$={() => {
                        shareLink(photo);
                      }}
                    >
                      <BsShare class={styles.buttonImage} />
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </section>
    );
  },
);

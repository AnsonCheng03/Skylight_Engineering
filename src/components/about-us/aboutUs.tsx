import { component$ } from "@builder.io/qwik";
import firstIcon from "./icons/index-1.png";
import secondIcon from "./icons/index-2.png";
import thirdIcon from "./icons/index-3.png";
import styles from "./aboutUs.module.css";

export default component$(() => {
  return (
    <section class={styles.aboutUs}>
      <h2 class={styles.aboutUsTitle}>關於我們</h2>
      <p>
        天晴工程有限公司創立於2016年，承辦超過100個工程項目。一直而來透過與客人們耐心聆聽及真誠溝通，仔細處理工程細節從中保證工程品質，精心打造符合客人心意既理想安樂窩。
      </p>

      <div class={styles.serviceContent}>
        <h3 class={styles.serviceContentTitle}>我們的服務內容</h3>
        <div class={styles.serviceContentContainer}>
          <div class={styles.serviceItems}>
            <img src={firstIcon} alt="" class={styles.images} />
            <div class={styles.serviceItemsText}>
              <p>免費查詢及上門報價</p>
              <p>工程質量信心，傢俬及裝修項目提供工程後一年保養</p>
            </div>
          </div>
          <div class={styles.serviceItems}>
            <img src={secondIcon} alt="" class={styles.images} />
            <div class={styles.serviceItemsText}>
              <p>
                按工程需要提供各類型設計圖紙，當中包括平面圖、3D效果圖及施工圖
              </p>
              <p>監察裝修工程過程，緊密與客戶互相溝通及匯報工程進度</p>
            </div>
          </div>
          <div class={styles.serviceItems}>
            <img src={thirdIcon} alt="" class={styles.images} />
            <div class={styles.serviceItemsText}>
              <p>向客戶提供裝修物料選購建議</p>
              <p>報價內容清晰，價格公開透明，工程項目一目了然</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

import FormCard from "./FormCard";
import styles from "./Popup.module.css";

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img className={styles.oodiIcon} alt="" src="/oodi1.svg" />
          <img className={styles.fIcon} alt="" src="/f2.svg" />
        </div>
        <div className={styles.headline}>
          <div className={styles.faaSeuCadastro}>Faça seu cadastro!</div>
        </div>
      </div>
      <FormCard />
      <div className={styles.buttonClose01} onClick={onClose}>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default Popup;

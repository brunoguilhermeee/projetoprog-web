import styles from "./PopupContato.module.css";

const PopupContato = ({ onClose }) => {
  return (
    <div className={styles.popupContato}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img className={styles.oodiIcon} alt="" src="/oodi1.svg" />
          <img className={styles.fIcon} alt="" src="/f1.svg" />
        </div>
        <div className={styles.headline}>
          <div className={styles.entreEmContato}>Entre em contato!</div>
        </div>
      </div>
      <div className={styles.card}>
        <button className={styles.button}>
          <div className={styles.telefone}>Telefone</div>
        </button>
        <button className={styles.button}>
          <div className={styles.telefone}>WhatsApp</div>
        </button>
        <button className={styles.button}>
          <div className={styles.telefone}>E-mail</div>
        </button>
      </div>
      <div className={styles.buttonClose02} onClick={onClose}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default PopupContato;

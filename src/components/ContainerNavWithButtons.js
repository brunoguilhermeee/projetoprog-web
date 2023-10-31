import { useState, useCallback } from "react";
import PopupContato from "./PopupContato";
import PortalPopup from "./PortalPopup";
import styles from "./ContainerNavWithButtons.module.css";

const ContainerNavWithButtons = () => {
  const [isPopupContatoOpen, setPopupContatoOpen] = useState(false);

  const openPopupContato = useCallback(() => {
    setPopupContatoOpen(true);
  }, []);

  const closePopupContato = useCallback(() => {
    setPopupContatoOpen(false);
  }, []);

  return (
    <>
      <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <div className={styles.logoChild} />
            <img className={styles.oodiIcon} alt="" src="/oodi.svg" />
            <img className={styles.fIcon} alt="" src="/f.svg" />
          </div>
          <div className={styles.buttons}>
            <div className={styles.home}>Home</div>
            <div className={styles.menuParent}>
              <div className={styles.menu}>Menu</div>
              <img className={styles.groupChild} alt="" src="/group-2.svg" />
            </div>
            <div className={styles.buttonsInner}>
              <div className={styles.serviosParent}>
                <div className={styles.menu}>Serviços</div>
                <img className={styles.groupItem} alt="" src="/group-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.iconSearchParent}>
            <img className={styles.iconSearch} alt="" src="/-icon-search.svg" />
            <div className={styles.fiRrShoppingBagParent}>
              <img
                className={styles.fiRrShoppingBagIcon}
                alt=""
                src="/firrshoppingbag.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.groupInner} />
                <b className={styles.b}>8</b>
              </div>
            </div>
            <button
              className={styles.button}
              autoFocus={true}
              id="contato"
              onClick={openPopupContato}
            >
              <img
                className={styles.fiRrPhoneCallIcon}
                alt=""
                src="/firrphonecall.svg"
              />
              <div className={styles.contato}>Contato</div>
            </button>
          </div>
        </div>
      </div>
      {isPopupContatoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupContato}
        >
          <PopupContato onClose={closePopupContato} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContainerNavWithButtons;

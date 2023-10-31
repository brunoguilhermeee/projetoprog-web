import { useState, useMemo, useCallback } from "react";
import Popup from "./Popup";
import PortalPopup from "./PortalPopup";
import styles from "./ButtonCad.module.css";

const ButtonCad = ({
  property1DefaultBoxSizing,
  property1DefaultBorder,
  fazerCadastroAgoraDisplay,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const property1DefaultStyle = useMemo(() => {
    return {
      boxSizing: property1DefaultBoxSizing,
      border: property1DefaultBorder,
    };
  }, [property1DefaultBoxSizing, property1DefaultBorder]);

  const fazerCadastroAgoraStyle = useMemo(() => {
    return {
      display: fazerCadastroAgoraDisplay,
    };
  }, [fazerCadastroAgoraDisplay]);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={styles.property1default}
        onClick={openPopup}
        style={property1DefaultStyle}
      >
        <div
          className={styles.fazerCadastroAgora}
          style={fazerCadastroAgoraStyle}
        >
          Fazer cadastro agora!
        </div>
      </div>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ButtonCad;

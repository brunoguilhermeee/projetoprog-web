import { useState, useMemo, useCallback } from "react";
import Popup from "./Popup";
import PortalPopup from "./PortalPopup";
import styles from "./ButtonCriarConta.module.css";

const ButtonCriarConta = ({
  property1DefaultBoxSizing,
  property1DefaultBorder,
  fazerCadastroAgoraDisplay,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const crieUmaStyleStyle = useMemo(() => {
    return {
      boxSizing: property1DefaultBoxSizing,
      border: property1DefaultBorder,
    };
  }, [property1DefaultBoxSizing, property1DefaultBorder]);

  const crieUmaStyle = useMemo(() => {
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
        className={styles.crieUma}
        onClick={openPopup}
        style={crieUmaStyle}
      >
       Crie Uma!
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

export default ButtonCriarConta;

import { useState } from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Popup from "../components/Popup";
import PortalPopup from "../components/PortalPopup";
import ContainerNavWithButtons from "../components/ContainerNavWithButtons";
import Head from "../components/Head";
import PopularCategoriesContainer from "../components/PopularCategoriesContainer";
import ButtonCad from "../components/ButtonCad";
import CardMenu from "../components/CardMenu";
import styles from "./ResturentWebsite.module.css";



const ResturentWebsite = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <div className={styles.resturentWebsite}>
      <div className={styles.haederAndHead}>
        <ContainerNavWithButtons />
        <Head />
        <div className={styles.haederAndHeadChild} />
        <img className={styles.fiBrClockIcon} alt="" src="/fibrclock.svg" />
        <img className={styles.fiBrCommentIcon} alt="" src="/fibrcomment.svg" />
        <img
          className={styles.fiBrShoppingBagIcon}
          alt=""
          src="/fibrshoppingbag.svg"
        />
      </div>
      <PopularCategoriesContainer />
      <div className={styles.sectionCadastro}>
        <div className={styles.texts}>
          <b className={styles.peaSuaComida}>peça sua comida favorita!</b>
          <b className={styles.faaSeuCadastro}>Faça seu cadastro!</b>
        </div>
        <ButtonCad
          property1DefaultBoxSizing="border-box"
          property1DefaultBorder="none"
          fazerCadastroAgoraDisplay="inline-block"
        />
        
        <a href="/Login"> 
         <button className={styles.buttonLogin} id="button-login">
            <div className={styles.jaTenhoConta}>Já tenho conta</div>
         </button>
        </a>
      </div>
      <CardMenu />
      <img
        className={styles.nicepngPlateOfFoodPng5460Icon}
        alt=""
        src="/nicepng-plateoffoodpng-546030-1@2x.png"
      />
      <img className={styles.pngwing1Icon} alt="" src="/pngwing-1@2x.png" />
      <img
        className={styles.foodPlateHealthyFreePhotoIcon}
        alt=""
        src="/139184foodplatehealthyfreephoto-1@2x.png"
      />
    </div>
  );
};

export default ResturentWebsite;

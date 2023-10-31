import { Link } from "react-router-dom";
import styles from "./Head.module.css";
import Cardápio from "../pages/Cardapio";

const Head = () => {
  return (
    <div className={styles.header}>
      <div className={styles.peaSuaComidaFavoritaAgoraParent}>
        <div className={styles.peaSuaComidaContainer}>
          <p className={styles.peaSuaComida}>Peça sua comida</p>
          <p className={styles.peaSuaComida}>
            <span>favorita</span>
            <span className={styles.agoraMesmo}> agora mesmo!</span>
          </p>
        </div>
        <div className={styles.aproveiteOMelhor}>
          Aproveite o melhor da culinária japonesa vegana, embarque na diversão
          de sabores e descubra como combinar sabor com saúde.
        </div>
        <Link to="./Cardápio">
         <button className={styles.button} id="cardapio">
          <div className={styles.verCardpio}>Ver cardápio</div>
         </button>
        </Link>
      </div>
      <div className={styles.ilustraoHeader}>
        <img className={styles.ilustraoIcon} alt="" src="/ilustrao.svg" />
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-24.svg" />
            <div className={styles.comidaPicante}>Comida picante 🌶</div>
          </div>
          <div className={styles.groupChild} />
          <div className={styles.saladaVegetarianaParent}>
            <div className={styles.saladaVegetariana}>Salada vegetariana</div>
            <div className={styles.r2300}>
              <span>R$</span>
              <span className={styles.span}>23.00</span>
            </div>
            <img className={styles.fiSrStarIcon} alt="" src="/fisrstar.svg" />
            <img className={styles.fiSrStarIcon1} alt="" src="/fisrstar1.svg" />
            <img className={styles.fiSrStarIcon2} alt="" src="/fisrstar2.svg" />
            <img className={styles.fiSrStarIcon3} alt="" src="/fisrstar3.svg" />
            <img className={styles.fiBrStarIcon} alt="" src="/fibrstar.svg" />
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupWrapper}>
            <div className={styles.macarroPicanteParent}>
              <div className={styles.macarroPicante}>Macarrão picante</div>
              <div className={styles.div}>
                <span>$</span>
                <span className={styles.span}>18.00</span>
              </div>
              <img className={styles.groupInner} alt="" src="/group-6.svg" />
            </div>
          </div>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

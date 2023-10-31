import styles from "./CardMenu.module.css";

const CardMenu = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.pratosEspeciaisParent}>
          <b className={styles.pratosEspeciais}>Pratos especiais</b>
          <b className={styles.pratosDeDestaque}>
            Pratos de destaque do nosso Cardápio
          </b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-11.svg" />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameInner} />
              <img className={styles.groupIcon} alt="" src="/group-12.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <img
            className={styles.fattoushSaladIcon}
            alt=""
            src="/fattoush-salad@2x.png"
          />
          <div className={styles.saladaGordaParent}>
            <div className={styles.saladaGorda}>Salada gorda</div>
            <div className={styles.descrioDoItem}>Um sabor irresistivel...</div>
            <div className={styles.r2400Parent}>
              <div className={styles.div}>
                <span>R$</span>
                <span className={styles.span}>24.00</span>
              </div>
              <div className={styles.fiSrStarParent}>
                <img
                  className={styles.fiSrStarIcon}
                  alt=""
                  src="/fisrstar4.svg"
                />
                <div className={styles.div}>4.6</div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.ellipseDiv} />
            <img className={styles.fiSrHeartIcon} alt="" src="/fisrheart.svg" />
          </div>
        </div>
        <div className={styles.card}>
          <img
            className={styles.fattoushSaladIcon}
            alt=""
            src="/vegetable-salad@2x.png"
          />
          <div className={styles.saladaGordaParent}>
            <div className={styles.div}>Salada de vegetais</div>
            <div className={styles.descrioDoItem1}>Um sabor irresistivel...</div>
            <div className={styles.r2600Parent}>
              <div className={styles.div}>
                <span>R$</span>
                <span className={styles.span}>26.00</span>
              </div>
              <div className={styles.fiSrStarParent}>
                <img
                  className={styles.fiSrStarIcon}
                  alt=""
                  src="/fisrstar4.svg"
                />
                <div className={styles.div}>4.6</div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.ellipseDiv} />
            <img className={styles.fiSrHeartIcon} alt="" src="/fisrheart.svg" />
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.eggSaladIcon} alt="" src="/egg-salad@2x.png" />
          <div className={styles.saladaGordaParent}>
            <div className={styles.saladaVegetarianaDe}>
              Salada vegetariana de ovo
            </div>
            <div className={styles.descrioDoItem1}>Um sabor irresistivel...</div>
            <div className={styles.r2600Parent}>
              <div className={styles.div}>
                <span>R$</span>
                <span className={styles.span2}>23.00</span>
              </div>
              <div className={styles.fiSrStarParent}>
                <img
                  className={styles.fiSrStarIcon}
                  alt=""
                  src="/fisrstar5.svg"
                />
                <div className={styles.div}>4.6</div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.ellipseDiv} />
            <img
              className={styles.fiSrHeartIcon}
              alt=""
              src="/fisrheart1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;

import * as React from "react";
import styles from "./Cardapio.module.css"

const Cardápio = () => {
  return (
    <div className={styles.cardpio}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.titles}>
            <b className={styles.nossoCardpio}>nosso cardápio</b>
            <b className={styles.nossosPrincipaisPratos}>
              Nossos principais pratos pra você!
            </b>
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
              <div className={styles.descrioDoItem}>Descrição do item aqui</div>
              <div className={styles.r2400Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>24.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
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
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>26.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.eggSaladIcon}
              alt=""
              src="/egg-salad@2x.png"
            />
            <div className={styles.saladaGordaParent}>
              <div className={styles.saladaVegetarianaDe}>
                Salada vegetariana de ovo
              </div>
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span2}>23.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
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
              <div className={styles.descrioDoItem}>Descrição do item aqui</div>
              <div className={styles.r2400Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>24.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
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
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>26.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.eggSaladIcon}
              alt=""
              src="/egg-salad@2x.png"
            />
            <div className={styles.saladaGordaParent}>
              <div className={styles.saladaVegetarianaDe}>
                Salada vegetariana de ovo
              </div>
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span2}>23.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
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
              <div className={styles.descrioDoItem}>Descrição do item aqui</div>
              <div className={styles.r2400Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>24.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
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
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span}>26.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.eggSaladIcon}
              alt=""
              src="/egg-salad@2x.png"
            />
            <div className={styles.saladaGordaParent}>
              <div className={styles.saladaVegetarianaDe}>
                Salada vegetariana de ovo
              </div>
              <div className={styles.descrioDoItem1}>
                Descrição do item aqui
              </div>
              <div className={styles.r2600Parent}>
                <div className={styles.div}>
                  <span>R$</span>
                  <span className={styles.span2}>23.00</span>
                </div>
                <div className={styles.fiSrStarParent}>
                  <img
                    className={styles.fiSrStarIcon}
                    alt=""
                    src="/fisrstar.svg"
                  />
                  <div className={styles.div}>4.6</div>
                </div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.fiSrHeartIcon}
                alt=""
                src="/fisrheart.svg"
              />
            </div>
          </div>
        </div>
      </div>
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
  
  export default Cardápio;

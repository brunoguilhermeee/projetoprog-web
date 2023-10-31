import styles from "./PopularCategoriesContainer.module.css";

const PopularCategoriesContainer = () => {
  return (
    <div className={styles.categorias}>
      <div className={styles.title}>
        <b className={styles.favoritosDosClientes}>Favoritos dos clientes</b>
        <b className={styles.categoriasPopulares}>Categorias Populares</b>
      </div>
      <div className={styles.cardsCategorias}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.pngwing4Icon}
                alt=""
                src="/pngwing-4@2x.png"
              />
            </div>
            <div className={styles.pratoPrincipalParent}>
              <div className={styles.pratoPrincipal}>Prato principal</div>
              <div className={styles.pratos}>(86 pratos)</div>
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.pngwing6Icon}
                alt=""
                src="/pngwing-6@2x.png"
              />
            </div>
            <div className={styles.pratoPrincipalParent}>
              <div className={styles.pratoPrincipal}>Café da manhã</div>
              <div className={styles.itens}>(12 pratos)</div>
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameContainer}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.pngwing3Icon}
                alt=""
                src="/pngwing-3@2x.png"
              />
            </div>
            <div className={styles.sobremesaParent}>
              <div className={styles.pratoPrincipal}>Sobremesa</div>
              <div className={styles.itens}>(48 pratos)</div>
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.pngwing7Icon}
                alt=""
                src="/pngwing-7@2x.png"
              />
            </div>
            <div className={styles.pratoPrincipalParent}>
              <div className={styles.pratoPrincipal}>Todos</div>
              <div className={styles.itens}>(255 Itens)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoriesContainer;

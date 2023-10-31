
import React from 'react';
import styles from "./login.module.css";
import ButtonCriarConta from '../components/ButtonCriarConta';



const Login = () => {
  return (
  <form>
    <div className={styles.login}>
      <div className={styles.haederAndHead}>
        <div className={styles.popup}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <div className={styles.logoChild} />
              <img className={styles.oodiIcon} alt="" src="/oodi.svg" />
              <img className={styles.fIcon} alt="" src="/f.svg" />
            </div>
            <div className={styles.headline}>
              <div className={styles.faaSeuLogin}>Faça seu login!</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.inputWithLabelmobile}>
              <div className={styles.label}>E-mail</div>
              <input
                className={styles.formFieldstextInput}
                id="e-mail-login"
                placeholder="Digite seu e-mail"
                type="email"
                required
              />
            </div>
            <div className={styles.inputWithLabelmobile}>
              <div className={styles.label}>Senha</div>
              <input
                className={styles.formFieldstextInput1}
                id="senha-login"
                placeholder="Digite sua senha"
                type="password"
                required
                
              />
            </div>
            <button className={styles.button} id="cadastro">
              <div className={styles.entrar}>Entrar</div>
            </button>
            <div className={styles.text}>
              <div className={styles.label}>Não tem conta?</div>

              
        
            <ButtonCriarConta
            property1DefaultBoxSizing="border-box"
            property1DefaultBorder="none"
            fazerCadastroAgoraDisplay="inline-block"
            />
            </div>
          </div>
        </div>

      </div>

    </div>
  </form>  
  );
};

export default Login;

import React, { useState } from 'react';
import styles from "./FormCard.module.css";
import './PasswordToggle.css';

const FormCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="https://api.sheetmonkey.io/form/bPYEmjBp6JT5xm7J2eU9nT" method="post">
      <div className={styles.card}>
        <div className={styles.inputWithLabelmobile}>
          <div className={styles.label}>Nome</div>
          <input
            className={styles.formFieldstextInput}
            id="name"
            name="name"
            placeholder="Digite seu nome"
            type="text"
            required
          />
        </div>
        <div className={styles.inputWithLabelmobile1}>
          <div className={styles.label}>E-mail</div>
          <input
            className={styles.formFieldstextInput1}
            id="email"
            name="email" 
            placeholder="Digite seu e-mail"
            type="email"
            required
          />
        </div>
        <div className={styles.inputWithLabelmobile1}>
          <div className={styles.label}>Senha</div>
          <input
            className={styles.formFieldstextInput1}
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            type={showPassword ? 'text' : 'password'}
            required
          />
          <span className="showPassword" onClick={togglePasswordVisibility}>
            {showPassword ? "Esconder Senha" : "Mostrar Senha"}
          </span>
        </div>
        <button className={styles.button} id="cadastro">
          <div className={styles.cadastrar}>Cadastrar</div>
        </button>
      </div>
    </form>
  );
};

export default FormCard;


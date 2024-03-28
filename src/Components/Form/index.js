import React, { useState } from "react";
import "./Form.css";

function Form() {
  // const para mudar o estado do botao
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Inverte o estado de clicado quando o botão é clicado
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, por exemplo, enviar para um servidor
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <section className="container">
      <div className="imgBaixo">
        <img src="/img/undraw_new_ideas_re_asn4.png" alt="imagem"></img>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <img src="/img/logo.png" className="img"></img>
        <h1 className="titulo">Login</h1>
        <div className="input-wrapper">
          <label htmlFor="email"></label>
          <input
            placeholder="Insira seu e-mail"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="senha"></label>
          <input
            placeholder="Insira sua senha"
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="forgotPassword_container">
            <a href="#" className="forgotPassword">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={isClicked ? "button" : "button"}
          type="submit"
        >
          Continuar
        </button>
        <p>ou continuar com </p>
        <p>
          Não tem uma conta ?
          <a className="ancora" href="#">
            Cadastre-se aqui!
          </a>
        </p>
      </form>
      <div className="imgCima">
        <img src="/img/undraw_work_in_progress_re_byic.png" alt="imagem"></img>
      </div>
    </section>
  );
}

export default Form;

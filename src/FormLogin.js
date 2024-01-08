import "./App.css";
import React from "react";

const USER = {
  email: "email@teste.com",
  senha: "1234",
};

function FormLogin({ form, setForm, setSession }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === USER.email && form.senha === USER.senha) {
      setSession({ isAuth: true, user: form });
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label>
        Senha:
        <input
          type="text"
          name="senha"
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
        />
      </label>
      <input type="submit" value="Logar" />
    </form>
  );
}

export default FormLogin;

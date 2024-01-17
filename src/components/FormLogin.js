import React from "react";

function FormLogin({ onSubmit, form, setForm, setSession, setError }) {
  return (
    <form method="post" onSubmit={onSubmit}>
      <label data-cy="label-email">
        Email:
        <input
          id="email"
          type="text"
          name="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label data-cy="label-senha">
        Senha:
        <input
          id="password"
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

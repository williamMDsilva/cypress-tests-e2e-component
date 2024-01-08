import "./App.css";
import React from "react";
import FormLogin from "./FormLogin";

const USER = {
  email: "email@teste.com",
  senha: "1234",
};

function App() {
  const [form, setForm] = React.useState({});
  const [session, setSession] = React.useState({ isAuth: false, user: null });
  const hasSession = session.isAuth;

  return (
    <div className="App">
      {!hasSession ? (
        <FormLogin form={form} setForm={setForm} setSession={setSession} />
      ) : null}

      {hasSession ? (
        <div>
          <input
            type="submit"
            value="Deslogar"
            onClick={() => {
              setSession({ isAuth: false, user: null });
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import FormLogin from "./components/FormLogin";
import NavBar from "./components/NavBar";
import { USER } from "./constants/constants";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [form, setForm] = React.useState({});
  const [error, setError] = React.useState({});

  const [session, setSession] = React.useState({ isAuth: false, user: null });
  const hasSession = session.isAuth;
  const hasError = error.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === USER.email && form.senha === USER.senha) {
      setSession({ isAuth: true, user: form });
      setError({});
    } else {
      setError({ message: "Login invalido!" });
    }
  };

  const handleLogout = () => {
    setSession({ isAuth: false, user: null });
    setError({});
  };

  return (
    <div className="App">
      {!hasSession ? (
        <FormLogin
          form={form}
          setForm={setForm}
          setSession={setSession}
          setError={setError}
          onSubmit={handleSubmit}
        />
      ) : null}

      {hasSession ? <NavBar onLogout={handleLogout} /> : null}
      {!!hasError ? <ErrorMessage message={error.message} /> : null}
    </div>
  );
}

export default App;

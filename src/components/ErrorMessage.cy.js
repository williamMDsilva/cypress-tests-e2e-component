import React from "react";
import ErrorMessage from "./ErrorMessage";

describe("<ErrorMessage />", () => {
  it("renders", () => {
    cy.mount(<ErrorMessage message="Mensagem de erro" />);
    cy.get(".error-message").should(`have.text`, "Mensagem de erro");
  });
});

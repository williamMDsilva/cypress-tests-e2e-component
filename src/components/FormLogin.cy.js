import React from "react";
import FormLogin from "./FormLogin";

describe("<FormLogin />", () => {
  it("renders", () => {
    cy.mount(<FormLogin setForm={cy.stub().as("setFrom")} />);

    cy.get("form").find("[data-cy=label-email]").contains("Email");
    cy.get("form")
      .find("[data-cy=label-email]")
      .find("#email")
      .should(`be.visible`);

    cy.get("form").find("[data-cy=label-senha]").contains("Senha");
    cy.get("form")
      .find("[data-cy=label-senha]")
      .find("#password")
      .should(`be.visible`);

    cy.get("form > label").should(($lis) => {
      expect($lis, "2 items").to.have.length(2);

      expect($lis.eq(0), "first item").to.contain("Email");
      expect($lis.eq(1), "second item").to.contain("Senha");
    });

    cy.get("form > input[type=submit]")
      .should("be.visible")
      .should("have.value", "Logar");
  });
});

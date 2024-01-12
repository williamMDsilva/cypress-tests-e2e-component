import React from "react";
import NavBar from "./NavBar";

describe("<NavBar />", () => {
  it("renders", () => {
    cy.mount(<NavBar onLogout={cy.stub().as("click")} />);

    cy.get("input").click();
    cy.get("@click").should("have.been.calledOnce").invoke("resetHistory");

    cy.get("input").click().click();
    cy.get("@click").should("have.been.calledTwice");
  });
});

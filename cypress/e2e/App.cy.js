describe("App, ", () => {
  it("Try login with email and password Right", () => {
    cy.visit("/"); //https://example.cypress.io

    cy.get("#email").type("email@teste.com"); //
    cy.get("#password").type("1234"); //
    cy.get("[type=Submit]").click(); //

    // cy.contains("") // 6.
    //

    cy.get(`[data-cy=logout]`).should(`have.value`, `Deslogar`);
  });

  it("Try login with email and password Right", () => {
    cy.visit("/");

    cy.get("#email").type("email@teste.com"); //
    cy.get("#password").type("1234345"); //

    cy.get("[type=Submit]").click(); //

    cy.get(`.error-message`).should(`have.text`, `Login invalido!`);
  });
});

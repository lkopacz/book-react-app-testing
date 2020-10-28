describe("page render", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/");
  //   cy.injectAxe();
  // });

  it("renders the page accessibly", () => {
    cy.visit("http://localhost:3000/").injectAxe();
  });
  it("focuses on the wrapper when you click on the button toggle", () => {
    cy.visit("http://localhost:3000/")
      .get("#color-scheme")
      .click()
      .focused()
      .should("have.id", "radio-wrapper");
  });
});

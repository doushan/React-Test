describe("Examine employees list content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });
  it("contains correct information", () => {
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });

  it("contains the correct titles", () => {
    cy.get("[data-cy=all-employee]").should("contain", "View all employees");
    cy.get("[data-cy=download-csv]").should(
      "contain",
      "Download CSV (all employees)"
    );
  });
});

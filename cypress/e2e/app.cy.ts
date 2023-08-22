//I need to read up on the cypress documentation more to figure out exactly how I want to go about this
export const isMobile = () => {
  return Cypress.config("viewportWidth") < 1024;
};

function checkIfHeaderInactive() {
  cy.get("header")
    .should("exist")
    .should("not.have.class", "stickyNav")
    .and("not.have.class", "atProjects");
  cy.get("div[aria-hidden='true']")
    .should("exist")
    .should("not.have.class", "takeSpace");
}

function checkIfHeaderIsActive() {
  cy.get("header").should("have.class", "stickyNav");
  cy.get("header").should("have.class", "atProjects");
  cy.get("div[aria-hidden='true']").should("have.class", "takeSpace");
}
describe("App end-to-end test", () => {
  context("Check Navigation", () => {
    beforeEach(() => {
      cy.visit("https://rikardhallberg.com");
    });
    it("should have a basic header that responds to scroll", () => {
      //before scroll, the header and placeholder should be inactive
      checkIfHeaderInactive();

      cy.get("#projects").scrollIntoView();
      //after scroll, the header and placeholder should be active
      checkIfHeaderIsActive();

      cy.scrollTo("top");
      //back to top, the header and placeholder should be inactive
      checkIfHeaderInactive();
    });
    it("should have navigation", () => {
      if (!isMobile()) {
        //check that project link works
        cy.get("a[href='#projects']").first().click();
        //header and placeholder should be active
        checkIfHeaderIsActive();

        //check that contact link works
        cy.get("a[href='#contact']").click();
        //header and placeholder should still be active
        checkIfHeaderIsActive();

        cy.get("a[href='#introduction']").click();
        //back to top, the header and placeholder should be inactive
        checkIfHeaderInactive();
      } else {
        cy.get("aside").should("have.attr", "aria-hidden", "true");
        cy.get("button")
          .should("have.attr", "aria-expanded", "false")
          .and("have.attr", "aria-label", "Open menu")
          .click();
        cy.get("button")
          .should("have.attr", "aria-expanded", "true")
          .and("have.attr", "aria-label", "Close menu");
        cy.get("aside").should("have.attr", "aria-hidden", "false");

        cy.get("aside > a[href='#projects'").click();

        checkIfHeaderIsActive();

        cy.get("aside").should("have.attr", "aria-hidden", "true");
        cy.get("button").click();

        cy.get("aside > a[href='#contact'").click();

        checkIfHeaderIsActive();

        cy.get("aside").should("have.attr", "aria-hidden", "true");
        cy.get("button").click();

        cy.get("a[href='#introduction']").click();

        checkIfHeaderInactive();
      }
    });
  });
});

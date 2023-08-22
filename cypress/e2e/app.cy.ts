//I need to read up on the cypress documentation more to figure out exactly how I want to go about this
export const isMobile = () => {
  return Cypress.config("viewportWidth") < 1024;
};

function checkIfHeaderInactive() {
  cy.get("header").should("exist").isWithinViewport();
  cy.get("div[aria-hidden='true']")
    .should("exist")
    .should("not.have.class", "takeSpace");
}

function checkIfHeaderIsActive() {
  cy.get("header").isWithinViewport();
  cy.get("div[aria-hidden='true']").should("have.class", "takeSpace");
}

function sidebarHidden(status: string) {
  cy.get("aside").should("have.attr", "aria-hidden", status);
}
describe("App end-to-end test", () => {
  beforeEach(() => {
    cy.visit("https://rikardhallberg.com");
  });
  context("Check Navigation", () => {
    it("should have a basic header that responds to scroll", () => {
      //before scroll, the header and placeholder should be inactive
      checkIfHeaderInactive();

      cy.get("#projects").scrollIntoView();
      cy.wait(500);
      //after scroll, the header and placeholder should be active
      checkIfHeaderIsActive();

      cy.scrollTo("top");
      cy.wait(500);
      //back to top, the header and placeholder should be inactive
      checkIfHeaderInactive();
    });
    it("should have desktop navigation", () => {
      cy.viewport(1280, 800);
      //check that project link works
      cy.get("a[href='#projects']").first().click();
      cy.wait(500);
      //header and placeholder should be active
      checkIfHeaderIsActive();

      //check that contact link works
      cy.get("a[href='#contact']").first().click();
      //header and placeholder should still be active
      checkIfHeaderIsActive();

      cy.get("a[href='#introduction']").click();
      //back to top, the header and placeholder should be inactive
      checkIfHeaderInactive();
    });
    it("should have mobile navigation", () => {
      cy.get("button").click();

      cy.get("aside > nav > ul > li > a[href='#projects']").click();

      cy.wait(500);
      checkIfHeaderIsActive();

      sidebarHidden("true");
      cy.get("button").click();

      cy.get("aside > nav > ul > li > a[href='#contact']").click();
      cy.wait(500);
      checkIfHeaderIsActive();

      sidebarHidden("true");
      cy.get("button").click();

      cy.get("a[href='#introduction']").click();
      sidebarHidden("true");
      checkIfHeaderInactive();
    });
  });
  context("Check sidebar", () => {
    it("should be toggleable", () => {
      sidebarHidden("true");
      cy.get("button")
        .should("have.attr", "aria-expanded", "false")
        .and("have.attr", "aria-label", "Open menu")
        .click();
      sidebarHidden("false");
      cy.get("button")
        .should("have.attr", "aria-expanded", "true")
        .and("have.attr", "aria-label", "Close menu")
        .click();
      sidebarHidden("true");
    });
    it("should wrap the tabbing", () => {
      cy.get("button").click().wait(500);

      cy.get("button")
        //@ts-ignore
        .tab()
        .tab()
        .tab()
        .tab()
        .focus()
        .tab()
        .wait(500)
        .should("have.attr", "aria-expanded");
    });
    it("should close when clicking outside the sidebar", () => {
      cy.get("button").click().wait(500);

      cy.get("main").click({ force: true });
      sidebarHidden("true");

      cy.get("button").click().wait(500);
      cy.get("a[href='#introduction']").click();
      sidebarHidden("true");

      cy.get("footer").scrollIntoView();
      cy.get("button").click().wait(500);

      cy.get("footer").click({ force: true });
      sidebarHidden("true");
    });
  });
});

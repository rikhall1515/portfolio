/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
require("cypress-plugin-tab");
declare namespace Cypress {
  interface Chainable<Subject = any> {
    isWithinViewport(): Chainable<any>;
    isOutsideViewport(): Chainable<any>;
  }
}

Cypress.Commands.add("isWithinViewport", { prevSubject: true }, (subject) => {
  const rect = subject![0].getBoundingClientRect();
  expect(rect.top).gte(window.innerHeight);
  expect(rect.bottom).to.be.greaterThan(window.innerHeight);

  return subject;
});

Cypress.Commands.add("isOutsideViewport", { prevSubject: true }, (subject) => {
  const rect = subject![0].getBoundingClientRect();

  expect(rect.top).not.to.be.within(0, window.innerHeight);
  expect(rect.bottom).not.to.be.within(0, window.innerHeight);

  return subject;
});

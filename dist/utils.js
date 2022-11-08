"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainer = getContainer;
exports.getFirstElement = getFirstElement;
function getFirstElement(jqueryOrElement) {
  if (Cypress.dom.isJquery(jqueryOrElement)) {
    return jqueryOrElement.get(0);
  }
  return jqueryOrElement;
}
function getContainer(container) {
  const subject = cy.currentSubject();
  const withinContainer = cy.state('withinSubject');
  if (!subject && withinContainer) {
    return getFirstElement(withinContainer);
  }
  return getFirstElement(container);
}

/* globals Cypress, cy */
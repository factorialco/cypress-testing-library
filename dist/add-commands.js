"use strict";

var _ = require("./");
_.commands.forEach(({
  name,
  command,
  options = {}
}) => {
  Cypress.Commands.add(name, options, command);
});
Cypress.Commands.add('configureCypressTestingLibrary', config => {
  (0, _.configure)(config);
});

/* global Cypress */
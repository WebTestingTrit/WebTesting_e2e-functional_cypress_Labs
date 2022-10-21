// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands');
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.indexOf('Uncaught ReferenceError: parcelRequire is not defined')) {
    console.warn('No worries. Parcel related issue');
    return false;
  }
  return true;
});

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
import './commands'

// Bypass Vercel deployment protection for preview deployments.
// Requires VERCEL_AUTOMATION_BYPASS_SECRET to be set as a GitHub Actions secret.
// See: https://vercel.com/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation
// Cypress 16 removed Cypress.env(); secrets are read with cy.env(), which only runs in a command chain.
Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
  return cy.env(['VERCEL_BYPASS_SECRET'], { log: false }).then(({ VERCEL_BYPASS_SECRET: secret }) => {
    if (!secret) return originalFn(url, options)
    const separator = url.includes('?') ? '&' : '?'
    const bypassUrl = `${url}${separator}x-vercel-protection-bypass=${secret}&x-vercel-set-bypass-cookie=true`
    return originalFn(bypassUrl, options)
  })
})

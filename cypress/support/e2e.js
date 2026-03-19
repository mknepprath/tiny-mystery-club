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
const vercelBypassSecret = Cypress.env('VERCEL_BYPASS_SECRET')

if (vercelBypassSecret) {
  Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
    const separator = url.includes('?') ? '&' : '?'
    const bypassUrl = `${url}${separator}x-vercel-protection-bypass=${vercelBypassSecret}&x-vercel-set-bypass-cookie=true`
    return originalFn(bypassUrl, options)
  })
}

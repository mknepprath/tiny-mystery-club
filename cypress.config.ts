import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1300,
  defaultCommandTimeout: 20000,
  video: false,
  projectId: '7om57s',

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false,
  },
})

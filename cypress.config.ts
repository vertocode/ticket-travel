import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		viewportWidth: 1920,
		viewportHeight: 1080,
		setupNodeEvents(on: Cypress.PluginEvents) {
			on('task', {
				// function to log a message in terminal (where cypress is running)
				log(message: string) {
					console.log(message)
					return null
				}
			})
		}
	}
})

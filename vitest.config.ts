import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('.', import.meta.url)),
		}
	},
	test: {
		setupFiles: ['./vitest/setup.ts'],
		environment: 'jsdom',
		include: ['./vitest/**/*.{test,spec}.{js,mjs,ts,mts,cts,jsx,tsx}'],
	},
})
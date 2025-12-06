import type { Config } from 'jest'
import { config as loadDotenv } from 'dotenv'
import { resolve } from 'path'
import nextJest from 'next/jest'

// Load .env.local before nextJest loads next.config.mjs
// Next.js doesn't automatically load .env.local in test mode, so we do it explicitly
loadDotenv({ path: resolve(process.cwd(), '.env.local') })

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)

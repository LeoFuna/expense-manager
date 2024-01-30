import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  // https://jestjs.io/docs/configuration#testenvironment-string
  // Se voce quiser rodar os testes no browser, deve alterar o testEnvironment para jsdom, já que por padrão o jest roda no node
  // caso queira somente em alguns testes vc pode adicionar a tag: /* @jest-environment jsdom */
  // testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
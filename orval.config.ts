import { defineConfig } from 'orval'

export default defineConfig({
  'genkou-api': {
    input: './openapi.json',
    output: {
      mode: 'split',
      target: 'src/generated/endpoints/genkou-api.ts',
      schemas: 'src/generated/model',
      clean: true,
      client: 'react-query',
      httpClient: 'fetch',
    },
  },
})

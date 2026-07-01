import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ATENÇÃO: Substitua abaixo pelo nome exato do seu repositório
  base: '/Convite/' 
})

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

 
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_PUBLIC_CLIENT_ID': JSON.stringify(env.VITE_PUBLIC_CLIENT_ID)
    },
    plugins: [react()],
  }
})
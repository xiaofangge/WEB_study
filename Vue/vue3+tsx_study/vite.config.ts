import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from "path";
import dictPlugin from './dictPlugin';

import { VitePluginStyleInject } from "./src/core/plugin/VitePluginStyleInject"
import { VitePluginMicroAppBuild } from './src/core/plugin/VitePluginMicroAppBuild';


export default defineConfig(configEnv => {

  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;

  let ip = viteEnv.VITE_BUILD_IP

  let base = `${process.env.NODE_ENV === 'production' ? ip : ''}${viteEnv.VITE_BASE_URL}`

  if (viteEnv.VITE_BUILD_BASE_URL) {
    base = viteEnv.VITE_BUILD_BASE_URL
  }

  return {
    base,
    plugins: [
      vue(),
      vueJsx(),
      VitePluginStyleInject(),
      dictPlugin({ dictPath: "/src/dict/modules/", dictTypePath: "./dict.d.ts" }),
      viteEnv.VITE_BUILD_BASE_URL ? undefined : VitePluginMicroAppBuild(viteEnv)
    ],
    build: {
      cssCodeSplit: false
    },
    server: {
      hmr: true,
      cors: true,
      host: true,
      port: viteEnv.VITE_BASE_PORT
    },
    vueCompilerOptions: {
      isCustomElement: (tag: string) => {
        return /^xinchao-/.test(tag )
      }
    },     
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
        '~': resolve(process.cwd())
      }
    }
  }
})

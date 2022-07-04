import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
export default defineConfig(({command, mode}) => {
  // npm run dev/ num rum serve - command : serve
  // npm run build - command: build
  return {
    plugins: [vue()]
  }
  return {
    root: process.cwd(),
    base: '/', // 绝对路径/完整路径/空字符串或./
    mode: 'development/production',
    define: '',
    plugins: [],
    publicDir: 'public',//静态资源服务的文件夹
    cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
    resolve: {
      alias: '',
      dedupe: [],
      conditions: [],
      mainFields: [],
      extensions: [],
      preserveSymlinks: false,
    },
    css: {
      modules: '',
      postcss: '',
      preprocessorOptions: {},
    },
    json: {
      namedExports: true,
      stringify: true,
      esbuild: '', // ESBuildOptions/ false
    },
    assetsInclude: '',
    logLevel: '', // info/warn/error/silent
    clearScreen: true,
    envDir: 'root',
    envPrefix: 'VITE_', // import.meta.env
    server: {
      host: '127.0.0.1',
      port: 3000,
      strictPort: '',
      https: '',
      open: '',
      proxy: {},
      cors: '',
      force: true/false,
      hmr: '',
      watch: {},
      middlewareMode: 'ssr/html',
      fs: {
        strict: true, 
        allow: [],
        deny: []
      },
      origin: ''
    },
    build: {
      target: 'modules',
      polyfillModulePreload: boolean,
      outDir: '',
      assetsDir: '', // 相对于outDir而言
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      cssTarget: '',
      sourceMap: false | 'inline' | 'hidden',
      rollupOptions: '',
      commonjsOptions: '',
      dynamicImportVarsOptions: '',
      lib: '',
      manifest: false,
      ssrManifest: false,
      ssr: undefined,
      minify: 'esbuild',
      terserOptions: '',
      write: true,
      emptyOutDir: '',
      brotliSize: true,
      chunkSizeWarningLimit: 500,
      watch: ''
    },
    preview: {
      host: '',
      port: 5000,
      strictPort: '',
      https: '',
      open: '',
      proxy: '',
      cors: ''
    },
    optimizeDeps: {
      entries: '',
      exclude: '',
      include: '',
      keepNames: ''
    },
    ssr: {
      external: '',
      noExternal: '',
      target: 'node' | 'webworkorder',

    }
  }
})

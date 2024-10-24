import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
// import devtools from 'solid-devtools/vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return{
    base: env.VITE_BASE_PATH,
    plugins: [
      /* 
        Uncomment the following line to enable solid-devtools.
        For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
        */
      // devtools(),
      solidPlugin({}),
      tsconfigPaths(),
    ],
    server: {
      port: 7234
    },
    build: {
      target: 'esnext',
    },
    preview: {
      port: 7235,
    }
  };
});

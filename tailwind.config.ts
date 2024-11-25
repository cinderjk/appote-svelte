import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          '50': '#f0f7fe',
          '100': '#dcebfd',
          '200': '#c1defc',
          '300': '#97c9f9',
          '400': '#66acf4',
          '500': '#428cef',
          '600': '#2c6ee4',
          '700': '#2254c5',
          '800': '#2349aa',
          '900': '#224086',
          '950': '#192952',
        }
      }
    }
  },
  plugins: [flowbitePlugin]
} as Config;
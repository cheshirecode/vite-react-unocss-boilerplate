import { defineConfig, presetAttributify, presetWind3 } from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      include: ['index.html', 'src/**/*.{html,jsx,tsx}']
    }
  },
  presets: [presetWind3(), presetAttributify({ prefix: 'w:' })]
});

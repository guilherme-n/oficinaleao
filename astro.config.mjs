import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://oficinaleao.com.br',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // Somente os ícones Phosphor efetivamente usados (build menor)
    icon({
      include: {
        ph: [
          'arrow-down-duotone',
          'check-circle-duotone',
          'engine-duotone',
          'gear-six-duotone',
          'map-pin-duotone',
          'medal-duotone',
          'paint-roller-duotone',
          'quotes-duotone',
          'seal-check-duotone',
          'shield-check-duotone',
          'user-circle-duotone',
          'whatsapp-logo-duotone',
          'x-bold',
        ],
      },
    }),
  ],
  image: {
    // Otimização automática via <Image /> do Astro
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

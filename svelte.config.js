import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
      $stores: 'src/lib/stores'
    }
  }
};

export default config;

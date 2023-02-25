module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
      loader: 'default',
      formats: ['image/webp'],
      unoptimized: true,
    },
    i18n: {
      locales: ['pt-BR','en-US'],
      defaultLocale: 'pt-BR',
      localeDetection: true,
    },
  }
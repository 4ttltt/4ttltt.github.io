const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
} = process.env;

const env = {
  BACKEND_URL: '/4tdltt',
  CANONICAL_URL: 'http://tuthanhdelatoithuong.com',
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
};

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/4tdltt/_next/static/images/',
  }],
  {
    assetPrefix: '/4tdltt',
    basePath: '/4tdltt',
    env,
  },
]);

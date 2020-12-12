<h1 align="center">Welcome to Tu Thanh de latoithuong.com 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Travis Build" src="https://travis-ci.com/james-wallis/wallisconsultancy.svg?token=DMsS4JoCUSe88oxSzNdL&branch=master" />
  <a href="#" target="_blank">
    <img alt="License: Apache License 2.0" src="https://img.shields.io/badge/License-Apache License 2.0-yellow.svg" />
  </a>
</p>

> Website for Wallis Consultancy - Written using Next.js and hosted on GitHub Pages

### 🏠 [Homepage](http://tuthanhdelatoithuong.com)

## Details
* Written in React.js with [Next.js](https://nextjs.org/) to generate static files.
* [Tailwind CSS](https://tailwindcss.com/) to manage styling.
* Hosted on Github pages, Travis-ci to build *master* and push to *gh-pages*.

## Install

```sh
npm install
```

## Usage

### Prerequisites
To  use the application, you need to create a `.env.local` file with the following variables.
[Next.js .env.local](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)

```bash
EMAIL_JS_SERVICE="" # EmailJS Service
EMAIL_JS_TEMPLATE="" # EmailJS Template ID
EMAIL_JS_USER="" # EmailJS User ID
CAPTCHA_SITE_KEY="" # Google Captcha Site Key
```

```sh
npm run build && npm run dev
```

Original source of James Wallis

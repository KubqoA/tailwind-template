const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
  ],

  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
      extensions: ['html']
    }
]
})

const cssnano = require('cssnano')({
    preset: 'default',
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : [],
        ...process.env.NODE_ENV === 'production'
            ? [cssnano]
            : []
    ]
}

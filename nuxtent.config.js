module.exports = {
  content: [
    'now',
    ['articles', {
      page: '/_article',
      permalink: ':year/:slug'
    }],
    ['projects', {
      page: '/projects/_project',
      isPost: false
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://alidcastano.com'
      : 'http://localhost:3000'
  }
}

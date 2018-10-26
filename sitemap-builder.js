require('babel-register');

const router = require('./router').default;
const Sitemap = require('../').default;

(
    new Sitemap(router)
        .build('http://www.ncbacademy.com')
        .save('./sitemap.xml')
);

require('babel-register');
import Sitemap from 'react-router-sitemap';

const router = require('./components/Router').default;


(
    new Sitemap(router)
        .build('http://www.ncbacademy.com')
        .save('./sitemap.xml')
);

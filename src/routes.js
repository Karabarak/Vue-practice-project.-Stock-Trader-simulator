import Header from './components/Header.vue'
import Home from './components/Home.vue'

const Stocks = resolve => {
  require.ensure(['./components/Stocks.vue'], () => {
    resolve(require('./components/Stocks.vue'));
  });
};

const Portfolio = resolve => {
  require.ensure(['./components/Portfolio.vue'], () => {
    resolve(require('./components/Portfolio.vue'));
  });
};

export const routes = [
  {path: '', name: 'home', components: {
    default: Header,
    'home': Home
  }},
  {path: '/Stocks', components: {
    default: Header,
    'stocks': Stocks
  }},
  {path: '/Portfolio', components: {
    default: Header,
    'portfolio': Portfolio
  }}
];

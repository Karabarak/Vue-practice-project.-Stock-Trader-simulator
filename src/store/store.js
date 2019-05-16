//jshint esversion:8

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    portfolio: [],
    stocks: [{
        name: 'BMW',
        price: 81
      },
      {
        name: 'Google',
        price: 44
      },
      {
        name: 'Apple',
        price: 280
      },
      {
        name: 'Twitter',
        price: 6
      }
    ]
  },
  mutations: {
    newDay(state) {
      function random(minVal, maxVal) {
        let randVal = minVal + (Math.random() * (maxVal - minVal));
        return Math.round(randVal);
      }
      state.stocks.forEach((stock) => {
        stock.price += random(-((stock.price/100)*9), (stock.price/100)*10);
      });
    },
    buyStock(state, payload) {
      let stockPrice = payload.quantity * payload.price;
      let updated = false;
      state.funds -= stockPrice;

      let order = {name: payload.name, quantity: payload.quantity};

      state.portfolio.forEach((stock) => {
        if(stock.name === payload.name){
          stock.quantity += payload.quantity;
          updated = true;
        }
      });

      if(!updated){
        state.portfolio.push(order);
      }
    },
    sellStock(state, payload){
      let stockPrice = payload.quantity * payload.price;
      state.portfolio.forEach((stock, i) => {
        if(stock.name === payload.name){
          if(stock.quantity - payload.quantity < 0){
            alert('sell quantity must not exceed owned quantity');
          }else{
            stock.quantity -= payload.quantity;
            state.funds += stockPrice;
            if(stock.quantity === 0){
              state.portfolio.splice(i, 1);
            }
          }
        }
      });
    },
    loadData(state, payload) {
      state.funds = payload.funds;
      state.stocks = payload.stocks;
      state.portfolio = payload.portfolio;
    }
  },
  actions: {
    save(context){
      const data = {
        funds: context.state.funds,
        stocks: context.state.stocks,
        portfolio: context.state.portfolio
      };
      axios.patch('/save.json', data)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    load(context){
      axios.get('save.json')
        .then(res => {
          const data = res.data;
          context.commit('loadData', {funds: data.funds, stocks: data.stocks, portfolio: data.portfolio})
        })
        .catch(error => console.log(error));
    }
  }
});

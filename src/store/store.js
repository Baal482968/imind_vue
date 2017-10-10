import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
      usersProfile: {
        name: 'Benedict Cumberbatch',
        position: 'Financial Manager',
        email: 'baal482968@gmail.com',
        picAddr: 'http://cdn2-www.comingsoon.net/assets/uploads/2016/09/cumberbatchheader.jpg'
      }
    },
    getters: {
        // saleProducts: (state) => {
        //     var saleProducts = state.products.map( product => {
        //         return {
        //             name:  '**' + product.name + '**',
        //             price: product.price / 2,
        //         };
        //     });
        //     return saleProducts;
        // }
    },
    mutations: {
        // reducePrice: (state, payload) => {
        //     state.products.forEach( product => {
        //         product.price -= payload
        //     });
        // }
    },
    actions: {
        // reducePrice: (context, payload) => {
        //     setTimeout(function(){ // reach out for data
        //         context.commit('reducePrice', payload);
        //     }, 2000);
        // }
    }
});

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
        picAddr: 'http://cdn2-www.comingsoon.net/assets/uploads/2016/09/cumberbatchheader.jpg',
        introduction: 'Benedict Timothy Carlton Cumberbatch CBE is an English actor who has performed in film, television, theatre and radio. He is the son of actors Timothy Carlton and Wanda Ventham.'
      },
      projects:[
        { id:'a', name: 'Data Base', status: 'Finished' },
        { id:'b', name: 'System Analysis Design', status: 'Keep updating' },
        { id:'c', name: 'Software Engineering', status: 'Finished' },
        { id:'d', name: 'Jami', status: 'Preparing' }
      ],
      video: {
        name: 'Scientist',
        url: 'https://www.youtube.com/embed/wmVq66yaPV4'
      },
      courses:[
        { id:'db001', name:'DataBase Lesson 1', img:'http://www.dbta.com/Images/Default.aspx?ImageID=19031', url:'https://www.youtube.com/embed/v=1kiCrKr3tw0&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&t=1391s&index=1' },
        { id:'db002', name:'DataBase Lesson 2', img:'http://www.dbta.com/Images/Default.aspx?ImageID=19031', url:'https://www.youtube.com/embed/v=hEduupc3G8g&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&index=2'}
      ]
    },
    getters: {
      getSingleProject: (state, getters) => (id) => {
        return state.projects.find(project => project.id === id)
      }
    },
    mutations: {
      addNode: state => {
        state.projectNode.push({
          x:100, y:100, r:40, stroke:'green', strokeWidth:4, fill:'yellow'
        });
      }
        // reducePrice: (state, payload) => {
        //     state.products.forEach( product => {
        //         product.price -= payload
        //     });
        // }
    },
    actions: {
      addNode: context => {
        context.commit('addNode');
      }
        // reducePrice: (context, payload) => {
        //     setTimeout(function(){ // reach out for data
        //         context.commit('reducePrice', payload);
        //     }, 2000);
        // }
    }
});

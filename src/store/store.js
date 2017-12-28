import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
      usersProfile: {
        name: 'Albert Einstein',
        position: 'Mathematics expert',
        email: 'baal482968@gmail.com',
        picAddr: 'https://pbs.twimg.com/media/BmB3-oeCUAAO7M6.jpg',
        introduction: 'Albert Einstein was a German-born theoretical physicist. Einstein developed the theory of relativity, one of the two pillars of modern physics. Einstein\'s work is also known for its influence on the philosophy of science.'
      },
      catalog:[
        { id:'a', name: 'Data Base', status: 'Finished' },
        { id:'b', name: 'System Analysis Design', status: 'Keep updating' },
        { id:'c', name: 'Software Engineering', status: 'Finished' },
        { id:'d', name: 'Jami', status: 'Preparing' }
      ],
      video: {
        name: 'Scientist',
        url: 'https://www.youtube.com/embed/wmVq66yaPV4'
      },
      allCourses:[
        { cid: '1', name: 'DataBase', content:'A database is an organized collection of data. A relational database, more restrictively, is a collection of schemas, tables, queries, reports, views, and other elements.', img:'http://www.dbta.com/Images/Default.aspx?ImageID=19031', url:'https://www.youtube.com/embed/v=1kiCrKr3tw0&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&t=1391s&index=1' },
        { cid: '2', name: 'Python', content: 'Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991', img:'http://dashh.in/wp-content/uploads/2017/03/the-python-programming-language-explained.gif', url:'https://www.youtube.com/embed/v=hEduupc3G8g&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&index=2'},
        { cid: '3', name: 'SAD', content: 'It is a process of planning a new business system or replacing an existing system by defining its components or modules to satisfy the specific requirements. Before planning, you need to understand the old system thoroughly and determine how computers can best be used in order to operate efficiently.', img: 'http://slideplayer.com/slide/8102272/25/images/1/Systems+Analysis+and+Design.jpg', url: 'https://www.youtube.com/embed/v=zwJw1geTW8I&list=PLz7Y9Eb5_2q8nVhzLM_NwnuTUO_ik-EBZ&index=1' },
        { cid: '4', name: 'Java', content: 'Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible', img: 'https://fossbytes.com/wp-content/uploads/2017/09/Why-is-Java-the-best-programming-Language.png', url: 'https://www.youtube.com/embed/v=mImRI_I6GJc&index=2&list=PLz7Y9Eb5_2q8nVhzLM_NwnuTUO_ik-EBZ' },
        { cid: '5', name: 'CSS', content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language', img: 'https://cdn.lynda.com/course/609030/609030-636402179425109240-16x9.jpg', url: 'https://www.youtube.com/embed/v=8LXOTA1vMbY&list=PLz7Y9Eb5_2q8nVhzLM_NwnuTUO_ik-EBZ&index=3' }
      ],
      learningCourses:[
        { cid: '4', name: 'Java', content: 'Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible', img: 'https://fossbytes.com/wp-content/uploads/2017/09/Why-is-Java-the-best-programming-Language.png', url: 'https://www.youtube.com/embed/v=mImRI_I6GJc&index=2&list=PLz7Y9Eb5_2q8nVhzLM_NwnuTUO_ik-EBZ' },
      ],
      completedCourses:[
        { cid: '1', name: 'DataBase', content: 'A database is an organized collection of data. A relational database, more restrictively, is a collection of schemas, tables, queries, reports, views, and other elements.', img: 'http://www.dbta.com/Images/Default.aspx?ImageID=19031', url: 'https://www.youtube.com/embed/v=1kiCrKr3tw0&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&t=1391s&index=1' },
        { cid: '2', name: 'Python', content: 'Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991', img: 'http://dashh.in/wp-content/uploads/2017/03/the-python-programming-language-explained.gif', url: 'https://www.youtube.com/embed/v=hEduupc3G8g&list=PLz7Y9Eb5_2q87p84bXA4e-LEWumrDNQo5&index=2' },
        { cid: '3', name: 'SAD', content: 'It is a process of planning a new business system or replacing an existing system by defining its components or modules to satisfy the specific requirements. Before planning, you need to understand the old system thoroughly and determine how computers can best be used in order to operate efficiently.', img: 'http://slideplayer.com/slide/8102272/25/images/1/Systems+Analysis+and+Design.jpg', url: 'https://www.youtube.com/embed/v=zwJw1geTW8I&list=PLz7Y9Eb5_2q8nVhzLM_NwnuTUO_ik-EBZ&index=1' }
      ],
      notes: [],
      activeNote: {}
    },
    getters: {
      // getSingleProject: (state, getters) => (id) => {
      //   return state.projects.find(project => project.id === id)
      // }
    },
    mutations: {
      // addNode: state => {
      //   state.projectNode.push({
      //     x:100, y:100, r:40, stroke:'green', strokeWidth:4, fill:'yellow'
      //   });
      // }
        // reducePrice: (state, payload) => {
        //     state.products.forEach( product => {
        //         product.price -= payload
        //     });
        // }
    },
    actions: {
      // addNode: context => {
      //   context.commit('addNode');
      // }
        // reducePrice: (context, payload) => {
        //     setTimeout(function(){ // reach out for data
        //         context.commit('reducePrice', payload);
        //     }, 2000);
        // }
    }
});

import axios from 'axios';

const state = {
    todos:[]
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos',res.data);
    },
    async addTodo({ commit },title){
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false});
        commit('addTodo',res.data);
    },
    async deleteTodo({ commit },id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo',id);
    },
    async updateTodo({ commit },todo){
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
        commit('updateTodo',todo);
    }
}

const mutations = {
    setTodos: (state,todos) => (state.todos=todos),
    addTodo: (state,todo) => (state.todos=[todo,...state.todos]),
    deleteTodo: (state,id) => (state.todos= state.todos.filter(elem => elem.id != id)),
    updateTodo: (state, todo) => {
        const ind = state.todos.findIndex(elem => elem.id === todo.id);
        if(ind !== -1){
            state.todos.splice(ind,1,todo);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
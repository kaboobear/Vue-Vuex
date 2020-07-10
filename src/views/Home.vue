<template>
  <div>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos class="todos"/>
  </div>
</template>

<script>
import Todos from '../components/todos';
import AddTodo from '../components/addTodo';
import {mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  methods:{
    ...mapActions(['fetchTodos']),
  },
  created(){
    this.fetchTodos();
  }
}
</script>

<style>

</style>

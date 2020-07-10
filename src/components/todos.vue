<template>
    <div class="todos">
        <div class="todo-wrap" v-for="todo in allTodos" v-bind:key="todo.id">
            <Todo v-bind:todo="todo"/>
        </div>
    </div>
</template>

<script>
    import Todo from './todo';
    import {mapGetters} from 'vuex';

    export default {
        name : 'Todos',
        props: ["todos"],
        computed: mapGetters(['allTodos']),
        components:{Todo},
    }
</script>

<style scoped>
    .todos{
        display: flex;
        flex-wrap:wrap;
        margin: -10px;
        margin-top: 15px;
        padding-bottom: 30px;
    }
</style>
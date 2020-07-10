<template>
    <div @dblclick="onChange" class="todo-item" v-bind:class="{'active':todo.completed}">
        <div class="todo-head">
            <v-icon class="del" v-on:click="del" name="trash"/>
        </div>

        <span class="todo-title">
            {{todo.title}}
        </span>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {    
        name : 'Todo',
        props: ["todo"],
        methods: {
            ...mapActions(['deleteTodo','updateTodo']),
            onChange: function() {
                const newTodo = {
                    id: this.todo.id,
                    title: this.todo.title,
                    completed: !this.todo.completed
                }

                this.updateTodo(newTodo);
            },
            del: function(){
                this.deleteTodo(this.todo.id);
            }
        },
    }
</script>

<style>
    .todo-wrap{
        width: 33.3333%;
        padding: 10px;
    }

    .todo-item{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: .2s;
        box-shadow: 0 3px 5px rgba(0,0,0,.2);
        overflow: hidden;
    }

    .todo-head{
        padding: 10px;
        padding-right: 15px;
        background: #595386;
        display: flex;
        justify-content: flex-end;
    }

    .todo-item:hover{
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }

    .todo-item.active .todo-head{
        background: #4c98cf;
    }

    .todo-title {
        padding: 10px 15px;
        display: inline-block;
    }

    .del{
        color:#fff;
        cursor: pointer;
        width: 17px;
    }

    .del:hover{
        opacity: .8;
    }

</style>
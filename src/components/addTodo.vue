<template>
    <div class="">
        <form @submit="submit">
            <input type="text" placeholder="Text..." v-model="title" name="title">
            <button class="btn" type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name : 'addTodo',
        data() {
            return {
                title:''
            }
        },
        methods:{
            ...mapActions(['addTodo']), 
            submit(e){
                e.preventDefault();
                this.addTodo(this.title);
                this.title = '';
            }
        }
    }
</script>

<style scoped>
    form{
        display: flex;
        border-bottom:1px solid#fff;
    }

    form input{
        flex:1;
        padding: 13px;
        padding-left: 15px;
        border:none;
        border:1px solid #40c8c3;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 18px;
    }


    form input:focus{
        outline: none;
    }

    form button{
        padding: 10px;
        text-align: center;
        width: 150px;
        background: #40c8c3;
                border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        color:#fff;
        font-size: 18px;
        border:none;
        cursor: pointer;
        outline: none;
    }
</style>
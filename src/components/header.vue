<template>
    <div class="header">
        <div class="container">
            <div class="header-title">
                Todo List
            </div>

            <div class="header-buttons">
                <router-link exact to="/">Home</router-link>
                <router-link exact to="/about">About</router-link>
                <router-link exact to="/contacts">Contacts</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'header',
    }
</script>

<style scoped>
    .header{
        padding: 12px;
        background: #333;
        border-bottom:1px solid#fff;
        margin-bottom: 15px;
    }

    .header .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-title{
        font-size: 25px;
        color:#fff;
        text-align: center;
    }

    .header-buttons > *{
        color:#fff;
        text-decoration: none;
        font-size: 16px;
        font-weight: 300;
    }

    .header-buttons a + a{
        margin-left: 15px;
    }

    .header-buttons .router-link-active{
        color: #40c8c3;
    }
</style>
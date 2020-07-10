<template>
    <div id="app" class="wrapper">
        <Header/>

        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from './components/header';

    export default {
        name : 'App',
        components:{Header},
    }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    line-height: 1.3;
    font-family: sans-serif;
  }

  .container{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }

  .about-links{
      margin-top: 15px;
  }

  .about-links a {
      display: inline-block;
      padding: 10px;
      text-decoration: none;
      background: #40c8c3;
      color: #fff;
      border-radius: 10px;
  }

  .about-links a + a{
      margin-left: 10px;
  }

  .info-page{
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 20px;
  }
</style>
<template>
  <div id="sh-app" class="template-red container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  body{
    margin: 0;
    display: flex;
    justify-content: center;
  }



  #sh-app{
    /* min-width:100vw; */
    min-height:100vh;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(127,160,255,1) 100%);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.42);
  }

  .sh-form > input {
    color: #e61664;
    border-radius: 21px;
    width: 80%;
    height: 2.2em;
    padding: 10px 20px;
    margin-left: 5%;
    font-weight: bold;
    border-style: solid;
    border-color: #e61664;
  }
</style>

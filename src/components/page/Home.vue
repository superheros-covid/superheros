<template>
  <div class="home">
      <div class="flex-column">
        <header class="row">
          <img src="../../assets/image/logo.png" alt="Vous êtes super" class="col-10 col-push-1">
        </header>

        <div class="row">
          <div class="col-12 text-center">
            <Button :to="{ name: 'login'}" btn-class="btn-primary btn-lg">Démarrer</Button>
          </div>
        </div>

        <footer class="row">
          <img src="../../assets/image/bg.png" class="col-12">
        </footer>
      </div>
  </div>
</template>

<script>
import Button from '../atom/Button';

export default {
  name: 'home',
  components: { Button },
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
  header{
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 4em;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  footer .col-12{
    padding-left: 0;
    padding-right: 0;
  }
</style>

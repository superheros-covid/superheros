<template>
  <div>
    <router-link v-if="this.to" :to="this.to" class="btn" :class="this.btnClass"><slot></slot></router-link>
    <button v-else class="btn" @click="this.callback" :class="this.btnClass"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'cta-button',
  props: {
    to: Object,
    btnClass: String,
    callback: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/scss/bootstrap_custom";
  .btn {
    border-radius: 35px;
  }
  .btn-primary {
    color: $btnPrimaryColor;
    background-color: $btnPrimaryBgColor;
    border-color: $btnPrimaryBgColor;
  }
</style>

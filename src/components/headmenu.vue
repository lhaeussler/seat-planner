<template>
  <div id="headMenu">
    <div id="headerFrame">
      <b-button class="toggle-btn btn btn-eft" @click="toggleModal"><span>Login</span></b-button>
    </div>
    <b-img src="https://gitlab.addmore.de/uploads/-/system/appearance/header_logo/1/addmore.png" style="position: absolute; top: 30px; left: 30px;"></b-img>
<!--//Login Modal-->
    <b-modal ref="login-modal" hide-footer title="Login" class="head_mdl">
      <div class="d-block text-center">

      </div>
    </b-modal>

  </div>
</template>


<script>
  export default {
    name: "headmenu",
    methods: {
      toggleModal() {
        this.$refs['login-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>

<style scoped>
#headerFrame{
  width: 100%;
  height: 40px;
  top: 30px;
  background-color: #2c3e50;
}
</style>
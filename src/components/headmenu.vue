<template>
  <div id="headMenu">
    <div id="headerFrame">
      <b-button class="toggle-btn btn btn-eft" @click="login()">
        <span>Login</span></b-button>
      <b-button class="toggle-btn btn btn-eft" @click="login()">
        <span v-if="loading">Loading...</span>
        <span v-else>Login</span>
        <span v-if="permissionError">Fehler</span>
      </b-button>
      <b-button class="toggle-btn btn btn-eft" @click="login()" v-if="permissionError">
        <span>Login</span></b-button>
    </div>
    <b-img src="https://gitlab.addmore.de/uploads/-/system/appearance/header_logo/1/addmore.png" style="position: absolute; top: 25px; left: 30px;"></b-img>
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
    data() {
      return {
        loading: false,
        permissionError: false,
      }
    },
    methods: {
      toggleModal() {
        this.$refs['login-modal'].toggle('#toggle-btn')
      },
      login() {
        this.loading = true;
        this.permissionError = false;

        this.$store.dispatch("login").then((response)=>{
          if(response.success) {
            console.log(response);
            this.$store.commit('add_token', response.token);
            this.$store.commit('isAuthenticated', true);
            this.$store.commit('set_user', response.user);
            this.$router.push({name : "home"})
          } else {
            this.permissionError = true;
          }
        }).then(()=>{
          this.loading = false;
        })
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
<template>
  <div id="headmenu">

    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col offset-md=9>
          <b-button class="toggle-btn btn btn-eft" @click="toggleModal">Login</b-button>
        </b-col>

      </b-row>
    </b-container>
<!--//Login Modal-->
    <b-modal ref="login-modal" hide-footer title="Login">
      <div class="d-block text-center">

      </div>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Close</b-button>
    </b-modal>

  </div>
</template>


<script>
  export default {
    name: "headmenu",
    methods: {
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['login-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>

<style scoped>
</style>
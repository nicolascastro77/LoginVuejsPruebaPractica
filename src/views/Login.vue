<template>
  <b-container id="mainContainer" align-v="center">
    <b-row align-v="center" align-h="center">
      <b-col md="6">
        <FormLogin />
      </b-col>
      <b-col md="6">
        <b-img
          src="https://www.digiworld.com.co/assetsInicio/img/img-design.png"
          fluid
          class="businessImg"
          center
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormLogin from "../components/FormLogin";

export default {
  components: {
    FormLogin,
  },
};
</script>

<style lang="scss">
#mainContainer {
  width: 100%;
  height: auto;
  position: relative;
}
</style>

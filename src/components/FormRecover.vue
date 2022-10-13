<template>
  <div>
    <b-card id="cardLogin" class="bounce-in-top">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formLogin">
        <h1 class="text-center mb-3">Recuperar Contraseña</h1>
        <h2 class="text-center mb-4">
          Ingrese el correo electrónico de su cuenta
        </h2>

        <b-form-group id="input-group-1" label-for="email">
          <b-form-input
            id="email"
            class="input"
            v-model="form.email"
            type="email"
            placeholder="Correo electronico"
            required
          ></b-form-input>
        </b-form-group>

        <div class="d-flex justify-content-center mt-3">
          <a href="#">
            <font-awesome-icon icon="arrow-right" class="arrow-btn" />
          </a>
        </div>

        <div class="d-flex justify-content-center flex-wrap mt-4 register">
          <span class="mr-2">Recuperaste la cuenta?</span>
          <a @click="$router.go(-1)" class="loginAccount">Entrar</a>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/animations.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/fonts.scss";

body {
  font-family: $OpenSans !important;
}

#cardLogin {
  border-radius: 15px;
  box-shadow: 0px 0px 10px $gray;

  #formLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    position: relative;

    h1 {
      color: $primary;
      font-weight: 700;
      font-family: $Poppins;
    }

    h2 {
      font-size: 1.2rem;
      color: $lightBlack;
      font-weight: 600;
      font-family: $Poppins;
    }

    .other-account {
      color: $gray;
    }

    .icons {
      width: 30px;
      cursor: pointer;
    }

    .input {
      border-radius: 10px;
    }

    .remember {
      color: $lightBlack;
    }

    .blob {
      position: absolute;
      top: -15%;
      left: -12%;
      width: 150px;
      opacity: 0.2;
    }
  }

  /* .logoLogin {
    margin: 0 auto;
    width: 100px;
  } */

  .forgotPassword {
    color: $gray;
    text-decoration: none;

    &:hover {
      color: $primary;
      transition: 0.5s ease-in-out;
    }
  }

  /* .btn-login {
    width: 200px;
    background-color: $primary;
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px;

    &:hover {
      background-color: $secondary;
      transition: 0.5s ease-in-out;
    }
  } */

  .arrow-btn {
    width: 100px;
    border-radius: 15px;
    background: $primary;
    color: #fff;
    font-size: 60px;
    padding: 5px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background: $secondary;
      transition: 0.5s ease-in-out;
      box-shadow: none;
    }
  }

  .register {
    span {
      color: $lightBlack;
    }

    .loginAccount {
      color: $primary;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
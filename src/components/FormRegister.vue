<template>
  <div>
    <b-card id="cardLogin" class="bounce-in-top">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formLogin">
        <h1 class="text-center mb-3">Registro</h1>

        <b-form-group id="input-group-1" label-for="input-8">
          <b-form-input
            id="username"
            class="input"
            v-model="form.username"
            type="text"
            placeholder="Usuario"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="passord"
            class="input"
            v-model="form.password"
            placeholder="Contraseña"
            type="password"
            required
          ></b-form-input>
        </b-form-group>



        <b-form-group id="input-group-1" label-for="email">
          <b-form-input
            id="name"
            class="input"
            v-model="form.name"
            type="text"
            placeholder="Nombre"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-3" label-for="input-5">
        <b-form-select
          id="Td"
          v-model="form.td"
          :options="tds"
          required
        ></b-form-select>
      </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="tiped"
            class="input"
            v-model="form.tiped"
            placeholder="No de documento"
            type="text"
            required
          ></b-form-input>
        </b-form-group>



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

        <b-form-group id="input-group-1" label-for="input-7">
          <b-form-input
            id="phone"
            class="input"
            v-model="form.phone"
            type="text"
            placeholder="Celular"
            required
          ></b-form-input>
        </b-form-group>


       
        <b-form-group id="input-group-3" label-for="input-3">
        <b-form-select
          id="Rol"
          v-model="form.rol"
          :options="rols"
          required
        ></b-form-select>
      </b-form-group>

        <div class="d-flex justify-content-start flex-wrap">
          <b-form-checkbox value="remember" class="remember"
            >Acepto los terminos y condiciones</b-form-checkbox
          >
        </div>

 
        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="primary" class="btn-login"
            >Entrar <font-awesome-icon icon="arrow-right" class="arrow"
          /></b-button>
        </div>

        <!-- <div class="d-flex justify-content-center mt-3">
          <a href="#">
            <font-awesome-icon icon="arrow-right" class="arrow-btn" />
          </a>
        </div> -->

        <div class="d-flex justify-content-center flex-wrap mt-4 register">
          <span class="mr-2">¿Tienes una cuenta?</span>
          <a @click="$router.go(-1)" class="loginAccount">Entrar</a>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        username:"",
        tiped:"",
        email: "",
        phone:"",
        name: "",
        rol: null,
        td: null,
        password:"",
        checked: [],
      },
      rols: [{ text: 'Seleccione su Rol', value: null }, 'Profesor', 'Alumno'],
      tds: [{ text: 'Tipo de documento', value: null }, 'CC', 'Pásaporte','DNI', 'TI'],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));

      let json = 
      {
        "username": this.username,
        "passWord": this.password,
        "name": this.name,
        "tipe_document": this.td,
        "document": this.tiped,
        "email": this.email,
        "phone": this.phone,
        "rol": this.rol
      }
      axios.post('http://54.242.120.40:3000/auth/register',json)
      .then(data => {
        console.log(data);
      })

    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.form.tiped = "";
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.rol = null;
      this.form.td = null;
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
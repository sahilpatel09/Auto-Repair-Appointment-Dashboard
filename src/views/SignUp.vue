<template>
  <div v-if="sloading" class="text-center form-body">
    <img src="../assets/GIF/auto.gif" />
  </div>
  <div v-else class="text-center form-body">
    <form class="form-signin" @submit.prevent="createUser">
      <img class="mb-2" src="../assets/autologo.png" alt="" height="170" />
      <label for="inputName" class="sr-only">Name</label>
      <input
        type="text"
        id="inputName"
        class="form-control"
        placeholder="Full Name"
        v-model="user.name"
        required
        autofocus
      />
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="user.email"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <div class="checkbox mb-3">
        <label class="whiteColor">
          <input type="checkbox" value="remember-me" class="whiteColor" />
          Remember me
        </label>
      </div>

      <button class="btn btn-lg buttonColor btn-block" type="submit">
        Sign up
      </button>
      <div class="checkbox mb-3">
        <label class="acc">
          <span class="whiteColor">Already have an account.</span>
          <a href="/" class="link text-decoration-none">Log in.</a>
        </label>
      </div>
      <br />
      <p class="text-warning" v-if="warning">Error: {{ warning }}</p>
      <p class="mt-5 mb-3 text-muted">
        &copy; {{ new Date().getFullYear() }} All Rights Reserved. |
        {{ this.$myGlobalVariable }}
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "SignUp",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      sloading: true,
      warning: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/dashboard");
      } else {
        this.sloading = false;
      }
    });
  },
  methods: {
    createUser() {
      this.sloading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/dashboard");
            });
        })
        .catch((err) => {
          this.sloading = false;
          this.warning = err.message.split(":")[1];
        });
    },
  },
};
</script>

<style lang="css" scoped>
.whiteColor {
  color: white !important;
}
.link {
  color: #f1471d;
}
.link:hover {
  color: #f46c4a;
  font-weight: bolder;
  font-style: italic;
  transition: 300ms color;
}
.buttonColor {
  color: ghostwhite;
  background-color: #bb3615;
}
.form-body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-color: #1a1a1a;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}

.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
}

.form-signin input[type="checkbox"] {
  color: red;
}

.acc {
  font-size: 16px;
  color: #f1471d;
  float: right;
  padding-top: 3px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a9a9a9;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #a9a9a9;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #a9a9a9;
}
</style>

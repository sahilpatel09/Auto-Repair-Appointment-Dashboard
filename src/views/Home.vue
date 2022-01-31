<template>
  <div v-if="loading" class="text-center form-body">
    <img src="../assets/GIF/auto.gif" />
  </div>
  <div v-else class="text-center form-body">
    <form class="form-signin" @submit.prevent="login">
      <img class="mb-2" src="../assets/autologo.png" alt="" height="170" />
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
        Sign in
      </button>
      <div class="checkbox mb-3">
        <label class="acc">
          <span class="whiteColor">Don't have an account.</span>
          <a href="/signup" class="link text-decoration-none">Sign Up.</a>
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
  name: "Home",

  data() {
    return {
      loading: true,
      user: {
        email: "",
        password: "",
      },
      warning: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/dashboard");
      } else {
        this.loading = false;
      }
    });
  },
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.loading = false;
          this.warning = error.message.split(":")[1];
        });
    },
  },
};
</script>

<style lang="css" scoped>
.whiteColor {
  color: var(--white) !important;
}
.buttonColor {
  color: var(--gwhite);
  background-color: #bb3615;
}
.link {
  color: var(--lightorange);
}
.link:hover {
  color: #f46c4a;
  font-weight: bolder;
  font-style: italic;
  transition: 300ms color;
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
  color: var(--lightorange);
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

<template>
  <div v-if="sloading" class="text-center form-body">
    <img src="../assets/GIF/auto.gif" />
  </div>
  <div v-else class="text-center form-body">
    <form class="form-signin" @submit.prevent="createUser">

      <img class="" src="../assets/autologo.png" alt="" height="170" />
      <h1 class="mb-2">Add Your Address</h1>
      <label for="inputName" class="sr-only">Street Name</label>
      <input
        type="text"
        id="inputStreetName"
        class="form-control"
        placeholder="Street Name"
        v-model="address.streetName"
        required
        autofocus
      />
      <label for="inputUnit" class="sr-only">Unit no</label>
      <input
        type="text"
        id="inputUnit"
        class="form-control"
        placeholder="Unit no"
        v-model="address.unit"
        required
        autofocus
      />
      <label for="inputLocation" class="sr-only">Location</label>
      <input
        type="text"
        id="inputLocation"
        class="form-control"
        placeholder="City ZIP Ex: Saskatoon S7M 3R5 "
        v-model="address.provinceZip"
        required
      />

      <button class="btn btn-lg buttonColor btn-block" type="submit">
        Sign up
      </button>
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
//import { getFirestore, collection, addDoc } from "firebase/firestore"
import { getFirestore,  doc, setDoc } from "firebase/firestore"

export default {
  name: "GetUserDetails",

  data() {
    return {
      address: {
        streetName: "",
        unit: "",
        provinceZip: "",
      },
      firebaseUserID: null,
      firebaseUserName: "",
      sloading: false,
      warning: "",
    };
  },
  created() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.firebaseUserName = user.displayName
        this.firebaseUserID = user.uid
      } else {
        this.$router.push("/signup");
      }
    });

  },
  methods: {
    createUser() {
      this.sloading = true;

     const db = getFirestore();
      
      try {

        const docRef = setDoc(doc(db, "userDetails", this.firebaseUserID), {
          name: this.firebaseUserName,
          addressUnit: this.address.unit,
          addressStreetName: this.address.streetName,
          addressCityZip: this.address.provinceZip,
          id: this.firebaseUserID,
          onboarded: "false"
        });
        this.$router.push('select-vehicle');


        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }



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
  width: 100vw;
  height: 100vh;
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
  position: fixed;
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

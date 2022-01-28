<template>
  <div class="container-fluid middle">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-5">
        <img class="mb-2 img-fluid rounded" :src="carImage" alt="" height="0" />
      </div>
      <div
        class="col-md-5 d-sm-flex justify-content-sm-center d-xs-flex justify-content-xs-center data"
      >
        <form class="form-signin" @submit.prevent="logit">
          <label for="" class="h3">Select Your Vehicle</label>

          <select
            class="form-control selectOptions"
            aria-label="Default select example"
            v-model="makeHolder"
          >
            <option selected>Choose Make...</option>
            <option
              v-for="(item, index) in carMakesList"
              :key="item"
              :value="item.name"
            >
              {{ index }}
            </option>
          </select>

          <select
            class="form-control selectOptions"
            aria-label="Default select example"
            v-if="makeHolder !== 'Choose Make...'"
            v-model="modelHolder"
            v-on:change="changeImage()"
          >
            <option selected value="Choose Model...">Choose Model...</option>

            <option
              v-for="item in sendModels"
              :key="item.name"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
          {{ makeHolder }}
          {{ modelHolder }}
          <!--     <select class="form-control selectOptions" aria-label="Default select example" v-if="modelHolder !== 'Choose Make...'" v-model="yearHolder">
        <option selected>Choose Year...</option>
        
        <option v-for="item in sendYears" :key="item.name" :value="item.name">
        
          <div v-if="item.name === modelHolder">
            {{item.year}}
          </div> 
        
    </option>
    </select> -->

          <button class="btn btn-lg buttonColor btn-block" type="submit">
            Add Vehicle
          </button>
          <p class="mt-5 mb-3 text-muted">
            &copy; {{ new Date().getFullYear() }} All Rights Reserved. |
            {{ this.$myGlobalVariable }}
          </p>
        </form>
      </div>
    </div>
  </div>
  <!-- 	<div class="text-center form-body">
    <img class="mb-2" src="../assets/autologo.png" alt="" height="170px" />
    <div class="col-md-6"></div>
    <div class="col-md-6">
      
      <form class="form-signin">
      <label for="inputName" class="sr-only">Name</label>
      <input type="text" id="inputName" class="form-control" placeholder="Full Name" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    

      <button class="btn btn-lg buttonColor btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; {{ new Date().getFullYear() }} All Rights Reserved. | {{this.$myGlobalVariable}}</p>
    </form>
    </div>

	</div> -->
</template>

<script>
export default {
  name: "SelectVehicle",

  data() {
    return {
      carMakesList: {
        Mahindra: {
          name: "Mahindra",
          models: {
            XUV700: {
              name: "XUV700",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=85&wm=1",
            },
            Scorpio: {
              name: "Scorpio",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85&wm=1",
            },
            Thar: {
              name: "Thar",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40087/thar-exterior-right-rear-three-quarter.jpeg?q=85&wm=1",
            },
          },
        },
        BMW: {
          name: "BMW",
          models: {
            "BMW 3 Series": {
              name: "BMW 3 Series",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-right-front-three-quarter-2.jpeg?q=85&wm=1",
            },
            "BMW X1": {
              name: "BMW X1",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/45242/bmw-x1-facelift-left-side-view0.jpeg?q=85&wm=1",
            },
            "BMW 2 Series Gran Coupe": {
              name: "BMW 2 Series Gran Coupe",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/48034/2-series-gran-coupe-exterior-right-front-three-quarter-2.jpeg?q=85&wm=1",
            },
          },
        },
        Hyundai: {
          name: "Hyundai",
          models: {
            Creta: {
              name: "Creta",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/41564/creta-exterior-right-front-three-quarter-2.jpeg?q=85&wm=1",
            },
            Venue: {
              name: "Venue",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/35455/venue-exterior-right-front-three-quarter.jpeg?q=85&wm=1",
            },
            i20: {
              name: "i20",
              image:
                "https://imgd.aeplcdn.com/1056x594/n/cw/ec/40530/i20-exterior-left-rear-three-quarter-7.jpeg?q=85&wm=1",
            },
          },
        },
      },
      makeHolder: "Choose Make...",
      modelHolder: "Choose Model...",
      yearHolder: "Choose Year...",
      carImage: require("@/assets/autologo.png"),
    };
  },
  computed: {
    sendModels() {
      return this.carMakesList[this.makeHolder].models;
    },
    sendYears() {
      console.log();
      return this.carMakesList[this.makeHolder].models[this.modelHolder];
    },
  },
  methods: {
    logit() {},
    changeImage() {
      this.carImage =
        this.carMakesList[this.makeHolder].models[this.modelHolder].image;
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

.data select {
  color: white;
}

.data select:after {
  color: white !important;
}
.data option:checked {
  background-color: #eee;
  color: #555;
}
.data option:not(:checked) {
  background-color: white;
  color: #000;
}

.middle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

.selectOptions {
  margin-bottom: 10px;
  border-radius: 7px;
  background-color: #345;
  outline: none;
  border: none;
  color: #d3d3d3;
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

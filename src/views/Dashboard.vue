<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div
        class="col-auto col-md-3 col-xl-2 px-sm-2 px-2 transat"
        :style="{ display: menuToggle }"
      >
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
        >
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img src="../assets/autologo.png" class="img-fluid" width="200" />
          </a>

          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link activeColor" aria-current="page">
                <i class="fs-4 bi-house me-2" width="16" height="16"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <i class="fs-4 bi-house me-2" width="16" height="16"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <i class="fs-4 bi-house me-2" width="16" height="16"></i>
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <i class="fs-4 bi-house me-2" width="16" height="16"></i>
                Products
              </a>
            </li>
            <li>
              <a href="/dashboard/profile" class="nav-link text-white">
                <i class="fs-4 bi-house me-2" width="16" height="16"></i>
                Profile
              </a>
            </li>
            <li>
              <div class="cardCoupon">
                <div class="text-center">
                  <div class="d-flex flex-row text-center">
                    <img src="../assets/oil.png" width="70" />
                    <div class="d-flex flex-column ml-1">
                      <h1 class="mb-0 percent">20%</h1>
                      <span class="discount">Discount</span>
                    </div>
                  </div>
                </div>
                <hr class="line" />
                <span class="text-white"
                  >Ultimate discount for all customers on all products at
                  {{ this.$myGlobalVariable }}</span
                >

                <div
                  class="d-flex justify-content-between align-items-center mt-4"
                >
                  <span class="text-white">Active</span>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col" style="background-color: #202634">
        <div class="row" style="background-color: #343a4b">
          <div class="col d-flex justify-content-start">
            <i class="bi bi-list link h1 mt-2" @click="menuToggler"></i>
          </div>
          <div class="col d-flex justify-content-end">
            <div class="dropdown m-2">
              <a
                href="#"
                class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                @click="profileToggler"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  class="rounded-circle"
                />
                <span class="d-none d-sm-inline mx-1">Sahil Patel</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark dropdown-menu-right text-small"
                :style="{ display: profileToggle }"
              >
                <li><a class="dropdown-item" href="#">New project</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" @click="logout">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>





        <main>
        <div class="container-fluid p-0">
          <div class="row mb-2 mb-xl-3">
            <div class="col-auto d-none d-sm-block">
              <h3 class="text-white mt-3"> Welcome Back, Sahil.     </h3>
            </div>
            <div class="col-auto ms-auto text-end mt-n1">
            </div>
          </div>

          <router-view />

        </div>
      </main>



      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
export default {
  name: "Dashboard",

  data() {
    return {
      menuToggle: "none",
      profileToggle: "none",
      carProfileToggle: "none",
      
    };
  },
  methods: {
    logout(){
      firebase.auth()
              .signOut();
    },
    menuToggler() {
      if (this.menuToggle == "none") {
        this.menuToggle = "block";
      } else {
        this.menuToggle = "none";
      }
    },
    
    profileToggler() {
      if (this.profileToggle == "none") {
        this.profileToggle = "block";
      } else {
        this.profileToggle = "none";
      }
    },
    
    carProfileToggler() {
      if (this.carProfileToggle == "none") {
        this.carProfileToggle = "block";
      } else {
        this.carProfileToggle = "none";
      }
    },
  },
};
</script>

<style lang="css" scoped>
.activeColor {
  background-color: #f1471d;
  color: var(--gwhite);
}
.link {
  color: #f1471d;
}
.transat {
  background-color: #293042;
  transform: translateX(0);
  transition: visibility 0s, opacity 0.5s linear;
}

.cardCoupon {
  width: 190px;
  border: none;
  height: 260px;
  border-radius: 7px;
  padding: 15px;
  margin-top: 15px;
  margin-right: 10px;
  background-color: var(--darkbrownorange);
}

.percent {
  font-size: 26px;
  color: #fff;
}

.discount {
  font-size: 17px;
  color: #fff;
}

.line {
  color: #fff;
}

.form-check-input:checked {
  background-color: #f44336;
  border-color: #f44336;
}

.form-check-input:focus {
  border-color: #d50000;
  outline: 0;
  box-shadow: none;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.75em;
  margin-bottom: -5px;
}
.timeline-item::before{
  color: var(--darkorange);
  background-color: var(--lightorange);
  border: 3px solid var(--gwhite);
}
</style>

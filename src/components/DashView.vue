<template>
  <div class="row">
    <div class="col-12 col-lg-8 d-flex">
      <div class="card flex-fill w-100 bg-dark">
        <div class="card-header bg-dark">
          <div class="card-actions float-end">
            <div class="dropdown position-relative">
              <a @click="carProfileToggler">
                <i class="align-middle h3 text-white">...</i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end dropdown-menu-right bg-dark"
                :style="{ display: carProfileToggle }"
              >
                <a class="dropdown-item text-muted" href="#">Change Car</a>
                <a class="dropdown-item text-muted" href="#">Profile</a>
              </div>
            </div>
          </div>
          <h5 class="card-title mb-0 text-white">Audi A6 2012</h5>
        </div>
        <div class="card-body d-flex w-100">
          <div class="align-self-center">
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A6/6426/1571906388003/front-left-side-47.jpg?tr=w-880,h-495"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6 col-xl-4 d-flex">
      <div class="card flex-fill w-100 bg-dark">
        <div class="card-header bg-dark">
          <h5 class="card-title mb-0 text-white">Appointments</h5>
        </div>
        <div class="card-body">
          <ul class="timeline">
            <li class="timeline-item">
              <strong class="text-white">Front Brake Repair</strong>
              <span class="float-end text-muted text-sm">24th Nov, 2020</span>
              <p class="grey">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>

            <li class="timeline-item">
              <strong class="text-white">Engine Light On</strong>
              <span class="float-end text-muted text-sm">24th Nov, 2020</span>
              <p class="grey">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>

            <li class="timeline-item">
              <strong class="text-white">Regular Oil Change</strong>
              <span class="float-end text-muted text-sm">24th Nov, 2020</span>
              <p class="grey">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>

            <li class="timeline-item">
              <strong class="text-white">Computer Diagnostics</strong>
              <span class="float-end text-muted text-sm">24th Nov, 2020</span>
              <p class="grey">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-sm-6 col-xxl-3 d-flex">
      <div class="card illustration flex-fill bg-dark">
        <div class="card-body p-0 d-flex flex-fill">
          <div class="row g-0 w-100">
            <div class="col-6">
              <div class="illustration-text p-3 m-1">
                <h4 class="link">Welcome Back, Sahil!</h4>
                <p class="mb-0 grey">Customer Number: 3543</p>
              </div>
            </div>
            <div class="col-6 align-self-end text-end">
              <img
                src="../assets/logo.png"
                alt="Customer Support"
                class="img-fluid illustration-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-xxl-3 d-flex">
      <div class="card flex-fill bg-dark">
        <div class="card-body py-4">
          <div class="d-flex align-items-start">
            <div class="flex-grow-1">
              <h3 class="mb-2">$ 24.300</h3>
              <p class="mb-2">Total Earnings</p>
              <div class="mb-0">
                <span class="badge badge-soft-success me-2"> +5.35% </span>
                <span class="text-muted">Since last week</span>
              </div>
            </div>
            <div class="d-inline-block ms-3">
              <div class="stat">
                <i
                  class="align-middle text-success"
                  data-feather="dollar-sign"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-2 col-sm-4 col-xs-2 col-xxl-2 d-flex">
      <div class="card flex-fill bg-dark rounded">
        <div class="card-body p-0 d-flex flex-fill">
          <div class="row g-0 w-100">
            <div class="bg-dark">
              <div class="illustration-text p-3 m-1">
                <h4 class="text-white text-center">Diagnostics</h4>
                <p class="text-center">
                  <i
                    class="bi bi-gear-fill display-3 text-center lightOrange"
                  ></i>
                </p>
                <div class="row">
                  <div class="col d-flex justify-content-start h4 text-white">
                    $32
                  </div>
                  <div class="col d-flex justify-content-end h4 text-white">
                    2.5 hour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-2 col-sm-4 col-xs-2 col-xxl-2 d-flex">
      <div class="card flex-fill bg-dark rounded">
        <div class="card-body p-0 d-flex flex-fill">
          <div class="row g-0 w-100">
            <div class="bg-dark">
              <div class="illustration-text p-3 m-1">
                <h4 class="text-white text-center">Tire Repair</h4>
                <p class="text-center">
                  <i class="bi bi-cpu-fill text-center display-4 lightOrange">
                  </i>
                </p>
                <div class="row">
                  <div class="col d-flex justify-content-start h4 text-white">
                    $32
                  </div>
                  <div class="col d-flex justify-content-end h4 text-white">
                    2.5 hour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2 col-sm-4 col-xxl-2 d-flex">
      <div class="card flex-fill bg-dark rounded">
        <div class="card-body p-0 d-flex flex-fill">
          <div class="row g-0 w-100">
            <div class="bg-dark">
              <div class="illustration-text p-3 m-1">
                <h4 class="text-white text-center">Diagnostics</h4>
                <p class="text-center">
                  <i
                    class="bi bi-gear-fill display-3 text-center lightOrange"
                  ></i>
                </p>
                <div class="row">
                  <div class="col d-flex justify-content-start h4 text-white">
                    $32
                  </div>
                  <div class="col d-flex justify-content-end h4 text-white">
                    2.5 hour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-xxl-3 d-flex">
      <div class="card flex-fill bg-dark">
        <div class="card-body py-4">
          <div class="d-flex align-items-start">
            <div class="flex-grow-1">
              <h3 class="mb-2">$ 24.300</h3>
              <p class="mb-2">Total Earnings</p>
              <div class="mb-0">
                <span class="badge badge-soft-success me-2"> +5.35% </span>
                <span class="text-muted">Since last week</span>
              </div>
            </div>
            <div class="d-inline-block ms-3">
              <div class="stat">
                <i
                  class="align-middle text-success"
                  data-feather="dollar-sign"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashView",

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>

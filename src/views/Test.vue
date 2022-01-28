<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.html">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve"
          >
            <path
              d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
            />
            <path
              d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
            />
            <path
              d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
            />
          </svg>

          <span class="align-middle me-3">CMR</span>
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-header">Auto Service</li>
          <li class="sidebar-item active">
            <a
              data-bs-target="#dashboards"
              data-bs-toggle="collapse"
              class="sidebar-link"
            >
              <i class="align-middle" data-feather="sliders"></i>
              <span class="align-middle">Dashboards</span>
              <span class="badge badge-sidebar-primary">5</span>
            </a>
            <ul
              id="dashboards"
              class="sidebar-dropdown list-unstyled collapse show"
              data-bs-parent="#sidebar"
            >
              <li class="sidebar-item active">
                <a class="sidebar-link" href="dashboard-default.html"
                  >Default</a
                >
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <a
              data-bs-target="#pages"
              data-bs-toggle="collapse"
              class="sidebar-link collapsed"
            >
              <i class="align-middle" data-feather="layout"></i>
              <span class="align-middle">Pages</span>
            </a>
          </li>

          <li class="sidebar-header">Booking</li>
          <li class="sidebar-item">
            <a
              data-bs-target="#ui"
              data-bs-toggle="collapse"
              class="sidebar-link collapsed"
            >
              <i class="align-middle" data-feather="grid"></i>
              <span class="align-middle">Appointments</span>
            </a>
            <!--             <ul id="ui" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
              <li class="sidebar-item"><a class="sidebar-link" href="ui-alerts.html">Alerts</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-buttons.html">Buttons</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-cards.html">Cards</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-carousel.html">Carousel</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-embed-video.html">Embed Video</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-general.html">General <span class="badge badge-sidebar-primary">10+</span></a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-grid.html">Grid</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-modals.html">Modals</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-offcanvas.html">Offcanvas</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-placeholders.html">Placeholders</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-tabs.html">Tabs</a></li>
              <li class="sidebar-item"><a class="sidebar-link" href="ui-typography.html">Typography</a></li>
            </ul> -->
          </li>
          <li class="sidebar-item">
            <a
              data-bs-target="#icons"
              data-bs-toggle="collapse"
              class="sidebar-link collapsed"
            >
              <i class="align-middle" data-feather="heart"></i>
              <span class="align-middle">Invoices</span>
              <span class="badge badge-sidebar-primary">1500+</span>
            </a>
          </li>
        </ul>

        <div class="sidebar-cta">
          <div class="sidebar-cta-content">
            <strong class="d-inline-block mb-2">Monthly Sales Report</strong>
            <div class="mb-3 text-sm">
              Your monthly sales report is ready for download!
            </div>

            <div class="d-grid">
              <a
                href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/"
                class="btn btn-primary"
                target="_blank"
                >Download</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="main">
      <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>

        <form class="d-none d-sm-inline-block">
          <div class="input-group input-group-navbar">
            <input
              type="text"
              class="form-control"
              placeholder="Search projects…"
              aria-label="Search"
            />
            <button class="btn" type="button">
              <i class="align-middle" data-feather="search"></i>
            </button>
          </div>
        </form>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">
            <li class="nav-item dropdown">
              <a
                class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>

              <a
                class="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://appstack.bootlab.io/img/avatars/avatar.jpg"
                  class="avatar img-fluid rounded-circle me-1"
                  alt="Chris Wood"
                />
                <span class="text-dark">Chris Wood</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="pages-profile.html"
                  ><i class="align-middle me-1" data-feather="user"></i>
                  Profile</a
                >
                <a class="dropdown-item" href="#"
                  ><i class="align-middle me-1" data-feather="pie-chart"></i>
                  Analytics</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="pages-settings.html"
                  >Settings & Privacy</a
                >
                <a class="dropdown-item" href="#">Help</a>
                <a class="dropdown-item" href="#">Sign out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main class="content">
        <div class="container-fluid p-0">
          <div class="row mb-2 mb-xl-3">
            <div class="col-auto d-none d-sm-block">
              <h3>Dashboard</h3>
            </div>

            <div class="col-auto ms-auto text-end mt-n1">
              <div class="dropdown me-2 d-inline-block">
                <a
                  class="btn btn-light bg-white shadow-sm dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <i class="align-middle mt-n1" data-feather="calendar"></i>
                  Today
                </a>

                <div class="dropdown-menu dropdown-menu-end">
                  <h6 class="dropdown-header">Settings</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>

              <button class="btn btn-primary shadow-sm">
                <i class="align-middle" data-feather="filter">&nbsp;</i>
              </button>
              <button class="btn btn-primary shadow-sm">
                <i class="align-middle" data-feather="refresh-cw">&nbsp;</i>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card illustration flex-fill">
                <div class="card-body p-0 d-flex flex-fill">
                  <div class="row g-0 w-100">
                    <div class="col-6">
                      <div class="illustration-text p-3 m-1">
                        <h4 class="illustration-text">Welcome Back, Chris!</h4>
                        <p class="mb-0">AppStack Dashboard</p>
                      </div>
                    </div>
                    <div class="col-6 align-self-end text-end">
                      <img
                        src="img/illustrations/customer-support.png"
                        alt="Customer Support"
                        class="img-fluid illustration-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">$ 24.300</h3>
                      <p class="mb-2">Total Earnings</p>
                      <div class="mb-0">
                        <span class="badge badge-soft-success me-2">
                          +5.35%
                        </span>
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
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">43</h3>
                      <p class="mb-2">Pending Orders</p>
                      <div class="mb-0">
                        <span class="badge badge-soft-danger me-2">
                          -4.25%
                        </span>
                        <span class="text-muted">Since last week</span>
                      </div>
                    </div>
                    <div class="d-inline-block ms-3">
                      <div class="stat">
                        <i
                          class="align-middle text-danger"
                          data-feather="shopping-bag"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">$ 18.700</h3>
                      <p class="mb-2">Total Revenue</p>
                      <div class="mb-0">
                        <span class="badge badge-soft-success me-2">
                          +8.65%
                        </span>
                        <span class="text-muted">Since last week</span>
                      </div>
                    </div>
                    <div class="d-inline-block ms-3">
                      <div class="stat">
                        <i
                          class="align-middle text-info"
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
            <div class="col-12 col-lg-6 col-xl-4 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header">
                  <div class="card-actions float-end">
                    <div class="dropdown position-relative">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                      >
                        <i
                          class="align-middle"
                          data-feather="more-horizontal"
                        ></i>
                      </a>

                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                  </div>
                  <h5 class="card-title mb-0">Appointments</h5>
                </div>
                <div class="card-body">
                  <ul class="timeline">
                    <li class="timeline-item">
                      <strong>Chat with Carl and Ashley</strong>
                      <span class="float-end text-muted text-sm">30m ago</span>
                      <p>
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                        aliquam ultrices mauris...
                      </p>
                    </li>
                    <li class="timeline-item">
                      <strong>The big launch</strong>
                      <span class="float-end text-muted text-sm">2h ago</span>
                      <p>
                        Sed aliquam ultrices mauris. Integer ante arcu, accumsan
                        a, consectetuer eget, posuere ut, mauris. Praesent
                        adipiscing. Phasellus ullamcorper ipsum rutrum nunc...
                      </p>
                    </li>
                    <li class="timeline-item">
                      <strong>Coffee break</strong>
                      <span class="float-end text-muted text-sm">3h ago</span>
                      <p>
                        Curabitur ligula sapien, tincidunt non, euismod vitae,
                        posuere imperdiet, leo. Maecenas malesuada...
                      </p>
                    </li>
                    <li class="timeline-item">
                      <strong>Chat with team</strong>
                      <span class="float-end text-muted text-sm">30m ago</span>
                      <p>
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="card flex-fill">
            <div class="card-header">
              <div class="card-actions float-end">
                <div class="dropdown position-relative">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    <i class="align-middle" data-feather="more-horizontal"></i>
                  </a>

                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">Latest Projects</h5>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-6 text-start">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Support</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Help Center</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Privacy</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div class="col-6 text-end">
              <p class="mb-0">
                &copy; 2021 -
                <a href="index.html" class="text-muted">AppStack</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {
      noDes: "none",
      menuDes: "none",
    };
  },
  methods: {
    menuBar() {
      if (this.noDes === "none") {
        this.noDes = "block";
      } else {
        this.noDes = "none";
      }
    },
    showMenu() {
      if (this.menuDes === "none") {
        this.menuDes = "block";
      } else {
        this.menuDes = "none";
      }
    },
  },
};
</script>
<style></style>

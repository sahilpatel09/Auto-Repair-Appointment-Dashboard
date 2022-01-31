<template>
  <div class="container-fluid p-0">
    <h1 class="h3 mb-3">Settings</h1>

    <div class="row">
      <!-- <div class="col-md-3 col-xl-2">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">Profile Settings</h5>
          </div>

          <div class="list-group list-group-flush" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              data-bs-toggle="list"
              href="#account"
              role="tab"
              aria-selected="true"
            >
              Account
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#password"
              role="tab"
              aria-selected="false"
            >
              Password
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Privacy and safety
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Email notifications
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Web notifications
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Widgets
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
            >
              Your data
            </a>
            <a
              class="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#"
              role="tab"
            >
              Delete account
            </a>
          </div>
        </div>
      </div>
 -->
      <div class="col-md-12 col-xl-12 p-3">
        <div class="tab-content">
          <div class="tab-pane fade active show" id="account" role="tabpanel">
            <div class="card">
              <div class="card-header">
                <div class="card-actions float-end">
                  <div class="dropdown position-relative">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal align-middle"
                        data-darkreader-inline-stroke=""
                        style="--darkreader-inline-stroke: currentColor"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Public info</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="mb-3">
                        
                        <label for="inputUsername" class="form-label"
                          >Username</label
                        >
                        
                        <input
                          type="text"
                          class="form-control"
                          id="inputUsername"
                          placeholder="Username"
                        />

                      </div>
                      <div class="mb-3">
                        
                        <label for="inputUsername" class="form-label"
                          >Biography</label
                        >
                        
                        <textarea
                          rows="2"
                          class="form-control"
                          id="inputBio"
                          placeholder="Tell something about yourself"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-center">
                        <img
                          alt="Chris Wood"
                          src="img/avatars/avatar.jpg"
                          class="rounded-circle img-responsive mt-2"
                          width="128"
                          height="128"
                        />
                        <div class="mt-2">
                          <span class="btn btn-primary"
                            ><i class="fas fa-upload"></i> Upload</span
                          >
                        </div>
                        <small
                          >For best results, use an image at least 128px by
                          128px in .jpg format</small
                        >
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </form>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div class="card-actions float-end">
                  <div class="dropdown position-relative">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal align-middle"
                        data-darkreader-inline-stroke=""
                        style="--darkreader-inline-stroke: currentColor"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Private info</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputFirstName" class="form-label"
                        >First name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputFirstName"
                        placeholder="First name"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="inputLastName" class="form-label"
                        >Last name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputLastName"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="inputAddress2" class="form-label"
                      >Address 2</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="mb-3 col-md-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-control">
                        <option selected="">Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="mb-3 col-md-2">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="password" role="tabpanel">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Password</h5>

                <form>
                  <div class="mb-3">
                    <label for="inputPasswordCurrent" class="form-label"
                      >Current password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="inputPasswordCurrent"
                    />
                    <small><a href="#">Forgot your password?</a></small>
                  </div>
                  <div class="mb-3">
                    <label for="inputPasswordNew" class="form-label"
                      >New password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="inputPasswordNew"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="inputPasswordNew2" class="form-label"
                      >Verify password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="inputPasswordNew2"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-md-4 col-xl-3">
							<div class="card mb-3">
								<div class="card-header">
									<h5 class="card-title mb-0">Profile Details</h5>
								</div>
								<div class="card-body text-center">
									<img src="img/avatars/avatar-4.jpg" alt="Stacie Hall" class="img-fluid rounded-circle mb-2" width="128" height="128">
									<h5 class="card-title mb-0">Stacie Hall</h5>
									<div class="text-muted mb-2">Lead Developer</div>

									<div>
										<a class="btn btn-primary btn-sm" href="#">Follow</a>
										<a class="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Message</a>
									</div>
								</div>
								<hr class="my-0">
								<div class="card-body">
									<h5 class="h6 card-title">Skills</h5>
									<a href="#" class="badge bg-primary me-1 my-1">HTML</a>
									<a href="#" class="badge bg-primary me-1 my-1">JavaScript</a>
									<a href="#" class="badge bg-primary me-1 my-1">Sass</a>
									<a href="#" class="badge bg-primary me-1 my-1">Angular</a>
									<a href="#" class="badge bg-primary me-1 my-1">Vue</a>
									<a href="#" class="badge bg-primary me-1 my-1">React</a>
									<a href="#" class="badge bg-primary me-1 my-1">Redux</a>
									<a href="#" class="badge bg-primary me-1 my-1">UI</a>
									<a href="#" class="badge bg-primary me-1 my-1">UX</a>
								</div>
								<hr class="my-0">
								<div class="card-body">
									<h5 class="h6 card-title">About</h5>
									<ul class="list-unstyled mb-0">
										<li class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-sm me-1" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Lives in <a href="#">San Francisco, SA</a></li>

										<li class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase feather-sm me-1" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Works at <a href="#">GitHub</a></li>
										<li class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin feather-sm me-1" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> From <a href="#">Boston</a></li>
									</ul>
								</div>
								<hr class="my-0">
								<div class="card-body">
									<h5 class="h6 card-title">Elsewhere</h5>
									<ul class="list-unstyled mb-0">
										<li class="mb-1"><span class="fas fa-globe fa-fw me-1"></span> <a href="#">staciehall.co</a></li>
										<li class="mb-1"><span class="fab fa-twitter fa-fw me-1"></span> <a href="#">Twitter</a></li>
										<li class="mb-1"><span class="fab fa-facebook fa-fw me-1"></span> <a href="#">Facebook</a></li>
										<li class="mb-1"><span class="fab fa-instagram fa-fw me-1"></span> <a href="#">Instagram</a></li>
										<li class="mb-1"><span class="fab fa-linkedin fa-fw me-1"></span> <a href="#">LinkedIn</a></li>
									</ul>
								</div>
							</div>
						</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>

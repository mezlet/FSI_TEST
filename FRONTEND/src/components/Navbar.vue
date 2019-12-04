<template>
  <div class="top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img src="../assets/Logo.svg" alt="logo" /><span>WENTWORTHS</span></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-4">
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">LOGIN</a>
          </li>
          <li class="nav-item mr-5">
            <a href="#"
              ><button type="button" class="btn btn-primary">SIGN UP</button></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.top {
  width: 100%;
  font-family: "Poppins", sans-serif;
}

.navbar {
  display: flex;
  justify-content: center;
  align-content: center;
}

.navbar-brand {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 184%;
  color: #080f4d;
}

.navbar-brand span {
  margin-left: 18px;
}

.navbar-nav {
  align-content: center;
}

.nav-link {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}

.btn {
  width: 189px;
  height: 58px;
  background: #080f4d;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 184%;
  color: #ffffff;
  border: none;
}

.btn:hover {
  background: #ffffff;
  border: 3px solid #080f4d;
  color: #080f4d;
  transition: background 500ms ease-in-out;
}
</style>

<template>
    <div class="top">
        <div class="nav">
            <input type="checkbox" id="nav-check">
            <div class="nav-header">
                <div class="nav-title">
                    <a href="#"><img src="../assets/Logo.svg" alt="logo"><span>WENTWORTHS</span></a>
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div class="nav-links">
                <a href="#">ABOUT</a>
                <a href="#">LOGIN</a>
                <a href="#"><button type="button" class="navbtn">SIGN UP</button></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top {
    width: 85%;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}
.nav {
  height: 70px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3%;
}

.nav > .nav-header {
  display: inline;
  justify-content: center;
  align-items: center;
}

.nav > .nav-header > .nav-title span {
    margin-left: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 184%;
    color: #080F4D;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: grid;
  grid-template-columns: 0.7fr 0.7fr 0.7fr;
  justify-content: center;
  align-items: center;
}

.nav > .nav-links > a {
  text-decoration: none;
  font-size: 16px;
line-height: 184%;
    color: #3D3D3D;
}

.nav > .nav-links > a:hover {
  text-decoration: underline;
}

.nav > #nav-check {
  display: none;
}
.navbtn {
    width: 189px;
    height: 58px;
    background: #080F4D;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 184%;
    color: #FFFFFF;
    border: none;
    outline: none;
}

.navbtn:hover {
    background: #FFFFFF;
    border: 3px solid #080F4D;
    color: #080F4D;
    transition: background 500ms ease-in-out;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 184%;
    color: #3D3D3D;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
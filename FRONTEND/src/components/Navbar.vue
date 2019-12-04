<template>
    <div class="top">
        <nav class="navbar">
                <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                    <i class="fa fa-bars"></i>
                </label>
                <router-link to="/">
                    <a href="#" class="logo"><img src="../assets/Logo.svg" alt="logo"><span>WENTWORTHS</span></a>
                </router-link>
                <input type="checkbox" id="chkToggle">

                <ul class="main-nav" id="js-menu">
                <li>
                    <a href="#" class="nav-links">ABOUT</a>
                </li>
                <li>
                    <a href="#" class="nav-links">LOG IN</a>
                </li>

                <router-link to="/signup">
                    <li>
                    <a href="#" class="nav-links"><button type="button" class="navbtn">SIGN UP</button></a>
                </li>
                </router-link>
                </ul>
            </nav>
    </div>
</template>

<style scoped>
.top {
    width: 85%;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}
.navbar {
  font-size: 16px;
  margin-top: 2%;
  padding-bottom: 10px;
}

.main-nav {
  list-style-type: none;
  display: none;
   padding: 0;
}
.logo {
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 184%;
color: #080F4D;
}

.logo span {
    margin-left: 10px;
    font-size: 16px;
}

.nav-links {
  text-decoration: none;
  font-size: 16px;
line-height: 184%;
color: #3D3D3D;
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}

.logo {
  display: inline-block;
  font-size: 22px;
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

.navbar-toggle {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: #080F4D;
  font-size: 30px;
}

#chkToggle {
  display: none;
}

#chkToggle:checked + ul.main-nav {
  display: block;
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  #chkToggle:checked + ul.main-nav {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  
  .main-nav {
    display: grid;
    grid-template-columns: 0.6fr 0.6fr 0.6fr;
    justify-content: center;
    align-items: center;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo {
    margin-top: 0;
  }

  .navbar-toggle {
    display: none;
  }

.navbtn:hover {
    background: #FFFFFF;
    border: 3px solid #080F4D;
    color: #080F4D;
    transition: background 500ms ease-in-out;
}

}
</style>
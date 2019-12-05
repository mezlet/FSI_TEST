<template>
  <div class="main-body">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="intro">
      <div class="left">
        <div>
          <h1
            data-aos="zoom-out"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-center"
          >
            <span class="header-blue">Incredible</span>
            <br />
            <span class="header-blue">app</span>
            <span class="header-red"> features</span>
          </h1>
          <p class="header-text">
            Wentworth provides simple, modern and reliable financial services to
            anyone with a phone number. With Wentworth, you can spend, send,
            receive, save and borrow money with just your phone number
          </p>
          <div class="button-area">
            <div>
              <button class="btn-red">
                <div>
                  <img src="../assets/App Store.svg" alt="appstore" />
                </div>
                <div class="text-area">
                  <p class="text-above">Download on the</p>
                  <p class="text-below">AppStore</p>
                </div>
              </button>
            </div>

            <div>
              <button class="btn-blue">
                <div class="img-log">
                  <img src="../assets/google-play-store.svg" alt="playstore" />
                </div>
                <div class="text-area">
                  <p class="text-above">Get it on</p>
                  <p class="text-below">PlayStore</p>
                </div>
              </button>
            </div>
          </div>

          <div class="display">
            <div class="wordings">
              <h1>How it Works</h1>
              <p>
                Wentworth doesn’t have branches, but you can reach us anytime,
                anywhere. If you ever need help, just send us a quick message on
                the app, social media or on the website
              </p>
            </div>

            <div class="video">
              <img src="../assets/Rectangle 2.svg" alt="video" />
            </div>
          </div>
        </div>
      </div>
      <div class="right" data-aos="slide-left" data-aos-duration="1500">
        <img src="../assets/iphonex.svg" alt="iphone" />
      </div>
    </div>

    <div class="panel">
      <div class="panel-left" data-aos="slide-right" data-aos-duration="1500">
        <img src="../assets/Mobile panels.svg" alt="mobilepanel" />
      </div>
      <div class="panel-right" data-aos="slide-left" data-aos-duration="1500">
        <h1 class="panel-header">The right solutions</h1>
        <div class="panel-container">
          <p class="line-title">Development</p>
          <div class="blue-line"></div>
        </div>
        <div class="panel-container">
          <p class="line-title">UI/UX Design</p>
          <div class="red-line"></div>
        </div>
        <div class="panel-container">
          <p class="line-title">Compatibility</p>
          <div class="black-line"></div>
        </div>
      </div>
    </div>

    <div class="gallery">
      <div class="gallery-left">
        <h1 class="gallery-header">Fresh, new ideas</h1>
        <p class="gallery-text">
          Join over 3,000,000 people who spend, send, receive, save and borrow
          money with just their phone number.
        </p>
        <button class="gallery-button">
          Read More
        </button>
      </div>

      <div class="gallery-right">
        <img
          src="../assets/Rectangle 8.svg"
          alt="first"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <img
          src="../assets/Rectangle 9.svg"
          alt="second"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
        <img
          src="../assets/Rectangle 10.svg"
          alt="third"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <img
          src="../assets/Rectangle 11.svg"
          alt="fourth"
          data-aos="zoom-out"
          data-aos-duration="1500"
        />
      </div>
    </div>

    <div class="list">
      <div class="list-top">
        <h1 class="list-header">
          Powering growth for amazing businesses
        </h1>
        <p class="list-text">
          Wentworths is a growth engine for a new generation of innovative,
          forward-looking organizations operating in Africa.
        </p>
      </div>

      <div class="list-bottom" data-aos="slide-up" data-aos-duration="1500">
        <img src="../assets/master-card.svg" alt="master" class="master" />
        <img src="../assets/apple-logo.svg" alt="apple" />
        <img src="../assets/GIGM.svg" alt="gigm" />
        <img src="../assets/IrokoTV-Plain.svg" alt="iroko" />
        <img src="../assets/Taxify-Plain.svg" alt="taxify" />
        <img src="../assets/Betway-Plain.svg" alt="betway" />
        <img src="../assets/Dominos-Plain.svg" alt="dominos" />
        <img src="../assets/Paylater-Plain.svg" alt="paylater" />
        <img src="../assets/smile-logo.svg" alt="smile" />
        <img src="../assets/master-card.svg" alt="master" class="master" />
        <img src="../assets/apple-logo.svg" alt="apple" />
        <img src="../assets/GIGM.svg" alt="gigm" />
      </div>
    </div>

    <div class="comment" data-aos="slide-up" data-aos-duration="800">
      <div class="comment-header">
        <img src="../assets/comma.svg" alt="comma" />
      </div>

      <div class="comment-below">
        <div class="comment-img">
          <img src="../assets/Vector 1.svg" alt="left" />
        </div>
        <div class="comment-text">
          <p class="comment-text-fist">
            Since we started accepting payments using Wentworth, prepaid orders
            on Bentigos.ng have grown by 15%. We also find the Wentworth UI
            simple & efficient. Wentworth Go makes it so easy to monitor
            transactions and business analytics without having to download an
            app.
          </p>
        </div>
        <div class="comment-img">
          <img src="../assets/Vector 2.svg" alt="right" />
        </div>
      </div>
      <p class="comment-text-name">Femi Cole</p>
      <p class="comment-text-position">Shell CEO</p>

      <div class="latest-updates">
        <h1>Get the Latest App Updates</h1>
        <p>We won't spam you, we promise</p>

        <div class="form">
          <input class="inp" placeholder="Enter your email" type="email" />
          <button class="list-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-body {
  margin-bottom: 5%;
}
.intro {
  display: grid;
  margin: 0 auto;
  width: 85%;
  margin-top: 50px;
  grid-template-columns: 2fr 1.2fr;
  grid-gap: 5%;
}
.left {
  margin-top: 65px;
}
.header-blue {
  font-style: normal;
  font-weight: bold;
  font-size: 74.625px;
  line-height: 110%;
  color: #080f4d;
}
.header-red {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 74.625px;
  color: #ff4b35;
}
.header-text {
  margin-top: 5px;
  text-justify: unset;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.button-area {
  display: flex;
  margin-top: 5%;
}
.img-log {
  width: 30px;
  height: 30px;
}
.img-log img {
  width: 100%;
  height: 100%;
}
.btn-red {
  display: flex;
  grid-template-columns: 2fr 2fr;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 189px;
  height: 58px;
  background: #ff4b35;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
}
.text-area {
  text-align: left;
  margin-left: 10px;
}
.text-above {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 11.3924px;
  letter-spacing: -0.02em;
}
.text-below {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-size: 21.2658px;
  letter-spacing: -0.02em;
}
.btn-blue {
  display: flex;
  grid-template-columns: 2fr 2fr;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 189px;
  height: 58px;
  background: #080f4d;
  border-radius: 4px;
  margin-left: 10%;
  border: none;
  outline: none;
  cursor: pointer;
}

.display {
  margin-top: 17%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.wordings {
  margin-top: 1.5%;
}
.wordings h1 {
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
}
.wordings p {
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.panel {
  width: 100%;
  display: grid;
  margin-top: 5%;
  grid-template-columns: 1.1fr 1fr;
  margin-bottom: 5%;
}
.panel-right {
  margin-top: 30%;
}
.panel-left {
  animation: shake 2s infinite;
}
.panel-header {
  font-style: normal;
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
}
.panel-container {
  margin-top: 7%;
}
.line-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 50%;
  color: #000000;
}
.blue-line {
  width: 50%;
  height: 8px;
  background: #2031ce;
  border-radius: 20px 0px 0px 20px;
}
.red-line {
  width: 70%;
  height: 8px;
  background: #ff4b35;
  border-radius: 20px;
  border-radius: 20px 0px 0px 20px;
}
.black-line {
  width: 60%;
  height: 8px;
  background: #080f4d;
  border-radius: 20px;
  border-radius: 20px 0px 0px 20px;
}
.gallery {
  width: 85%;
  margin: 0 auto;
  display: grid;
  margin-top: 5%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  margin-bottom: 5%;
}
.gallery-left {
  display: grid;
  justify-content: center;
  align-content: center;
}
.gallery-header {
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
  margin-bottom: 5%;
}
.gallery-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.gallery-button {
  width: 187px;
  height: 59px;
  font-size: 16px;
  background: #ff4b35;
  border-radius: 4px;
  border: none;
  margin-top: 8%;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}
.gallery-button:hover {
  background: #ffffff;
  color: #ff4b35;
  border: 3px solid #ff4b35;
  transition: background 500ms ease-in-out;
}
.gallery-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6%;
}
.list {
  width: 85%;
  margin: 0 auto;
  margin-top: 6%;
  margin-bottom: 6%;
}
.list-top {
  width: 47%;
}
.list-header {
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
}
.list-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.list-bottom {
  width: 95%;
  margin: 0 auto;
  margin-top: 6%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 8%;
  grid-row-gap: 50px;
}
.master {
  width: 50%;
}
.comment {
  width: 85%;
  margin: 0 auto;
}
.comment-header {
  text-align: center;
  margin-bottom: 3%;
}
.comment-below {
  display: grid;
  grid-template-columns: 1fr 4.5fr 1fr;
}
.comment-text {
  font-family: Poppins;
  font-style: normal;
  text-align: center;
}
.comment-text-fist {
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.comment-text-name {
  margin: 0;
  font-weight: bold;
  font-size: 22.9136px;
  color: #080f4d;
  text-align: center;
}
.comment-text-position {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #cecece;
  text-align: center;
}
.comment-img {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.latest-updates {
  text-align: center;
}
.latest-updates h1 {
  margin-top: 6%;
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
}
.latest-updates p {
  margin-top: 1%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
}
.form {
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5%;
}
.inp {
  margin-top: 5%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cecece;
  width: 100%;
  color: #3d3d3d;
  outline: none;
}
.inp:focus {
  color: #3d3d3d;
  border-bottom: 1px solid #cecece;
  opacity: 1;
}
[placeholder] {
  font-size: 16px;
  line-height: 184%;
  color: #3d3d3d;
  opacity: 0.3;
}
[placeholder]:focus::-webkit-input-placeholder {
  transition: text-indent 0.2s 0.2s ease;
  text-indent: -100%;
  opacity: 0;
}
.list-button {
  width: 187px;
  height: 59px;
  font-size: 16px;
  background: #ff4b35;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}
.list-button:hover {
  background: #ffffff;
  color: #ff4b35;
  border: 3px solid #ff4b35;
  transition: background 500ms ease-in-out;
}
@keyframes shake {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
}
@media only screen and (max-width: 991.5px) {
  .intro {
    width: 90%;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
  }
  .left {
    width: 100%;
    margin-top: 0px;
  }
  .right {
    display: none;
  }
  .display {
    width: 100%;
    margin-top: 17%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .panel {
    width: 90%;
    margin: 0 auto;
    display: grid;
    margin-top: 4%;
    grid-template-columns: 1fr;
  }
  .panel-right {
    margin-top: 10%;
  }
  .wordings {
    margin-top: 0%;
    width: 100%;
  }
  .gallery {
    width: 90%;
    margin: 0 auto;
    display: grid;
    margin-top: 0%;
    margin-bottom: 5%;
    grid-template-columns: 1fr;
    grid-gap: 5%;
  }
  .gallery-right {
    grid-gap: 0%;
    grid-row-gap: 4%;
  }
  .list {
    width: 90%;
    margin: 0 auto;
    margin-top: 10%;
  }
  .list-top {
    margin-top: 40px;
    width: 100%;
  }
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .intro {
    width: 90%;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
  }
  .left {
    width: 100%;
    margin-top: 0px;
  }
  .right {
    display: none;
  }
  .display {
    width: 100%;
    margin-top: 17%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .video {
    width: 100%;
  }
  .video img {
    width: 100%;
  }
  .header-blue,
  .header-red {
    font-size: 40px;
    z-index: 1;
  }
  .btn-red,
  .btn-blue {
    width: 140px;
    height: 58px;
  }
  .panel {
    width: 90%;
    margin: 0 auto;
    display: grid;
    margin-top: 5%;
    grid-template-columns: 1fr;
  }
  .panel-left {
    width: 300px;
    height: 300px;
  }
  .panel-left img {
    width: 100%;
    height: 100%;
  }
  .panel-right {
    width: 100%;
    margin-top: 10%;
  }
  .gallery {
    width: 90%;
    margin: 0 auto;
    display: grid;
    margin-top: 5%;
    grid-template-columns: 1fr;
    grid-gap: 5%;
  }
  .gallery-header {
    margin-top: 30px;
    margin-bottom: 5%;
  }
  .gallery-right {
    display: none;
  }
  .gallery-button {
    width: 150px;
    height: 50px;
    margin-top: 0%;
  }
  .blue-line {
    width: 60%;
  }
  .red-line {
    width: 90%;
  }
  .black-line {
    width: 70%;
  }
  .list {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }
  .list-top {
    width: 100%;
  }
  .list-text {
    font-weight: normal;
    font-size: 16px;
    line-height: 184%;
    color: #3d3d3d;
  }
  .list-bottom {
    width: 95%;
    margin: 0 auto;
    margin-top: 6%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10%;
    grid-row-gap: 0px;
  }
  .list-bottom img {
    width: 50px;
    height: 50px;
  }
  .comment-header {
    display: none;
  }
  .gallery-header,
  .panel-header,
  .list-header,
  .wordings h1,
  .latest-updates h1 {
    font-size: 30px;
  }
  .gallery-text,
  .panel-text,
  .list-text,
  .wordings p,
  .comment-text-name,
  .latest-updates p {
    font-size: 14px;
  }
  .latest-updates {
    margin-top: 50px;
  }
  .comment {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
  }
  .comment-below {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
  .comment-text-fist {
    font-size: 12px;
  }
  .list-button {
    width: 100px;
    height: 50px;
  }
  [placeholder] {
    font-size: 14px;
  }
}
</style>

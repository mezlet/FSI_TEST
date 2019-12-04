<template>
  <div class="main">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="intro">
      <div class="left">
        <div>
          <h1 data-aos="zoom-out" data-aos-duration="2000">
            <span class="header-blue">Incredible</span>
            <br />
            <span class="header-blue">app</span>
            <span class="header-red"> features</span>
          </h1>
          <p class="header-text">
            Wentworth provides simple, modern and reliable financial services to
            anyone with a
            <br />phone number. With Wentworth, you can spend, send, receive,
            save and borrow money <br />with just your phone number
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

            <div>
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
      <div>
        <img src="../assets/Mobile panels.svg" alt="mobilepanel" />
      </div>
      <div class="panel-right">
        <h1 class="panel-header">The right solutions</h1>
        <div class="panel-section">
          <p class="line-title">Development</p>
          <div class="blue-line"></div>
        </div>
        <div class="panel-section">
          <p class="line-title">UI/UX Design</p>
          <div class="red-line"></div>
        </div>
        <div class="panel-section">
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
        <img src="../assets/Rectangle 8.svg" alt="first" />
        <img src="../assets/Rectangle 9.svg" alt="second" />
        <img src="../assets/Rectangle 10.svg" alt="third" />
        <img src="../assets/Rectangle 11.svg" alt="fourth" />
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

      <div class="list-bottom">
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

    <div class="comment-section">
      <h1 class="comment-section-header">"</h1>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
}
.intro {
  display: grid;
  margin-top: 50px;
  grid-template-columns: 2fr 1.2fr;
}
.left {
  margin-top: 70px;
}
.header-blue {
  font-style: normal;
  font-weight: bold;
  font-size: 74.625px;
  line-height: 110%;
  color: #080f4d;
}
.header-red {
  font-style: normal;
  font-weight: bold;
  font-size: 74.625px;
  line-height: 110%;
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
}

.display {
  margin-top: 17%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.wordings {
  margin-top: 2%;
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
}
.panel-right {
  margin-top: 30%;
}
.panel-header {
  font-style: normal;
  font-weight: 600;
  font-size: 48.1864px;
  line-height: 103%;
  color: #080f4d;
}
.panel-section {
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
  grid-template-columns: 1.1fr 1fr;
  grid-gap: 5%;
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
  background: #ff4b35;
  border-radius: 4px;
  border: none;
  margin-top: 8%;
  color: #ffffff;
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
  grid-row-gap: 70%;
}
.master {
  width: 50%;
}
</style>

<template>
    <div class="footer">
        <div class="footer-flex">
            <div class="footer-flex-grid">
                <p><img src="../assets/Group 11.svg" alt="logo"></p>
                <h1 class="white-logo-text">WENTWORTHS</h1>
            </div>
            <div class="footer-flex-grid">
                <p>Terms of Use</p>
                <p>Privacy</p>
            </div>
            <div class="footer-flex-grid">
                <p>Product</p>
                <p>Pricing</p>
            </div>
            <div class="footer-flex-grid">
                <p>Support</p>
                <p>Blog</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer{
    width: 100%;
    padding: 50px;
    background: #080F4D;
    bottom: 0;
    left: 0;
    color: #FFFFFF;
}
.footer-flex{
    width: 85%;
    margin: 0 auto;
    display: grid;
    padding-top: 30px;
    grid-gap: 10%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.footer-flex-grid p {
    margin: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.03em;
}
.white-logo-text{
    margin: 0;
    font-weight: bold;
    font-size: 23.3846px;
    line-height: 100%;
}

@media only screen 
  and (min-width: 320px) 
  and (max-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
.footer{
    width: 100%;
    padding: 20px;
}
.footer-flex{
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
}
.footer-flex-grid p {
    font-size: 14px;
}
.white-logo-text{
    font-size: 16px;
}

}
</style>
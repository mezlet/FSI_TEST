<template>
    <div>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="main">
            <div class="left">
               <div>
                   <h1>
                       Incredible
                       <span class="header-blue">app</span>
                       <span class="header-red">features</span>
                    </h1>
               </div>
            </div>
            <div class="right">
               <img src="../assets/iphonex.svg" alt="iphone">
            </div>
        </div>
        </div>
</template>

<style scoped>
.main{
    display: grid;
    margin-top: 50px;
    grid-template-columns: 2fr 1fr;
}
.left {
    width: 70%;
    margin-top: 50px;
}
.header-blue {
    font-style: normal;
    font-weight: bold;
    font-size: 74.625px;
    line-height: 103%;
    color: #080F4D;
    }
.right{
    width: 30%
}
</style>
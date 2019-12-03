<template>
    <div>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="main">
            <div class="left">
               <div>
                   <h1>
                       <span>Incredible app</span>
                       <span></span>
                       features</h1>
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
.right{
    width: 30%
}
</style>
<template>
  <div class="navbar">
      <div class="left"><slot name="left"></slot></div> 
      <div class="center"><slot name="center"></slot></div> 
      <div class="right"><slot name="right"></slot></div> 
  </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>

    .navbar{
        display: flex;
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0; */
        height: 44px;
    }
    .navbar .left,.right{
        width:70px;
    }
    .navbar .center{
        flex: 1;
    }
</style>
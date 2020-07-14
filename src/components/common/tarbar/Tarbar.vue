<template>
  <div class="tarbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tarbar'
}
</script>

<style>
    .tarbar{
         background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;

        box-shadow: #e4e1e1 10px 10px 5px 10px;
    }

</style>

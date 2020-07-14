<template>
  <div class="tarbar-item" @click="tarbarClick">
       <div v-if="!isActive"><slot name="item-ico"></slot></div>
      <div v-else><slot name="item-ico-a"></slot></div>
      <div :class="{acrive:isActive}" class="titleText"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tarbaritem',
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  props: {
    path: {
      type: String
    }
  },
  methods: {
    tarbarClick () {
      if (this.$route.path === this.path) return
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
    .tarbar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        padding: 3px 0px;
    }

    .tarbar-item img {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
    .tarbar-item .titleText{
      margin-top: 1px;
    }
    .acrive{
        color: #f7999f;
    }
</style>

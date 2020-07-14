<template>
 <div>
     <Tarbar>
         <Tarbaritem path='/home'>
            <img slot="item-ico" src="~assets/image/Tarbar/home.png" alt="">
            <img slot=item-ico-a src="~assets/image/Tarbar/home-a.png" alt="">
            <div slot="item-text">首页</div>
         </Tarbaritem>
         <Tarbaritem path='/category'>
                <img slot="item-ico" src="~assets/image/Tarbar/classify.png" alt="">
                <img slot=item-ico-a src="~assets/image/Tarbar/classify-a.png" alt="">
                <div slot="item-text">分类</div>
         </Tarbaritem>
         <Tarbaritem path='/cart'>
                <img slot="item-ico" src="~assets/image/Tarbar/shopping.png" alt="">
                <img slot=item-ico-a src="~assets/image/Tarbar/shopping-a.png" alt="">
                <div slot="item-text">购物车</div>
         </Tarbaritem>
         <Tarbaritem path='/profile'>
                <img slot="item-ico" src="~assets/image/Tarbar/my.png" alt="">
                <img slot=item-ico-a src="~assets/image/Tarbar/my-a.png" alt="">
                <div slot="item-text">我的</div>
         </Tarbaritem>
         
     </Tarbar>
 </div>
</template>

<script>

import Tarbar from 'components/common/tarbar/Tarbar'
import Tarbaritem from 'components/common/tarbar/Tarbaritem'

export default {
  name: 'MainTarBar',
  components: {
    Tarbar, Tarbaritem
  }
}
</script>

<style>

</style>

<template>
  <div id="home">
          <navbar class="nav">
            <div slot="center" class="nav-title"><h2>购物街</h2> </div>
          </navbar>
            <div class="swiper">
                <carousel :banners='banners'></carousel>
            </div>
            <div class="recommend">
                <recommend :recommend="recommend"></recommend>
            </div>
  
  </div>
</template>

<script>
// 主页
import navbar from 'components/common/navbar/navbar';
import Carousel from 'components/common/swper/Carousel';
import recommend from 'views/home/ChildComps/Recommend'

// Api
import {getHomeMultidata} from 'network/requestApi/home'

export default {
  name: 'home',
  data(){
    return {
      banners:[],
      recommend:[],
    }
  },
  components:{
    navbar,Carousel,recommend
  },
  created(){

    getHomeMultidata()
    .then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
    
  },
  beforeRouteLeave(to,from,next){
        let imgActive = document.querySelectorAll('.el-carousel__item');
        for(let imgix = 0;imgix < imgActive.length;imgix++){
          if(imgActive[imgix]['className'].indexOf('is-active') !== -1){
             this.$store.dispatch('AUpImdexIndex',imgix);
          }
        }
        next();
    }
}
</script>

<style>

.nav{
  background-color:rgba(224, 96, 103,0.9) ;
}
.nav-title{
  
        text-align: center;
        line-height: 44px;
        
}
.nav-title h2{
  color: #ffffff;
  font-size: 20px;
  line-height: 25px;
  font-weight: 400;
}
</style>

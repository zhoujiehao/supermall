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
            <div class="feature">
              <feature></feature>
            </div>
            <div class="tarcontrol">
              <tarcontrol :arrList="['流行','新款','精选']"></tarcontrol>
            </div>
            <div>
              <ul>
                <li>001</li>
                <li>002</li>
                <li>003</li>
                <li>004</li>
                <li>005</li>
                <li>006</li>
                <li>007</li>
                <li>008</li>
                <li>009</li>
                <li>010</li>
                <li>011</li>
                <li>012</li>
                <li>013</li>
                <li>014</li>
                <li>015</li>
                <li>016</li>
                <li>017</li>
                <li>018</li>
                <li>019</li>
                <li>020</li>
                <li>021</li>
                <li>022</li>
                <li>023</li>
                <li>024</li>
                <li>025</li>
                <li>026</li>
                <li>027</li>
                <li>028</li>
                <li>029</li>
                <li>030</li>
                <li>031</li>
                <li>032</li>
                <li>033</li>
                <li>034</li>
                <li>035</li>
                <li>036</li>
                <li>037</li>
                <li>038</li>
                <li>039</li>
                <li>040</li>
                <li>041</li>
                <li>042</li>
                <li>043</li>
                <li>044</li>
                <li>045</li>
                <li>046</li>
                <li>047</li>
                <li>048</li>
                <li>049</li>
                <li>050</li>
              </ul>
            </div>
  </div>
</template>

<script>
// 主页
import navbar from 'components/common/navbar/navbar';
import Carousel from 'components/common/swper/Carousel';
import recommend from 'views/home/ChildComps/Recommend';
import feature from 'views/home/ChildComps/featureView';
import tarcontrol from 'components/conter/Tarcontrol/Tarcontrol';

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
    navbar,
    Carousel,
    recommend,
    feature,
    tarcontrol
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

.tarcontrol {
  position: sticky;
  top: 44px;
}
.nav{
  position: sticky;
  top: 0;
  background-color: var(--tintColor);
  z-index: 999;
}

</style>

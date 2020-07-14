<template>
<keep-alive>
    <div class="block">
        <el-carousel :initial-index=$store.state.ImgIndex arrow='always' height='250px'>
            <el-carousel-item v-for="item in banners" :key="item['image']" v-loading='loading'>
                 <img class="banners" :src="item['image']" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
  </keep-alive>
</template>
<script>
export default {
    name:'Carousel',
    props:{
        banners:{
            type:Array
        },
        bannerImgIndex:{
            type:Number,
        }
    },
    data(){
        return {
            loading:true,
            imageIndex:0
        }
    },
    mounted(){
        this.loading = false
    },
    methods:{
        prev(e){
            console.log(e)
        },
        next(e){
            console.log(e)
        }
    }

}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .banners{
      width: 100%;
      height: 100%;
  }
 
</style>

<template>
  <div id="recommend">
        <div class="recom-item"  v-for="item in recommend" :key="item.image">
            <a :href="item.link">
                <div class="recom-img"><img :src="item.image" alt=""></div>
                <div><h2>{{item.title}}</h2></div>
            </a>
        </div>
        
  </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }

        }
    }
}
</script>

<style>
#recommend{
    display: flex;
    height: 150px;
    margin-top: 15px;
    box-shadow: #f8f7f7 0px 10px 5px 4px;
}
.recom-item{
    width: 20%;
    border-radius: 20px;
    flex: 1;
    text-align: center;
}
.recom-item h2{
    text-align: center;
    color: #2e2c2c;
    font-size: 16px;
}
.recom-img img{
    width: 70px;
    height: 70px;
}

</style>
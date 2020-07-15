<template>
  <div class="tar-control">
      
      <div class="tar-control-item" 
            v-for="(item,index) in arrList" 
            :key='index'
            :class="{active:activeIndex === index}"
            @click="tarControlClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tarcontrol',
    props:{
        arrList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            activeIndex:0
        }
    },
    methods:{
        tarControlClick(index){
            this.activeIndex = index
        }
    }
}
</script>

<style>
.tar-control{
    margin-bottom: 100px;
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #fff;
}
.tar-control-item{
    flex: 1;
    text-align: center;
}
.tar-control-item span {
    font-size: 17px;
    color:var(--textColor);
    padding: 5px;

}
.active span{
    color: var(--tintColor);
    border-bottom: 2px solid var(--tintColor);
}
</style>
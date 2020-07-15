<template>
  <div id="featureView">
      <div class="feat-title">
          <h4>本周推荐</h4>
      </div>
      <div class="feat-center">
          <ul>
              <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
               <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
               <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
               <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
               <li>
                  <a href="">
                      <div class="feat-item">
                          <img src="~assets/image/1.png" alt="">
                          <p>标题标题</p>
                      </div>
                  </a>
              </li>
              
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'feature'
}
</script>

<style>
    #featureView{
        box-shadow: #fafafa 1px 5px 2px 5px;
    }
    .feat-title{
        height: 35px;
        /* background-color: red; */
    }
    .feat-title h4{
        text-align: center;
        font-size: 21px;
        color: #000000;
        font-weight: 520;
        line-height: 30px;
    }
    .feat-center ul{
        display: flex;
        padding: 0 0;
       justify-content: space-evenly;
       flex-grow: inherit;
       flex-wrap: wrap;
    }
    .feat-center ul li {
        padding: 10px 10px;
    }
    .feat-center ul li:hover .feat-item p{
        color: var(--tintColor);
    }
    .feat-item img{
        width: 65px;
        height: 60px;
        border-radius: 20px;
    }
    .feat-item p{
        font-size:16px;
        text-align: center;
        color: #0f0f0f;
    }

</style>
<template recyclable>
  <div class="tab-cell">
    <div class="tab" v-for="(tab, t) in tabs" :key="t">
      <image class="tab-icon" :src="tab.icon"></image>
      <text class="tab-title"  @click="jump(tab.url,tab.title)">{{tab.title}}</text>
    </div>
  </div>
</template>

<script>
const navigator = weex.requireModule("navigator");
const storage = weex.requireModule('storage')
import { getEntryUrl } from "./utils";
  export default {
    props: ['tabs'],
     methods:{

            jump(url,title){
                
                storage.setItem('currentTitle', title, event => {
          this.state = 'set success'
          console.log('set success')

            navigator.push({
        // url: "./detail.html",
        url: getEntryUrl(url),
        animated: "true"
      });
      
        })
             

            }
        }
  }
</script>

<style scoped>
  .tab-cell {
    flex-direction: row;
    justify-content: stretch;
    background-color: #f51438;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .tab-icon {
    width: 45px;
    height: 45px;
  }
  .tab-title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
</style>

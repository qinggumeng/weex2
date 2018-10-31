<template>
    <div class='container'>
        <!-- 标题 -->
        <div class="panel titlePanel">
            <text class='title'>{{msg}}</text>
        </div>
        <!-- 导航区 -->
      <div class="panel">
          <text class="button" @click="jump">Jump</text>

          
      </div>
     
    </div>
</template>
<script>
const navigator = weex.requireModule("navigator");
import { getEntryUrl } from "./utils";

    export default{
        data(){
            return {
                msg:'你好，weex'
            }
        },
        methods:{
            jump(){
               navigator.push({
        // url: "./detail.html",
        url: getEntryUrl("one"),
        animated: "true"
      });

            }
        }
    }
</script>
<style>
.container {
    background-color:#f4f4f4;
}

.panel {
    flex-direction: row;
    height: 100px;
    border-bottom-width: 1px;
    justify-content: space-between;
}
.titlePanel {
    justify-content: center;
    background-color: #ededed;
}
.title {
    height: 100px;
    line-height: 100px;
}
.link{
    line-height: 100px;
    text-align: center;
    flex: 1
}
</style>
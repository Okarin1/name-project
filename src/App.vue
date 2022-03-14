<template>
  <div id="app">
    <words />
    <div class="content-box">

      <h2>说明</h2>
      <blockquote>
        <p>一些注意事项</p>
        <p>
         这玩意只是为了王者荣耀名字写的，因为王者荣耀名字可以有特殊符号。所以当你输入一个名字，会在这个名字的前后填充任意的空白字符然后输出，
         这个空白字符在ios和安卓端看起来都是空白的，不会出现 '☐' 这种情况，你可以将所有结果复制后去粘贴使用，如果碰巧其中一个可以使用，
         恭喜你，有了一个看起来一模一样重复名字。祝你好运！
        </p>
        <p>@送报少年</p>
      </blockquote>
      
       <h2>打赏</h2>
      <p>
       <a href="https://donate.okarin.cn/" target="_blank"
          >点击这里请作者喝瓶美汁源吧！</a
        >
      </p>

      <h2>为什么做这东西？</h2>
      <p>因为我懒🙄</p>

      <h2>怎么使用这玩意儿？</h2>
      <p>如你所见，输入，生成，复制，粘贴</p>

      <h2>要反馈问题？</h2>
      <p>
        请联系我
        <a href="https://weibo.com/u/6331216566" target="_blank">@送报少年</a>
      </p>

      <h2>还有什么补充？</h2>
      <p>
        这玩意儿目前只能完全输出中文名字，不能将加了空白的英文名字全部输出。
      </p>

      <h2>仓库地址</h2>
      <p>
        <a href="https://github.com/Okarin1/name-project" target="_blank"
          >https://github.com/Okarin1/name-project</a
        >
      </p>

      <h2>鸣谢</h2>
      <p><a href="https://weibo.com/reiove" target="_blank">@卜卜口</a></p>
    </div>
  </div>
</template>

<script>
import Words from "./components/Words.vue"

export default {
  name: "App",
  components: {
    Words,
  },
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/name.css";

.cpt-toast {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 20vh;
  text-align: center;
}
.success {
  font-size: 15px;
  color: white;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(14, 13, 13, 0.6);
}
</style>

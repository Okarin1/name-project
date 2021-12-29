<template>
  <div id="words">
    <div class="input">
    <textarea
      v-model="words"
      placeholder="输入6个字以内名字"
      @keyup.delete="purgeText"
    ></textarea>

    <button class="btn" @click="showName">生成</button>
    </div>
    <div class="okarin-box okarin-box-doc" v-if="show">
      <div class="okarin-tag-list" v-if="names.length">
        <div class="okarin-tag-item">
          <div class="okarin-tran-list" v-if="names && words">
            <span class="okarin-tran-item" v-for="name in names" :key="name">
              <span>{{ name }}</span
              ><sub @click="copyText">复制</sub>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "@/common/toast";
import { toWord } from "@/common/name";

export default {
  components: {},
  name: "Words",
  alphabet: 0,
  data() {
    return {
      words: "",
      names: [],
      show: true,
    };
  },
  methods: {
    copyText(event) {
      let content = event.target.previousElementSibling.innerHTML;
      event.target.previousElementSibling.classList.add("myStyle");
      console.log(content);
      if (content) {
        const el = document.createElement("textarea"); //创建一个textarea
        el.value = content; //textarea的内容
        el.setAttribute("readonly", ""); //添加相应的属性，不影响整体布局
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy"); //拷贝当前选中内容到剪贴板
        Toast.success("文本已复制");
      }
    },
    purgeText(event) {
      if (event.target.value == "") {
        this.names = [];
      }
    },
    showName() {
      this.words
        ? (this.names = toWord(this.words))
        : Toast.success("请输入名字");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.myStyle {
  text-decoration: line-through;
}
.input{
  display: flex;
  flex-flow: column nowrap;
}
.btn{
  align-self: center;
  margin-top: 10px;
	width: 200px;
	line-height: 30px;
	text-align: center;
	font-size: 16px;
	cursor: pointer;
}
</style>

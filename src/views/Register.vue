<template>
  <div class="register">
    <div class="registerinput">
      <div class="title">用户注册</div>
      <el-input v-model="state.name" placeholder="名字" class="name" />
      <el-input
        v-model="state.identity"
        placeholder="身份证"
        class="identity"
      />
      <div class="button">
        <el-button @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
    let state = reactive({
      name: "",
      identity: "",
    });
    const register = function () {
      router.push({ path: "/Home" });
    };
    return {
      state,
      register,
    };
  },
});
</script>

<style lang="scss" scoped>
.register {
  position: relative;
  height: 100vh;
  background: url("../assets/bank.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  .registerinput {
    border-radius: 8px;
    background-color: white;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
  .title {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: bold;
  }
  .name {
    width: 90%;
    margin: 5px 0;
  }
  .identity {
    width: 90%;
    margin: 5px 0;
  }
  .button {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
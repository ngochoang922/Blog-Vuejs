<template>
 <div class="form-container">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="login">
      <label for="email">Tên Đăng Nhập</label>
      <input v-model="email" type="text" id="email" name="email" placeholder="Nhập Email" required>

      <label for="password">Mật Khẩu</label>
      <input v-model="password" type="password" id="password" name="password" placeholder="Nhập mật khẩu" required>

      <button type="submit" class="btn">Đăng Nhập</button>

      <p>Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link></p>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import API from '../api/api'

export default defineComponent({
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login(){
      try {
        const res = await API.post("/access/sign-in", { email: this.email, password: this.password });
        localStorage.setItem("token", res.data.metadata.AccessToken);
        if(res.data.status == 200){
          this.$router.push("/home");
        }
        console.log("Response Data:", JSON.stringify(res.data, null, 2));
      } catch (error) {
        console.error(`Login Vue Error:::${error}`);
      }
    }
  }
})
</script>


<style scoped>
@import "../assets/login.css";
</style>

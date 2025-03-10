<template>
 <div class="form-container">
    <h2>Đăng Ký</h2>
    <form @submit.prevent="register" method="POST">
      <label for="username">Tên Đăng Nhập</label>
      <input v-model="username" type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" required>

      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" name="email" placeholder="Nhập email" required>

      <label for="password">Mật Khẩu</label>
      <input v-model="password" type="password" id="password" name="password" placeholder="Nhập mật khẩu" required>

      <label for="confirm-password">Xác Nhận Mật Khẩu</label>
      <input type="password" id="confirm-password" name="confirm-password" placeholder="Xác nhận mật khẩu" required>

      <button type="submit" class="btn">Đăng Ký</button>
      
      <p>Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></p>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import API from '../api/api'

export default defineComponent({
  data() {
    return { username: "", email: "", password: "" };
  },
  methods: {
    async register(){
      try {
        const res = await API.post("/access/sign-up", { 
          username: this.username,
          email: this.email,
          password: this.password
        });

        if(res.data.status == 200){
          this.$router.push("/login"); 
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
@import "../assets//register.css";
</style>

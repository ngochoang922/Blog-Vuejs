<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="text-white text-center">Đăng Ký</h2>
      <form @submit.prevent="register">
        
        <label for="username" class="text-white">Tên Đăng Nhập</label>
        <input v-model="username" type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" required>

        <label for="email" class="text-white">Email</label>
        <input v-model="email" type="email" id="email" name="email" placeholder="Nhập email" required>

        <label for="password" class="text-white">Mật Khẩu</label>
        <input v-model="password" type="password" id="password" name="password" placeholder="Nhập mật khẩu" required>

        <label for="confirm-password" class="text-white">Xác Nhận Mật Khẩu</label>
        <input v-model="confirmPassword" type="password" id="confirm-password" name="confirm-password" placeholder="Xác nhận mật khẩu" required>

        <button type="submit" class="btn">Đăng Ký</button>

        <p class="text-center text-white">
          Đã có tài khoản? 
          <router-link to="/login" class="text-link">Đăng nhập</router-link>
        </p>

      </form>
    </div>
  </div>
</template>


 

 <script>
 import { defineComponent } from "vue";
 import API from '../api/api'
 
 export default defineComponent({
   data() {
     return { username: "", email: "", password: "", confirmPassword: "" };
   },
   methods: {
     async register(){
       if (this.password !== this.confirmPassword) {
         alert("Mật khẩu xác nhận không khớp!");
         return;
       }
       
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
@import "../assets/register.css";
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url('../assets/images/sunset-forest-minimal-4k-wallpaper-thumb.jpg') no-repeat center center/cover;
  position: fixed;
  top: 0;
  left: 0;
}

.register-box {
  width: 400px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.15); /* Hiệu ứng mờ */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgb(142, 133, 133);
  text-align: left;
  backdrop-filter: blur(10px); /* Làm mờ nền */
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.3);
  color: rgb(0, 0, 0);
}

input::placeholder {
  color: rgba(224, 210, 210, 0.7);
}

button {
  width: 100%;
  padding: 12px;
  background: #02ffff;
  border: none;
  border-radius: 6px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #25d0d3;
}

a {
  text-align: center;
  color: #25a99e;
}

a:hover {
  text-decoration: underline;
}
</style>


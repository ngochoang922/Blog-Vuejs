<template>
  <div>
    <!-- Header -->
    <header>
      <h1 style="font-family: 'Revista', serif;">Blog HoàngThiếuEm</h1>
      <nav class="nav-links">
        <router-link to="/about">About</router-link>
        <a href="#"><img src="/images/telegram.png" alt="Telegram Icon" class="social-icon"></a>
        <a href="#"><img src="/images/instagram.png" alt="Instagram Icon" class="social-icon"></a>
        <a href="#"><img src="/images/facebook.png" alt="Facebook Icon" class="social-icon"></a>
        <router-link to="/login" class="get-started">Get Started</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <BlogPost 
        title="Bánh Mì Việt Nam – Hương Vị Độc Đáo Gây Xao Xuyến"
        excerpt="Nếu bạn đã từng đặt chân đến Việt Nam, chắc chắn sẽ không thể quên hương thơm quyến rũ từ những chiếc bánh mì nóng hổi..."
        imgSrc="/images/BanhMi_NgonVietnam01.jpg"
      />
      <BlogPost 
        title="Cà Phê Sữa – Hương Vị Tinh Tế Của Sự Kết Hợp Hoàn Hảo"
        excerpt="Cà phê sữa là một trong những thức uống đặc trưng của văn hóa cà phê Việt Nam..."
        imgSrc="/images/hinh-anh-ly-cafe-9.jpg"
      />
      <BlogPost 
        title="Phở – Tinh Hoa Ẩm Thực Việt Nam"
        excerpt="Phở là món ăn quốc hồn quốc túy của người Việt Nam..."
        imgSrc="/images/pho-bo.jpg"
      />
      <BlogPost 
        title="Trà Sữa – Thức Uống Gây Sốt Toàn Cầu"
        excerpt="Trà sữa không chỉ là một thức uống mà còn là biểu tượng của sự sáng tạo..."
        imgSrc="/images/tra-sua.jpg"
      />
      <BlogPost 
        title="Nước Mía – Hương Vị Giải Nhiệt Mùa Hè"
        excerpt="Nước mía là thức uống quen thuộc ở Việt Nam..."
        imgSrc="/images/nuoc-mia.png"
      />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h2 class="site-title">Site Title</h2>
          <p class="tagline">Write site tagline...</p>
          <p class="designed-with">Designed with <a href="#">WordPress</a></p>
        </div>

        <div class="footer-column">
          <h3>About</h3>
          <ul>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/history">History</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Privacy</h3>
          <ul>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms and Conditions</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Social</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter/X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import "../assets/styles.css";
</style>

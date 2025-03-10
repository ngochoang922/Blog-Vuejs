<template>
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
</template>

<script>
export default {

}
</script>

<style>
/* Footer Styles */
.footer {
    background-color: #e6e3e0;
    padding: 64px 0;
    font-family: Arial, sans-serif;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-column {
    margin-bottom: 40px;
}

.footer-logo {
    width: 48px;
    height: 48px;
    background-color: #ccc;
    transform: rotate(-45deg);
    margin-bottom: 20px;
}

.site-title {
    font-size: 20px;
    margin-bottom: 10px;
    font-family: Georgia, serif;
    font-weight: normal;
}

.tagline {
    color: #666;
    font-style: italic;
    margin-bottom: 32px;
}

.designed-with {
    font-size: 14px;
    color: #666;
    margin-top: 32px;
}

.designed-with a {
    color: #333;
    text-decoration: underline;
}

.footer h3 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 500;
    color: #333;
}

.footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer ul li {
    margin-bottom: 10px;
}

.footer ul li a {
    color: #333;
    text-decoration: none;
}

.footer ul li a:hover {
    text-decoration: underline;
}
</style>
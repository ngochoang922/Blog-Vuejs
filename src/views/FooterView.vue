<template>
   <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
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
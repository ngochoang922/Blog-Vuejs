<template>
    <header class="header">
        <h1 style="font-family: 'Revista', serif;">Star Network</h1>
        <nav class="nav-links">
            <a href="https://web.telegram.org/"><img src="../assets/images/telegram.png" alt="Telegram Icon" class="social-icon"></a>
            <a href="https://www.instagram.com/"><img src="../assets/images/instagram.png" alt="Instagram Icon" class="social-icon"></a>
            <a href="https://www.facebook.com/"><img src="../assets/images/facebook.png" alt="Facebook Icon" class="social-icon"></a>
            <router-link to="/login">Get Started</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderView"
}
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    background-color: rgb(250, 235, 215);
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #333;
}

.social-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.social-icon:hover {
    transform: scale(1.1);
}
</style>
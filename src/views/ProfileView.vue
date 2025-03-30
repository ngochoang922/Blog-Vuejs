<template>
  <div class="profile-container container">
    <!-- Cover Photo -->
    <div class="cover-photo position-relative">
      <img src="https://picsum.photos/1920/600" alt="Cover Photo" class="img-fluid w-100" style="height: 350px; object-fit: cover;" />
      
      <!-- Centered Profile Picture -->
      <div class="profile-picture-container position-absolute start-50 translate-middle" style="bottom: -80px;">
        <img 
          src="https://picsum.photos/200/200" 
          alt="Profile Picture" 
          class="profile-picture img-thumbnail rounded-circle border-4 border-white" 
          style="width: 170px; height: 170px; object-fit: cover;"
        />
      </div>
    </div>

    <!-- User Information -->
    <div class="profile-info text-center mt-5 pt-5">
      <h2 class="mb-1">John Doe</h2>
      <p class="text-muted">New York, NY</p>
    </div>

    <!-- Navigation Tabs -->
    <div class="text-center mt-4">
  <p class="fw-bold">Posts</p>
  <hr class="mt-2">
</div>


    <!-- User Posts -->
    <UserPosts />

    <!-- Dynamic Content -->
    <div class="mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import UserPosts from "@/views/UserPosts.vue";

export default {
  components: {
    UserPosts,
  },
};
</script>

<style scoped>
.profile-picture-container {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.nav-tabs .nav-link {
  color: #65676B;
}

.nav-tabs .nav-link.router-link-active {
  color: #1877F2;
  border-bottom: 3px solid #1877F2;
}
</style>
<template>
  <div class="container py-4" style="max-width: 600px;">
    <div class="card border-0 shadow-sm">
      <!-- Post Header -->
      <div class="card-header bg-white d-flex align-items-center border-0 pb-0">
        <img 
          :src="post.user.profilePicture" 
          alt="Profile" 
          class="rounded-circle me-3" 
          style="width: 40px; height: 40px; object-fit: cover;"
        />
        <div>
          <h6 class="mb-0 fw-bold">{{ post.user.name }}</h6>
          <small class="text-muted">{{ post.time }}</small>
        </div>
      </div>

      <!-- Post Content -->
      <div class="card-body pt-2">
        <p class="card-text">{{ post.content }}</p>
        
        <!-- Post Image -->
        <img 
          v-if="post.image" 
          :src="post.image" 
          alt="Post Image" 
          class="img-fluid w-100 rounded"
          style="max-height: 500px; object-fit: cover;"
        />
      </div>

      <!-- Interaction Bar -->
      <div class="card-footer bg-white border-top d-flex justify-content-between py-2">
        <button class="btn btn-light w-100 d-flex justify-content-center align-items-center">
          <i class="bi bi-hand-thumbs-up me-2"></i>
          Like
        </button>
        <button class="btn btn-light w-100 d-flex justify-content-center align-items-center">
          <i class="bi bi-chat-text me-2"></i>
          Comment
        </button>
        <button class="btn btn-light w-100 d-flex justify-content-center align-items-center">
          <i class="bi bi-share me-2"></i>
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        user: { 
          name: "John Doe", 
          profilePicture: "https://picsum.photos/200/200?random=1" 
        },
        time: "Just now",
        content: "Just had an amazing day exploring the mountain. The weather was perfect. 🚲",
        image: "https://picsum.photos/600/400?random=2"
      }
    };
  }
};
</script>

<style scoped>
.btn-light {
  border: none;
  color: #65676B;
}

.btn-light:hover {
  background-color: #F0F2F5;
  color: #050505;
}
</style>